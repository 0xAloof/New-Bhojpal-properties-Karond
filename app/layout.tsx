import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'New Bhojpal Properties — Karond Real Estate Advisors',
  description:
    'Trusted property advisors on New Jail Road, Karond, Bhopal since 2011. Verified agricultural land, residential plots, and commercial spaces across Karond, Ayodhya Bypass, and Bhanpur.',
  openGraph: {
    title: 'New Bhojpal Properties — Karond Real Estate Advisors',
    description:
      'Trusted property advisors on New Jail Road, Karond, Bhopal since 2011. Verified agricultural land, residential plots, and commercial spaces across Karond, Ayodhya Bypass, and Bhanpur.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Bhojpal Properties — Karond Real Estate Advisors',
    description:
      'Trusted property advisors on New Jail Road, Karond, Bhopal since 2011. Verified agricultural land, residential plots, and commercial spaces across Karond, Ayodhya Bypass, and Bhanpur.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F9FAFB] text-[#0F172A] leading-relaxed antialiased selection:bg-[#25D366] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
