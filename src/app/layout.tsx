import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cavopack — Custom Packaging",
  description: "Cavopack website pages and product information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <aside className="floating-contact-links" aria-label="Contact Cavopack">
          <a className="floating-contact-email" href="mailto:sofare@live.com" aria-label="Email sofare@live.com">
            <Image src="/sites/tasty/images/email-contact.png" alt="" width={56} height={43} />
          </a>
          <a className="floating-contact-whatsapp" href="https://wa.me/8613506614950?text=Hello%2C%20Cavopacks%20team.%20I%E2%80%99d%20like%20to%20request%20a%20quote%20for%20custom%20packaging." target="_blank" rel="noopener noreferrer" aria-label="Contact Cavopack on WhatsApp">
            <Image src="/sites/tasty/images/whatsapp.png" alt="" width={50} height={50} />
          </a>
        </aside>
      </body>
    </html>
  );
}
