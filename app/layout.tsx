import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Open Land for Sale in Noida Sector 62 | Noida Prime Property',
  description: 'Looking for open land for sale in Noida Sector 62? Explore land opportunities for permitted commercial and investment purposes. Contact Noida Prime Property for plot details, availability, pricing, and property assistance.',
  openGraph: {
    title: 'Open Land for Sale in Noida Sector 62 | Noida Prime Property',
    description: 'Looking for open land for sale in Noida Sector 62? Explore land opportunities for permitted commercial and investment purposes. Contact Noida Prime Property for plot details, availability, pricing, and property assistance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Land for Sale in Noida Sector 62 | Noida Prime Property',
    description: 'Looking for open land for sale in Noida Sector 62? Explore land opportunities for permitted commercial and investment purposes. Contact Noida Prime Property for plot details, availability, pricing, and property assistance.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
