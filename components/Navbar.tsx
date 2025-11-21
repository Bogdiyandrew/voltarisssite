"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll-ul când meniul mobil este deschis
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? "pt-4" : "pt-6"
          }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 transition-all duration-500 ${isScrolled
              ? "w-[90%] md:w-[80%] lg:w-[1000px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-full shadow-lg border border-white/20 dark:border-zinc-800/50 py-3"
              : "w-full container bg-transparent py-2"
            }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 z-50 group shrink-0">
            <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-500">
              <Image
                src="/logo.svg"
                alt="Voltariss Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-orbitron font-black text-xl tracking-tight text-zinc-900 dark:text-white hidden sm:block">
              Voltariss
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-1 bg-zinc-100/50 dark:bg-zinc-800/50 p-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md relative">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredPath === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className={`relative px-5 py-2 rounded-full text-sm font-bold font-inter transition-colors duration-300 z-10 ${isActive ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                  >
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-white dark:bg-zinc-950 rounded-full shadow-sm border border-zinc-200/50 dark:border-zinc-700"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    {/* Hover Background (if not active) */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-700/50 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{ zIndex: -2 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:0723563640"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-black font-inter overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              {/* Shimmer Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

              <Phone className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Sună Acum</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2.5 text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/90 dark:bg-zinc-950/90 md:hidden"
          >
            <div className="flex flex-col h-full pt-32 px-6 pb-10">
              <div className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center justify-between p-5 rounded-2xl text-xl font-bold font-inter border transition-all duration-300 ${pathname === link.href
                          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600"
                          : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white hover:scale-[1.02]"
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        {pathname === link.href && <Zap className="w-5 h-5 fill-current" />}
                        {link.name}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${pathname === link.href ? "text-blue-600" : "text-zinc-400"
                          }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <a
                  href="tel:0723563640"
                  className="flex w-full items-center justify-center gap-3 px-8 py-6 bg-blue-600 text-white rounded-2xl text-xl font-black font-inter shadow-xl shadow-blue-600/30 active:scale-95 transition-transform"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
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