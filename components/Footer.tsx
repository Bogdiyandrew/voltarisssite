import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image"; // <--- IMPORT NECESAR

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
            <div className="container px-6 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    <div className="col-span-1 lg:col-span-2">
                        {/* LOGO SECTION */}
                        <div className="flex items-center gap-3 mb-6">
                            {/* AICI ESTE LOGO-UL INLOCUIT */}
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.svg"
                                    alt="Voltariss Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-orbitron font-black text-2xl tracking-tight">Voltariss</span>
                        </div>

                        <p className="text-zinc-400 max-w-md mb-8 text-lg">
                            Soluții electrice profesionale. Siguranță, calitate și inovație pentru casa și afacerea ta.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigare</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Acasă</Link></li>
                            <li><Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link></li>
                            <li><Link href="/portofoliu" className="hover:text-white transition-colors">Portofoliu</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <a href="tel:0700000000" className="hover:text-white transition-colors">0700 000 000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 flex items-center justify-center text-blue-500">@</span>
                                <a href="mailto:contact@voltariss.ro" className="hover:text-white transition-colors">contact@voltariss.ro</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
                    <p>© {new Date().getFullYear()} Voltariss. Toate drepturile rezervate.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-zinc-400">Termeni și condiții</Link>
                        <Link href="#" className="hover:text-zinc-400">Politica de confidențialitate</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}