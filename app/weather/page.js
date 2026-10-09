'use client';
import cekCuaca from "@/components/ui/OpenWeather";

export default function WeatherPage() {
  return (
    <div 
      id="widget-cuaca" 
      className="font-mono w-full max-w-md mx-auto my-6 p-5 sm:p-6 rounded-xl border border-white/20 bg-zinc-900/90 text-white shadow-2xl backdrop-blur-md transition-all"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <h3 className="text-sm font-bold tracking-wider uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>CEK_CUACA</span>
        </h3>
        <span className="text-[10px] text-zinc-400 border border-white/20 px-2 py-0.5 rounded">
          SYSTEM_METEO
        </span>
      </div>

      {/* Input & Button Container (Responsive Layout) */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-4">
        <input 
          type="text" 
          id="kotaInput" 
          placeholder="Masukkan nama kota..." 
          className="w-full sm:flex-1 p-2.5 border border-white/20 rounded-md text-xs bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-all font-mono"
        />
        <button 
          onClick={cekCuaca} 
          className="w-full sm:w-auto px-5 py-2.5 bg-white text-black hover:bg-zinc-200 active:scale-95 border-none rounded-md cursor-pointer font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
        >
          Cek
        </button>
      </div>

      {/* Area Hasil Cuaca */}
      <div 
        id="hasilCuaca" 
        className="text-xs text-zinc-300 min-h-[40px] p-3 rounded-lg border border-white/10 bg-zinc-950/50 flex items-center justify-center text-center font-mono"
      >
        Masukkan nama kota lalu klik "Cek".
      </div>

      {/* Footer Info */}
      <p className="text-[10px] text-zinc-500 mt-4 text-right tracking-tight font-mono">
        DATA: OPENWEATHERMAP.ORG
      </p>
    </div>
  );
}