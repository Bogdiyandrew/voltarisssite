"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen overflow-hidden">

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* STATIC GRADIENT FOR MOBILE (Performance Optimization) */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10" />

        {/* ANIMATED BLOBS (Desktop Only) */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen will-change-transform"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 dark:bg-orange-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen will-change-transform"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-orbitron font-bold text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6"
          >
            Contacteaza-ne
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter font-bold text-xl text-zinc-600 dark:text-zinc-400"
          >
            Răspundem rapid. Oferim factură și garanție pentru orice lucrare.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Informații Stânga */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Removed backdrop-blur on mobile for performance */}
            <div className="bg-white dark:bg-zinc-900 md:bg-white/80 md:dark:bg-zinc-900/80 md:backdrop-blur-xl p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <h3 className="font-orbitron font-black text-xl mb-6 dark:text-white">Date de Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter font-black text-sm text-zinc-500">Telefon</p>
                    <a href="tel:0723563640" className="text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 transition-colors">
                      0723 563 640
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter font-black text-sm text-zinc-500">Email</p>
                    <a href="mailto:contact@voltariss.ro" className="text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 transition-colors">
                      contact@voltariss.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter font-black text-sm text-zinc-500">Program</p>
                    <p className="text-zinc-900 dark:text-white">Luni - Vineri: 08:00 - 18:00</p>
                    <p className="text-zinc-500 text-sm">Sâmbătă: Urgențe doar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formular Dreapta */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            // Removed backdrop-blur on mobile
            className="bg-zinc-900 md:bg-zinc-900/90 md:backdrop-blur-xl p-8 rounded-2xl text-white shadow-2xl border border-zinc-800"
          >
            <h3 className="font-orbitron text-2xl font-bold mb-2">Trimite un mesaj</h3>
            <p className="text-zinc-400 mb-6">Te sunăm noi înapoi pentru detalii.</p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </main>
  );
}