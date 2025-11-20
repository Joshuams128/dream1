// app/home-improvements/page.tsx
import Image from "next/image";

export default function HomeImprovementsPage() {
  return (
    <main className="bg-white">
      <section className="relative h-[260px] w-full">
        <Image
          src="/services-hero.jpg"
          alt="Bathroom sinks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Home Improvements
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-brandDark">
              From Vision to Reality
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Whether you&apos;re updating a single room or refreshing your
              entire main floor, we help you plan and execute improvements that
              make your home more functional and beautiful.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Basement remodels and finishing</li>
              <li>Kitchen makeovers</li>
              <li>Decks, patios, and outdoor living</li>
            </ul>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded shadow-md">
            <Image
              src="/home-main.jpg"
              alt="Front porch renovation"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
