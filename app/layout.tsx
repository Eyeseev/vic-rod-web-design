import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = { 
  title: 'VicrodTech - Custom-Coded Websites Built to Convert',
  description: 'Fast, responsive websites tailored for service pros, creatives, and growing businesses — built from scratch with zero builder fluff.',
  keywords: ['web design', 'custom websites', 'responsive design', 'web development', 'VicrodTech'],
  authors: [{ name: 'VicrodTech' }],
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
