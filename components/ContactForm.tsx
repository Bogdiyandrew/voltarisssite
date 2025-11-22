"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-green-500/10 border border-green-500/20 rounded-2xl"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Mesaj Trimis!</h3>
        <p className="text-zinc-400">Te vom contacta în cel mai scurt timp.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-zinc-500 underline hover:text-zinc-300 cursor-pointer">
          Trimite alt mesaj
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-inter font-bold flex flex-col gap-4 relative">
      <div className="relative">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Numele tău"
          required
          className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      <div className="relative">
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Număr de telefon (Obligatoriu)"
          required
          pattern="[0-9\+\-\s]+"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      <div className="relative">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email (Opțional)"
          className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-zinc-100 placeholder:text-zinc-500"
        />
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          placeholder="Descrie scurt problema..."
          rows={4}
          required
          className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-zinc-100 placeholder:text-zinc-500 resize-none"
        ></textarea>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4" /> Eroare. Verifică conexiunea sau sună-ne direct.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-inter font-black group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 text-white py-4 rounded-lg transition-all active:scale-[0.98] cursor-pointer"
      >
        {status === "loading" ? "Se trimite..." : (
          <>
            Trimite Cererea <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}