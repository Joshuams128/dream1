// app/bathrooms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BathroomsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/assets/basement-3.jpg"
          alt="Finished basement renovation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Basement Renovations
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* SECTION 1: TEXT + LARGE IMAGE */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Transform Your Basement Into a Functional Living Space
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Build With Dream specializes in turning underused basements into
              comfortable, functional spaces that add value to your home.
              Whether you’re creating a family room, home office, or
              entertainment area, we manage the entire process—from design to
              finishing—so the experience stays smooth and stress-free.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-slate-700 md:text-base">
              <li>Family rooms &amp; entertainment spaces</li>
              <li>Home offices &amp; gyms</li>
              <li>Custom storage &amp; built-ins</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
  <Link href="/portfolio?category=Basements">
    <button className="rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
      View More Photos
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
      Contact Us
    </button>
  </Link>
</div>

          </div>

          {/* LARGE IMAGE */}
          <div className="relative h-[360px] w-full md:h-[420px]">
            <Image
              src="/assets/basement-1.jpg"
              alt="Finished basement living area"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        {/* SECTION 2: SUPPORTING COPY */}
        <section className="max-w-3xl">
          <h3 className="text-2xl font-semibold text-black">
            Designed for Comfort, Built for Everyday Living
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            We design basements that feel like a natural extension of your home.
            From layout planning to finishes and lighting, every detail is
            carefully considered to maximize comfort, usability, and long-term
            value.
          </p>
        </section>
      </div>
    </main>
  );
}
