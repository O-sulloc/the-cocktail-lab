import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/layout/Navbar';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cocktail Lab | Mixologist & Pop-Up Bar Hire London",
  description: "The mixologists at The Cocktail Lab ensure that your party is just that, taking the stress and worry out and leaving you to enjoy your night.",
  openGraph: {
    title: "The Cocktail Lab | Mixologist & Pop-Up Bar Hire London",
    description: "The mixologists at The Cocktail Lab ensure that your party is just that, taking the stress and worry out and leaving you to enjoy your night.",
    url: "https://www.thecocktaillab.co.uk",
    siteName: "The Cocktail Lab",
    images: [
      {
        url: "/The-Cocktail-Lab-Logo.svg",
        width: 500,
        height: 500,
        alt: "The Cocktail Lab Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cocktail Lab | Mixologist & Pop-Up Bar Hire London",
    description: "The mixologists at The Cocktail Lab ensure that your party is just that, taking the stress and worry out and leaving you to enjoy your night.",
    images: ["/The-Cocktail-Lab-Logo.svg"], 
  },
  alternates: {
    canonical: "https://www.thecocktaillab.co.uk",
  },
  keywords: "cocktail bar hire, mobile bar hire, mixologists London, event bar services, wedding bar hire",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  // TODO: Add favicon to icon:
  icons: {
    icon: '#',
    apple: [
      { url: '#' },
    ],
  }
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
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}