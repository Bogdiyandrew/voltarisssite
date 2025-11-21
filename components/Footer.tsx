import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900 relative overflow-hidden">
            {/* Background Elements for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

                    {/* 1. BRANDING & DESCRIPTION (4 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.svg"
                                    alt="Voltariss Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-orbitron font-black text-3xl tracking-tight text-white">
                                Voltariss
                            </span>
                        </div>

                        <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-inter">
                            Soluții electrice profesionale. Siguranță, calitate și inovație pentru casa și afacerea ta.
                            Partenerul tău de încredere în inginerie electrică.
                        </p>

                        {/* Social Media Placeholders (Optional) */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. NAVIGARE (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="font-orbitron font-bold text-xl mb-8 text-white tracking-wide">Navigare</h4>
                        <ul className="space-y-4 font-inter font-medium">
                            {[
                                { name: "Acasă", href: "/" },
                                { name: "Servicii", href: "/servicii" },
                                { name: "Portofoliu", href: "/portofoliu" },
                                { name: "Contact", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. CONTACT (4 cols) */}
                    <div className="lg:col-span-4">
                        <h4 className="font-orbitron font-bold text-xl mb-8 text-white tracking-wide">Contact</h4>
                        <ul className="space-y-6 font-inter">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Telefon</p>
                                    <a href="tel:0723563640" className="text-zinc-300 hover:text-white text-lg font-bold transition-colors">
                                        0723 563 640
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Email</p>
                                    <a href="mailto:contact@voltariss.ro" className="text-zinc-300 hover:text-white text-lg font-bold transition-colors">
                                        contact@voltariss.ro
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-700 group-hover:text-white transition-all duration-300 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Locație</p>
                                    <p className="text-zinc-300">Pitești, Argeș & Împrejurimi</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* --- SECTIUNEA ANPC, SAL & SOL --- */}
                <div className="border-t border-zinc-900 pt-10 pb-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* ANPC LOGOS */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            <a
                                href="http://www.anpc.ro/categorie/557/sal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 duration-300"
                            >
                                <img
                                    src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg"
                                    alt="Logo SAL"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <a
                                href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&lng=RO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 duration-300"
                            >
                                <img
                                    src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg"
                                    alt="Logo SOL"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>

                        {/* COPYRIGHT */}
                        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-500 font-inter">
                            <p>© {new Date().getFullYear()} Voltariss. Toate drepturile rezervate.</p>
                            <div className="flex gap-6">
                                <Link href="#" className="hover:text-zinc-300 transition-colors">Termeni și condiții</Link>
                                <Link href="#" className="hover:text-zinc-300 transition-colors">Politica de confidențialitate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}