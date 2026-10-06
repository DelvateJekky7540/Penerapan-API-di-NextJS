export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-192px)] items-center justify-center bg-slate-950">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Penerapan API
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Belajar memahami bagaimana frontend berkomunikasi
            dengan API dan mengolah data JSON.
          </p>
        </div>
      </section>

      {/* Pendahuluan */}
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">
          Pendahuluan
        </h2>
      </section>

    </main>
  );
}