import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Footer } from '@/components/organisms/Footer/Footer';
import { NavbarResponsive } from '@/components/organisms/Navbar/NavbarResponsive';


const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Arcadia Zoo',
  description: 'Bienvenue sur Arcadia Zoo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-[400]">
          <NavbarResponsive />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
