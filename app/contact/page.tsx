"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6">
            Contacteaza-ne
          </h1>
          <p className="font-inter font-bold text-xl text-zinc-600 dark:text-zinc-400">
            Răspundem rapid. Oferim factură și garanție pentru orice lucrare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Informații Stânga */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-orbitron font-black text-xl mb-6 dark:text-white">Date de Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter font-black text-sm text-zinc-500">Telefon</p>
                    <a href="tel:0723563640" className="text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600">
                      0723 563 640
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-inter font-black text-sm text-zinc-500">Email</p>
                    <a href="mailto:contact@voltariss.ro" className="text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600">
                      contact@voltariss.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-600">
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
          </div>

          {/* Formular Dreapta */}
          <div className="bg-zinc-900 p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="font-orbitron text-2xl font-bold mb-2">Trimite un mesaj</h3>
            <p className="text-zinc-400 mb-6">Te sunăm noi înapoi pentru detalii.</p>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}