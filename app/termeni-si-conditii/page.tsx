"use client";

import React from "react";

export default function TermeniSiConditiiPage() {
    return (
        <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-orbitron font-black text-3xl md:text-5xl text-zinc-900 dark:text-white mb-8">
                    Termeni și Condiții
                </h1>

                <div className="space-y-8 text-zinc-700 dark:text-zinc-300 font-inter leading-relaxed">
                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">1. Introducere</h2>
                        <p>
                            Prezenții Termeni și Condiții definesc condițiile de utilizare a site-ului Voltariss.ro.
                            Accesând și navigând pe acest site, acceptați termenii de utilizare descriși în continuare.
                            În cazul în care nu sunteți de acord cu acești termeni și condiții, vă rugăm să părăsiți acest site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">2. Drepturi de proprietate intelectuală</h2>
                        <p>
                            Conținutul acestui site (texte, imagini, logo-uri, elemente grafice) este protejat de legea drepturilor de autor
                            și este proprietatea Voltariss sau a partenerilor săi. Este interzisă copierea, reproducerea, distribuirea
                            sau utilizarea conținutului fără acordul scris al proprietarului.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">3. Limitarea răspunderii</h2>
                        <p>
                            Voltariss depune toate eforturile pentru a asigura acuratețea informațiilor prezentate pe site.
                            Cu toate acestea, nu ne asumăm răspunderea pentru eventualele erori sau omisiuni.
                            Informațiile sunt furnizate cu titlu informativ și nu constituie o ofertă contractuală fermă până la semnarea unui contract.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">4. Servicii și Oferte</h2>
                        <p>
                            Serviciile prezentate pe site sunt disponibile în limita capacității noastre operaționale.
                            Ne rezervăm dreptul de a modifica prețurile și detaliile serviciilor fără o notificare prealabilă,
                            însă contractele deja semnate vor fi respectate conform clauzelor stabilite.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">5. Modificări ale termenilor</h2>
                        <p>
                            Ne rezervăm dreptul de a actualiza și modifica periodic acești Termeni și Condiții.
                            Vă recomandăm să verificați această pagină periodic pentru a fi la curent cu orice modificări.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">6. Legislație aplicabilă</h2>
                        <p>
                            Acești termeni și condiții sunt guvernați de legislația din România.
                            Orice litigiu apărut în legătură cu utilizarea acestui site va fi soluționat pe cale amiabilă sau,
                            în caz contrar, de instanțele judecătorești competente.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <p className="text-sm text-zinc-500">
                            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
