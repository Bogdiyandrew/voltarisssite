import Image from "next/image";

// O iconiță SVG simplă inline pentru zona de mentenanță
function MaintenanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export default function Home() {
  return (
    // Container principal cu fundal care se adaptează la dark mode
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-zinc-950">
      
      {/* Efect de fundal - Gradient subtil încețoșat */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[500px] w-[500px] animate-pulse-slow rounded-full bg-blue-500/20 blur-[100px] dark:bg-indigo-500/10"></div>
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px] dark:bg-fuchsia-500/10"></div>
      </div>

      <main className="z-10 flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Numele brandului / Domeniul */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            voltariss.ro
          </h2>
        </div>

        {/* Iconița principală */}
        <div className="mb-8 flex h-24 w-24 animate-fade-in items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 dark:shadow-2xl dark:shadow-indigo-500/10">
          <MaintenanceIcon className="h-10 w-10 text-zinc-900 dark:text-white" />
        </div>

        {/* Titlul principal */}
        <h1 className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          Suntem în <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Mentenanță.</span>
        </h1>

        {/* Text descriptiv */}
        <p className="mb-10 max-w-lg animate-fade-in-up text-lg text-zinc-600 dark:text-zinc-300 sm:text-xl">
          Lucrăm intens la construirea noii experiențe. Revenim în curând cu ceva special.
        </p>

        {/* (Opțional) Un mic badge sau indicator de status */}
        <div className="inline-flex animate-fade-in-up items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          <span className="mr-2 flex h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"></span>
          Status: Se lucrează
        </div>
      </main>

      {/* Footer minimalist */}
      <footer className="absolute bottom-6 w-full text-center text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} Voltariss. Toate drepturile rezervate.
      </footer>
    </div>
  );
}