import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AREAS,
  PAPERWORK_CHECKLIST,
  SERVICE_CATALOG,
  WHATSAPP_NUMBER,
  buildPaperworkAuditWhatsAppUrl,
  buildServiceInquiryText,
  buildServiceWhatsAppUrl,
  validateSiteVisitForm,
} from './property-router';

test('buildServiceInquiryText formats exact 3-line Hinglish inquiry string', () => {
  assert.equal(
    buildServiceInquiryText('Agricultural Land', 'Karond'),
    'Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe Karond mein Agricultural Land ki details chahiye.'
  );
  assert.equal(
    buildServiceInquiryText('Residential Plots', 'Ayodhya Bypass'),
    'Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe Ayodhya Bypass mein Residential Plots ki details chahiye.'
  );
  assert.equal(
    buildServiceInquiryText('Commercial', 'Bhanpur'),
    'Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe Bhanpur mein Commercial ki details chahiye.'
  );
});

test('buildServiceWhatsAppUrl targets wa.me/917247244535 with 3-line URL-encoded text (%0A)', () => {
  assert.equal(WHATSAPP_NUMBER, '917247244535');
  const url = buildServiceWhatsAppUrl('Residential Plots', 'Karond');
  assert.equal(
    url,
    'https://wa.me/917247244535?text=Namaste%20New%20Bhojpal%20Properties%2C%0AMain%20aapki%20website%20se%20property%20inquiry%20kar%20raha%2Frahi%20hoon.%0AMujhe%20Karond%20mein%20Residential%20Plots%20ki%20details%20chahiye.'
  );
});

test('SERVICE_CATALOG contains all 3 areas and 3 services per area with Unsplash URLs and Sample Property label', () => {
  assert.equal(AREAS.length, 3);
  for (const area of AREAS) {
    const cards = SERVICE_CATALOG[area.name];
    assert.equal(cards.length, 3);
    assert.deepEqual(
      cards.map((c) => c.service),
      ['Agricultural Land', 'Residential Plots', 'Commercial']
    );
    for (const card of cards) {
      assert.equal(card.imageLabel, 'Sample Property');
      assert.ok(card.imageUrl.startsWith('https://images.unsplash.com/'));
    }
  }
});

test('PAPERWORK_CHECKLIST includes exact Devanagari legal terms', () => {
  assert.deepEqual(
    PAPERWORK_CHECKLIST.map((item) => item.displayTitle),
    [
      'Khasra (खसरा B-1 / P-II)',
      'Registry (पंजीकृत विक्रय पत्र)',
      'Diversion (धारा 172 डायवर्सन)',
      'RERA (रेरा पंजीकरण)',
    ]
  );
});

test('buildPaperworkAuditWhatsAppUrl encodes selected checklist items with Hindi legal terms', () => {
  const url = buildPaperworkAuditWhatsAppUrl(['khasra', 'registry'], 'Bhanpur');
  assert.ok(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`));
  assert.ok(decodeURIComponent(url).includes('Khasra (खसरा B-1 / P-II)'));
  assert.ok(decodeURIComponent(url).includes('Bhanpur'));
});

test('validateSiteVisitForm rejects invalid inputs and accepts valid Indian mobile numbers', () => {
  const emptyCheck = validateSiteVisitForm({
    fullName: '',
    phone: '',
    area: 'Karond',
    service: 'Residential Plots',
  });
  assert.equal(emptyCheck.valid, false);
  assert.ok(emptyCheck.errors.fullName);
  assert.ok(emptyCheck.errors.phone);

  const validCheck = validateSiteVisitForm({
    fullName: 'Ritika Singh',
    phone: '+91 98260 12345',
    area: 'Karond',
    service: 'Residential Plots',
  });
  assert.equal(validCheck.valid, true);
  assert.equal(validCheck.cleanedPhone, '9826012345');
});
