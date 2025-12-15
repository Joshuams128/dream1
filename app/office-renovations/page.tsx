// app/bathrooms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BathroomsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/office-hero.jpg"
          alt="Modern office interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Office Renovations
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Top row: text + image */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Take the Stress Out of Your Office Renovation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              The team at Build With Dream designs and builds professional
              office spaces across Durham Region. Whether you&apos;re refreshing
              a single room or reconfiguring your entire workplace, we manage
              every stage—from planning and design to construction and finishing
              touches—so your team can stay focused on work, not the renovation.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Reception &amp; lobby areas</li>
              <li>Private offices &amp; workstations</li>
              <li>Boardrooms &amp; meeting spaces</li>
            </ul>
          </div>

          <div className="relative hidden h-64 w-full md:block">
            <Image
              src="/office-feature.jpg"
              alt="Renovated office workspace"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Gallery + callout */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative h-64 w-full">
              <Image
                src="/office-1.jpg"
                alt="Bright office reception renovation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/office-2.jpg"
                alt="Modern boardroom renovation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/office-3.jpg"
                alt="Open-concept office workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <Link href="/portfolio" className="sm:col-span-3">
              <button className="mt-6 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                View Our Office Projects
              </button>
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">
              Spaces That Work As Hard As Your Team
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              From front-of-house to back-of-office, we create environments that
              support productivity, client meetings, and day-to-day operations.
              Our team coordinates trades, timelines, and finishes to keep your
              renovation on schedule and aligned with your brand.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
