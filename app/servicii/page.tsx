"use client";

import React from "react";
import { Cpu, Zap, ShieldCheck, Factory, Home, Server } from "lucide-react";

export default function ServiciiPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Header Pagina */}
        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6">
            Solutii Electrice Complete
          </h1>
          <p className="font-inter font-black text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            De la producția de tablouri electrice automatizate până la instalații civile sigure.
            Acoperim tot spectrul electrotehnic.
          </p>
        </div>

        {/* SERVICIU 1: PANEL BUILDING (Tablouri) */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
              <Factory className="w-8 h-8" />
            </div>
            <h2 className="font-orbitron font-black text-3xl text-zinc-900 dark:text-white">Productie Tablouri Electrice (Panel Builder)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-inter font-bold text-xl mb-3 dark:text-white">Tablouri Automatizare (BMS)</h3>
              <p className="font-inter font-bold text-zinc-600 dark:text-zinc-400">
                Proiectare și execuție tablouri pentru controlul pompelor, motoarelor și liniilor de producție. Integrare cu senzori și PLC-uri.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-inter font-bold text-xl mb-3 dark:text-white">Distribuție Generală</h3>
              <p className="font-inter font-bold text-zinc-600 dark:text-zinc-400">
                Tablouri generale de distribuție (TGD) de până la 630A, echipate cu aparataj Schneider/Eaton/Legrand.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-inter font-bold text-xl mb-3 dark:text-white">Tablouri</h3>
              <p className="font-inter font-bold text-zinc-600 dark:text-zinc-400">
                exemplu
              </p>
            </div>
          </div>
        </div>

        {/* SERVICIU 2: INSTALATII LOCALE */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl text-orange-600 dark:text-orange-400">
              <Home className="w-8 h-8" />
            </div>
            <h2 className="font-orbitron font-black text-3xl text-zinc-900 dark:text-white">Instalații Electrice (Arges)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              {[
                "Instalații electrice complete pentru case și vile",
                "Montaj și înlocuire tablouri electrice vechi",
                "Circuite dedicate (AC, Cuptor, Stații Încărcare Auto)",
                "Instalații de împământare și paratrăsnet",
                "Sisteme de iluminat LED arhitectural"
              ].map((item, i) => (
                <li key={i} className="font-inter font-bold flex items-center gap-3 text-zinc-700 dark:text-zinc-300 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center min-h-[300px] border border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-400 text-sm uppercase tracking-widest">[FOTO: Instalatie casa la rosu]</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}