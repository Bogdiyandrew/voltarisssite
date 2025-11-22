"use client";

import React from "react";

export default function PoliticaDeConfidentialitatePage() {
    return (
        <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="font-orbitron font-black text-3xl md:text-5xl text-zinc-900 dark:text-white mb-8">
                    Politica de Confidențialitate
                </h1>

                <div className="space-y-8 text-zinc-700 dark:text-zinc-300 font-inter leading-relaxed">
                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">1. Angajamentul nostru</h2>
                        <p>
                            La Voltariss, respectăm confidențialitatea datelor dumneavoastră și ne angajăm să protejăm informațiile personale
                            pe care ni le furnizați. Această politică explică modul în care colectăm, utilizăm și protejăm datele dumneavoastră.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">2. Datele colectate</h2>
                        <p className="mb-2">Colectăm informații pe care ni le furnizați direct, cum ar fi:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Nume și prenume</li>
                            <li>Adresă de email</li>
                            <li>Număr de telefon</li>
                            <li>Informații despre proiectul dumneavoastră (prin formularul de contact)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">3. Scopul colectării</h2>
                        <p className="mb-2">Utilizăm datele colectate pentru:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>A răspunde solicitărilor și întrebărilor dumneavoastră.</li>
                            <li>A vă oferi oferte personalizate pentru serviciile noastre.</li>
                            <li>A îmbunătăți experiența de utilizare a site-ului.</li>
                            <li>A respecta obligațiile legale și fiscale (în cazul încheierii unui contract).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">4. Divulgarea datelor</h2>
                        <p>
                            Nu vindem, nu închiriem și nu divulgăm informațiile dumneavoastră personale către terți în scopuri de marketing.
                            Putem partaja datele cu furnizori de servicii de încredere (ex: servicii de email, contabilitate) doar în măsura necesară
                            pentru desfășurarea activității noastre și sub obligația confidențialității.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">5. Securitatea datelor</h2>
                        <p>
                            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat,
                            pierderii sau distrugerii. Site-ul nostru utilizează criptare SSL pentru a asigura securitatea transmiterii datelor.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-zinc-900 dark:text-white mb-4">6. Drepturile dumneavoastră</h2>
                        <p>
                            Conform legislației privind protecția datelor (GDPR), aveți dreptul de a solicita accesul la datele dumneavoastră,
                            rectificarea, ștergerea acestora sau restricționarea prelucrării. Pentru a exercita aceste drepturi,
                            vă rugăm să ne contactați la adresa de email: contact@voltariss.ro.
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
