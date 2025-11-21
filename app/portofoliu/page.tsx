"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Lock, Zap, Server } from "lucide-react";

// Date fictive pentru placeholder (le poti schimba textele)
const projects = [
  {
    id: 1,
    title: "Tablou Automatizare Hală",
    category: "Industrial",
    desc: "Proiectare și execuție tablou comandă pompe 3x400V cu convertizoare de frecvență.",
    icon: <Server className="w-10 h-10 text-blue-500" />
  },
  {
    id: 2,
    title: "Instalație Vilă P+1",
    category: "Rezidențial",
    desc: "Refacere completă instalație electrică, montaj aparataj modular și tablou general.",
    icon: <Zap className="w-10 h-10 text-orange-500" />
  },
  {
    id: 3,
    title: "Tablou General Distribuție",
    category: "Panel Builder",
    desc: "Tablou 250A pentru clădire de birouri, echipat cu analizor de rețea și descărcătoare.",
    icon: <Lock className="w-10 h-10 text-zinc-500" />
  },
  {
    id: 4,
    title: "Smart Home Argeș",
    category: "Automatizare",
    desc: "Implementare sistem control lumini și climatizare prin relee inteligente.",
    icon: <Camera className="w-10 h-10 text-purple-500" />
  }
];

export default function PortofoliuPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Portofoliu Lucrări
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Calitatea execuției este cartea noastră de vizită. <br/>
            Mai jos sunt câteva dintre proiectele recente.
          </p>
        </div>

        {/* GRID PROIECTE - Varianta Placeholder "Tehnic" */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              {/* Zona de Imagine (Placeholder) */}
              <div className="h-64 w-full bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                {/* Pattern de fundal tehnic */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Iconita Centrala */}
                <div className="scale-100 group-hover:scale-110 transition-transform duration-500 p-6 bg-white dark:bg-zinc-900 rounded-full shadow-2xl border border-zinc-100 dark:border-zinc-800 z-10">
                   {project.icon}
                </div>

                {/* Badge "Coming Soon" discret */}
                <div className="absolute bottom-4 right-4 text-xs font-mono text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">
                  IMG_PENDING
                </div>
              </div>

              {/* Detalii Proiect */}
              <div className="p-8">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mesaj pentru clientii care vor sa vada mai mult */}
        <div className="mt-24 p-8 rounded-2xl bg-zinc-900 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Vrei să vezi o lucrare similară cu a ta?</h3>
          <p className="text-zinc-400 mb-8">
            Avem o arhivă extinsă de fotografii tehnice. Contactează-ne și îți trimitem exemple specifice pe WhatsApp.
          </p>
          <a 
            href="/contact" 
            className="inline-flex px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Contactează-ne
          </a>
        </div>

      </div>
    </main>
  );
}