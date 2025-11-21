import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import { orbitron, inter } from "@/app/ui/fonts";

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
    <html lang="ro" className="scroll-smooth">
      <body
        // AM PASTRAT DOAR UNA, CEA COMPLETA (CU ORBITRON)
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer /> {/* L-am mutat AICI, ca să facă parte din scroll-ul lin */}
        </SmoothScrolling>
      </body>
    </html>
  );
}