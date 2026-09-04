import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kenkencs.github.io/kenchen-cv',
  ),
  title: 'Ken Chen — Computer Science CV',
  description:
    'Bilingual CV of Ken Chen, a Computer Science student at City University of Hong Kong focused on AI applications, product delivery, and software engineering.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}>{children}</body></html>;
}
