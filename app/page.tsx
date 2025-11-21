"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Cpu,
  Phone
} from "lucide-react";
import Link from "next/link";

// --- COMPONENTE UI INTERNE ---

const FadeIn = ({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode,
  delay?: number,
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- 1. HERO SECTION MODIFICAT (Animatie text pe rand) ---
function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Configurare Spotlight (Mouse tracking)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(600px at ${springX}px ${springY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* STRAT 1: Grid Static */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>

      {/* STRAT 2: Spotlight Grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-size-[40px_40px] opacity-20"
        style={style}
      />

      {/* STRAT 3: Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow delay-1000 pointer-events-none" />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="z-10 container px-6 mx-auto text-center relative"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
              Disponibili pentru lucrări în Argeș
            </span>
          </div>
        </motion.div>

        {/* TITLU PRINCIPAL - AICI E MODIFICAREA DE TIMING */}
        <div className="mb-8 flex flex-col items-center leading-none">
          {/* Linia 1: Inginerie Electrică */}
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apare imediat
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
            >
              Inginerie Electrică
            </motion.h1>
          </div>

          {/* Linia 2: De Precizie - AM PUS DELAY MARE (0.6s) */}
          <div className="overflow-hidden pt-2 pb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} // Apare dupa ce se termina prima
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-blue-400 bg-[length:200%_auto] animate-gradient"
            >
              De Precizie.
            </motion.h1>
          </div>
        </div>

        {/* SUBTITLU - Delay și mai mare (1.2s) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Producție de tablouri electrice industriale & instalații civile sigure.
          Standarde germane, execuție românească.
        </motion.p>

        {/* BUTOANE - Apar ultimele (1.4s) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 hover:shadow-blue-500/20 transition-shadow cursor-pointer"
            >
              Cere o Ofertă <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/servicii" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-white font-medium rounded-xl transition-colors cursor-pointer"
            >
              Vezi Serviciile
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* SCROLL MOUSE ICON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

// --- 2. RESTUL PAGINII ---

function ServicesTeaser() {
  return (
    <section className="py-32 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 dark:text-white leading-tight">
              Două divizii.<br />
              <span className="text-zinc-400">O singură calitate.</span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Fie că ai nevoie de un tablou de automatizare complex livrat oriunde în țară,
              sau de o echipă de electricieni autorizați pentru șantierul tău din Pitești,
              Voltariss livrează excelență.
            </p>

            <div className="space-y-4 mb-10">
              {['Execuție conform normativelor I7', 'Componente premium (Schneider, Eaton, ABB)', 'Garanție extinsă pentru manoperă'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/servicii" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all group">
              Vezi toate detaliile <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn delay={0.2} className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Cpu className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-blue-600 transition-colors relative z-10">Panel Builder</h3>
              <p className="text-zinc-500 leading-relaxed relative z-10">
                Producție de tablouri electrice în atelier propriu. Automatizări industriale, distribuție forță și comandă.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-orange-600 transition-colors relative z-10">Instalații Argeș</h3>
              <p className="text-zinc-500 leading-relaxed relative z-10">
                Execuție instalații electrice civile și industriale în Pitești și împrejurimi. Branșamente, reparații și mentenanță.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

function PortfolioTeaser() {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 ">
      <div className="container px-6 mx-auto text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">
            Lucrări care vorbesc de la sine
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
            Nu vorbim mult. Lăsăm calitatea execuției să te convingă.
            Aruncă o privire în interiorul tablourilor noastre și vezi standardul Voltariss.
          </p>

          <Link href="/portofoliu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl text-zinc-900 dark:text-white cursor-pointer"
            >
              Vezi Galeria Foto <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Voltariss</span>
            </div>
            <p className="text-zinc-400 max-w-md mb-8 text-lg">
              Soluții electrice profesionale. Siguranță, calitate și inovație pentru casa și afacerea ta.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navigare</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Acasă</Link></li>
              <li><Link href="/servicii" className="hover:text-white transition-colors">Servicii</Link></li>
              <li><Link href="/portofoliu" className="hover:text-white transition-colors">Portofoliu</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <a href="tel:0700000000" className="hover:text-white transition-colors">0700 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 flex items-center justify-center text-blue-500">@</span>
                <a href="mailto:contact@voltariss.ro" className="hover:text-white transition-colors">contact@voltariss.ro</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Voltariss. Toate drepturile rezervate.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400">Termeni și condiții</Link>
            <Link href="#" className="hover:text-zinc-400">Politica de confidențialitate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 bg-zinc-50 dark:bg-zinc-950">
      <Hero />
      <ServicesTeaser />
      <PortfolioTeaser />
      <Footer />
    </main>
  );
}