import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Head from "next/head";
//import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regal Mark",
  description: "Style Me Apparel Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
      <nav className="nav">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Regal Mark Logo" className="logo-image" />
      </div>
    </nav>
        {children}

      <footer className="footer">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Regal Mark Logo" className="logo-image" />
      </div>
    </footer>
      </body>
    </html>
  );
}
