"use client";
import { FaGithub, FaTwitter, FaInstagram, FaTerminal, } from "react-icons/fa";

export default function ComingSoon() {

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-mono flex flex-col justify-between overflow-hidden">
      
      {/* Background Grid Pattern & Blur Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header / Top Navigation */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaTerminal className="text-white text-lg" />
          <span className="font-bold tracking-widest text-sm uppercase">PROJECT_X</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-zinc-900/60 backdrop-blur-md text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>IN DEVELOPMENT</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Tagline / Subtitle Badge */}
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 border-b border-white/10 pb-1">
          System Initialization
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
          WE ARE LAUNCHING SOON
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed font-sans">
          Kami sedang menyiapkan sesuatu yang luar biasa. Dapatkan pemberitahuan pertama saat sistem kami siap diluncurkan.
        </p>


      </main>


    </div>
  );
}