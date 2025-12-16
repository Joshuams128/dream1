// app/bathrooms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BathroomsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/niro-hero.webp"
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

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* SECTION 1: TEXT + LARGE IMAGE */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Take the Stress Out of Your Office Renovation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              The team at Build With Dream designs and builds professional office
              spaces across Durham Region. Whether you&apos;re refreshing a
              single room or reconfiguring your entire workplace, we manage every
              stage—from planning and design to construction and finishing
              touches—so your team can stay focused on work, not the renovation.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-slate-700 md:text-base">
              <li>Reception &amp; lobby areas</li>
              <li>Private offices &amp; workstations</li>
              <li>Boardrooms &amp; meeting spaces</li>
            </ul>

            <Link href="/portfolio">
              <button className="mt-6 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                View Our Office Projects
              </button>
            </Link>
          </div>

          {/* LARGE IMAGE */}
          <div className="relative h-[360px] w-full md:h-[420px]">
            <Image
              src="/niro-hero.webp"
              alt="Renovated office workspace"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        {/* SECTION 2: SUPPORTING COPY */}
        <section className="max-w-3xl">
          <h3 className="text-2xl font-semibold text-black">
            Spaces That Work As Hard As Your Team
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            From front-of-house to back-of-office, we create environments that
            support productivity, client meetings, and day-to-day operations.
            Our team coordinates trades, timelines, and finishes to keep your
            renovation on schedule and aligned with your brand.
          </p>
        </section>
      </div>
    </main>
  );
}
