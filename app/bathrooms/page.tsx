// app/bathrooms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BathroomsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/assets/bathroom-2.jpg"
          alt="Bathroom sinks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Bathrooms
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Top row: text + image */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Let&apos;s Take the Stress Out of Your Bathroom Renovations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              The experts at Build With Dream can help you with complete
              bathroom renovations in your Durham home. Renovating your
              bathroom is one of the most difficult home improvement tasks you
              can tackle by yourself. We take the hassle out of this process by
              working with you from design through construction and
              installation.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Tiles &amp; Backsplash</li>
              <li>Showers &amp; Baths</li>
              <li>Vanities &amp; Mirrors</li>
            </ul>
          </div>

        </section>

        {/* Gallery + callout */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/bathroom-1.jpg"
                alt="Bathroom project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/assets/bathroom-3.jpg"
                alt="Bathroom project 2"
                fill
                className="object-cover"
              />
            </div>
                <div className="relative h-64 w-full">
              <Image
                src="/assets/bathroom-5.jpg"
                alt="Bathroom project 2"
                fill
                className="object-cover"
              />
            </div>

             <div className="mt-6 flex flex-wrap gap-3">
  <Link href="/portfolio?category=Bathroom">
    <button className="rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
      View Our Portfolio
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
      Contact Us
    </button>
  </Link>
</div>

          </div>

          
           
        </section>
      </div>
    </main>
  );
}
