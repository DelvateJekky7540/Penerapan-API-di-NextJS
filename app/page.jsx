'use client';
import TechText from '@/components/Hero';
import BorderGlow from '@/components/ui/BorderGlow';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-90px)] flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center gap-0">
          <div className="relative h-[100px] w-full sm:h-[150px]">
            <TechText
              text="Implementasi"
              fontWeight={700}
              fontSize={150}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily="Space Grotesk"
              color="#ffffff"
              accentColor="#ffffff"
              letterSpacing={-0.05}
              reach={200}
              softness={0.7}
              strokeWidth={1.5}
              speed={1}
              lineStyle="dashed"
              selection
              labels
              draggable
              sweep
            />
          </div>

          <div className="relative h-[100px] w-full sm:h-[150px]">
            <TechText
              text="API"
              fontWeight={700}
              fontSize={250}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              fontFamily="Space Grotesk"
              color="#ffffff"
              accentColor="#ffffff"
              letterSpacing={-0.05}
              reach={200}
              softness={0.7}
              strokeWidth={1.5}
              speed={1}
              lineStyle="dashed"
              selection
              labels
              draggable
              sweep
            />
          </div>
        </div>
      </section>

      {/* Pendahuluan */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-16 lg:px-24 bg-[#181818]">

        {/* Kiri: Logo API */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="transparant"
          borderRadius={28}
          glowRadius={70}
          glowIntensity={1.7}
          coneSpread={25}
          animated
          colors={['#c084fc', '#f472b6', '#38bdf8']}
        >
          <div style={{ padding: '2em' }}>
            <img
              src="/images/api.png"
              alt="Ilustrasi API"
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
         </BorderGlow>
        </div>

        {/* Kanan: Judul dan pengertian */}
        <div className="w-full md:w-1/2">
          <h1 className="font-space-grotesk pb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Apa Itu API?
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            API adalah singkatan dari Application Programming Interface (Antarmuka Pemrograman Aplikasi), yaitu jembatan atau perantara yang membuat dua aplikasi atau sistem yang berbeda bisa saling "berbicara" dan bertukar data.
          </p>
        </div>

      </section>

    </main>
  );
}