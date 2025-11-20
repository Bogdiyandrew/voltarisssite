import type { Metadata } from "next";
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
  title: "Voltariss | Instalații & Reparații Sigure",
  description: "Servicii electrice profesionale în Piteşti. Execuție sigură pentru reparații, montaj tablouri și instalații noi. Electrician cu experiență. Contactează-ne!",
  icons: {
    icon: "/logo.svg",
  },

  verification: {
    google: '6OJVya6y49keeCUSwUR4-U8tg3RoGCErDCOsqXq04DI',
  },
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
        {children}
      </body>
    </html>
  );
}