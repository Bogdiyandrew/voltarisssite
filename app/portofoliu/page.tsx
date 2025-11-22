"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Lock, Zap, Server } from "lucide-react";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Tablou Automatizare Hală",
    category: "Industrial",
    desc: "Proiectare și execuție tablou comandă pompe 3x400V cu convertizoare de frecvență.",
    image: "/images/1port.png"
  },
  {
    id: 2,
    title: "Instalație Vilă P+1",
    category: "Rezidențial",
    desc: "Refacere completă instalație electrică, montaj aparataj modular și tablou general.",
    image: "/images/2port.png"
  },
  {
    id: 3,
    title: "Tablou General Distribuție",
    category: "Panel Builder",
    desc: "Tablou 250A pentru clădire de birouri, echipat cu analizor de rețea și descărcătoare.",
    image: "/images/3port.png"
  },
  {
    id: 4,
    title: "Smart Home Argeș",
    category: "Automatizare",
    desc: "Implementare sistem control lumini și climatizare prin relee inteligente.",
    image: "/images/4port.png"
  }
];

export default function PortofoliuPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6">
            Portofoliu Lucrari
          </h1>
          <p className="font-inter font-bold text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Calitatea execuției este cartea noastră de vizită. <br />
            Mai jos sunt câteva dintre proiectele recente.
          </p>
        </div>

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
              <div className="h-64 w-full bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

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