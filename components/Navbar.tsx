"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Portofoliu", href: "/portofoliu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || pathname !== "/"
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-4 shadow-sm"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.svg"
                alt="Voltariss Logo"
                fill
                className="object-contain" // Asigură că logo-ul se vede complet fără să fie deformat
                priority
              />
            </div>

            <span
              className={`font-orbitron font-black text-xl tracking-tight transition-colors ${isScrolled || pathname !== "/"
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-900 dark:text-white"
                }`}
            >
              Voltariss
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-1 bg-zinc-100/50 dark:bg-zinc-900/50 p-1 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-zinc-800 shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <a
              href="tel:0720000000"
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Sună Acum</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 rounded-lg"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 flex flex-col pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl text-xl font-bold border transition-all ${pathname === link.href
                      ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600"
                      : "border-zinc-100 dark:border-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900"
                      }`}
                  >
                    {link.name}
                    <ChevronRight
                      className={`w-5 h-5 ${pathname === link.href ? "text-blue-600" : "text-zinc-400"
                        }`}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <a
                  href="tel:0700000000"
                  className="flex w-full items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/30"
                >
                  <Phone className="w-5 h-5" />
                  Sună Echipa
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}