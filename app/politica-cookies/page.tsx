"use client";

import React from "react";
import { ShieldCheck, Cookie, Lock, Info } from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
    return (
        <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen font-inter text-zinc-800 dark:text-zinc-300">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* HEADER */}
                <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="font-orbitron font-black text-3xl md:text-5xl text-zinc-900 dark:text-white mb-4">
                        Politica de Utilizare Cookie-uri
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                    </p>
                </div>

                {/* 1. CE SUNT COOKIE-URILE */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Cookie className="w-6 h-6 text-blue-600" />
                        <h2 className="font-orbitron font-bold text-2xl text-zinc-900 dark:text-white">
                            1. Ce sunt cookie-urile?
                        </h2>
                    </div>
                    <p className="mb-4 leading-relaxed">
                        Un "Internet Cookie" (termen cunoscut și ca "browser cookie" sau "HTTP cookie") este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se accesează Internetul.
                    </p>
                    <p className="leading-relaxed">
                        Cookie-urile sunt instalate prin solicitarea emisă de către un web-server unui browser (ex: Chrome, Safari, Edge) și sunt complet "pasive" (nu conțin programe software, viruși sau spyware și nu pot accesa informațiile de pe hard driver-ul utilizatorului).
                    </p>
                </section>

                {/* 2. LA CE LE FOLOSIM */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                        <h2 className="font-orbitron font-bold text-2xl text-zinc-900 dark:text-white">
                            2. De ce folosim cookie-uri?
                        </h2>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                        <li>Pentru a analiza traficul pe site și comportamentul vizitatorilor (prin Google Analytics).</li>
                        <li>Pentru a adapta conținutul site-ului la dispozitivul dumneavoastră (mobil/desktop).</li>
                        <li>Pentru a menține securitatea și viteza de încărcare a site-ului.</li>
                        <li>Pentru a ține minte preferința dumneavoastră legată de acceptarea cookie-urilor.</li>
                    </ul>
                </section>

                {/* 3. TABELUL CU DATE (CRITIC) */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Info className="w-6 h-6 text-blue-600" />
                        <h2 className="font-orbitron font-bold text-2xl text-zinc-900 dark:text-white">
                            3. Ce cookie-uri folosim?
                        </h2>
                    </div>

                    <div className="overflow-x-auto bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white font-orbitron uppercase text-xs">
                                <tr>
                                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-800">Nume Cookie</th>
                                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-800">Furnizor</th>
                                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-800">Scop / Descriere</th>
                                    <th className="p-4 border-b border-zinc-200 dark:border-zinc-800">Expirare</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-inter font-medium">
                                {/* Cookie Tehnic */}
                                <tr>
                                    <td className="p-4 font-bold text-blue-600">cookie_consent</td>
                                    <td className="p-4">Voltariss (Local)</td>
                                    <td className="p-4">
                                        Stochează preferința utilizatorului de a accepta politica de cookie-uri, pentru a nu afișa bannerul la fiecare vizită.
                                        <span className="block mt-1 text-xs text-zinc-400 uppercase tracking-wider font-bold border border-zinc-200 dark:border-zinc-700 inline-block px-2 py-0.5 rounded">Necesare</span>
                                    </td>
                                    <td className="p-4">1 An</td>
                                </tr>

                                {/* Google Analytics - _ga */}
                                <tr>
                                    <td className="p-4 font-bold text-blue-600">_ga</td>
                                    <td className="p-4">Google Analytics</td>
                                    <td className="p-4">
                                        Folosit pentru a distinge utilizatorii unici prin alocarea unui număr generat aleatoriu ca identificator de client.
                                        <span className="block mt-1 text-xs text-zinc-400 uppercase tracking-wider font-bold border border-zinc-200 dark:border-zinc-700 inline-block px-2 py-0.5 rounded">Statistici</span>
                                    </td>
                                    <td className="p-4">2 Ani</td>
                                </tr>

                                {/* Google Analytics - _ga_CONTAINER */}
                                <tr>
                                    <td className="p-4 font-bold text-blue-600">_ga_6OJVya6...</td>
                                    <td className="p-4">Google Analytics</td>
                                    <td className="p-4">
                                        Folosit pentru a menține starea sesiunii curente și pentru a diferenția sesiunile de utilizator.
                                        <span className="block mt-1 text-xs text-zinc-400 uppercase tracking-wider font-bold border border-zinc-200 dark:border-zinc-700 inline-block px-2 py-0.5 rounded">Statistici</span>
                                    </td>
                                    <td className="p-4">2 Ani</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-zinc-500 italic">
                        *Notă: Nu folosim cookie-uri de marketing direct sau remarketing (Facebook Pixel, TikTok Ads) în acest moment. Datele colectate sunt anonimizate.
                    </p>
                </section>

                {/* 4. CONTROLUL COOKIE-URILOR */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Lock className="w-6 h-6 text-blue-600" />
                        <h2 className="font-orbitron font-bold text-2xl text-zinc-900 dark:text-white">
                            4. Cum puteți controla cookie-urile?
                        </h2>
                    </div>
                    <p className="mb-4 leading-relaxed">
                        Aveți dreptul de a decide dacă doriți să acceptați sau să respingeți cookie-urile. Puteți seta sau modifica controalele browserului dvs. web pentru a accepta sau a refuza cookie-urile.
                    </p>
                    <p className="leading-relaxed mb-4">
                        Dacă alegeți să respingeți cookie-urile, puteți utiliza în continuare site-ul nostru web, deși accesul dvs. la anumite funcționalități și zone ale site-ului web poate fi restricționat (de exemplu, bannerul de consimțământ poate apărea din nou).
                    </p>
                    <p className="leading-relaxed text-zinc-500">
                        Pentru mai multe informații despre setările browserului, vă rugăm să vizitați meniul "Ajutor" al browserului dumneavoastră (Chrome, Safari, Firefox, Edge).
                    </p>
                </section>

                {/* FOOTER LINK */}
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center">
                    <Link href="/" className="font-bold text-blue-600 hover:underline">
                        Înapoi la Pagina Principală
                    </Link>
                </div>

            </div>
        </main>
    );
}