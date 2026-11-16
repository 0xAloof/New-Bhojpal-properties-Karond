import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ width: string; height: string }> }
) {
  const { width: rawW, height: rawH } = await context.params;
  const width = Math.min(Math.max(parseInt(rawW, 10) || 400, 100), 1600);
  const height = Math.min(Math.max(parseInt(rawH, 10) || 300, 100), 1200);

  const searchParams = req.nextUrl.searchParams;
  const area = (searchParams.get('area') || 'Bhopal').replace(/[<>&"']/g, '');
  const type = (searchParams.get('type') || 'Property').replace(/[<>&"']/g, '');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Sample Property - For Demo">
    <defs>
      <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#CFCFCF" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#E4E4E4" />
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" fill="none" stroke="#969696" stroke-width="1.5" stroke-dasharray="6 4" />
    <g stroke="#7A7A7A" stroke-width="1.5" fill="#D5D5D5">
      <rect x="${Math.round(width * 0.14)}" y="${Math.round(height * 0.22)}" width="${Math.round(width * 0.33)}" height="${Math.round(height * 0.48)}" />
      <rect x="${Math.round(width * 0.51)}" y="${Math.round(height * 0.22)}" width="${Math.round(width * 0.35)}" height="${Math.round(height * 0.48)}" />
    </g>
    <line x1="${Math.round(width * 0.14)}" y1="${Math.round(height * 0.76)}" x2="${Math.round(width * 0.86)}" y2="${Math.round(height * 0.76)}" stroke="#6E6E6E" stroke-width="2" />
    <text x="50%" y="${Math.round(height * 0.46)}" text-anchor="middle" fill="#3B3B3B" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="0.04em">
      ${area.toUpperCase()} · ${type.toUpperCase()}
    </text>
    <text x="50%" y="${Math.round(height * 0.54)}" text-anchor="middle" fill="#525252" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="600">
      Cadastral Layout (${width}×${height})
    </text>
  </svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
