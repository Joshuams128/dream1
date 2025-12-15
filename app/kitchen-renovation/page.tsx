// app/bathrooms/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BathroomsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/kitchen1.jpeg"
          alt="Bathroom sinks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Kitchen
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Top row: text + image */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Let&apos;s Take the Stress Out of Your Kitchen Renovation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
             The experts at Build With Dream can help you with complete kitchen renovations in your Durham home.
              Renovating a kitchen is one of the most complex home improvement projects to take on yourself. We simplify
               the process by working with you from
              design through construction and installation—every step of the way.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Cabinetry &amp; Storage</li>
              <li>Countertops &amp; Backsplashes</li>
              <li>Lighting &amp; Fixtures</li>
            </ul>
          </div>

        </section>

        {/* Gallery + callout */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative h-64 w-full">
              <Image
                src="/kitchen2.jpeg"
                alt="kitchen project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/kitchen3.jpeg"
                alt="kitchen project "
                fill
                className="object-cover"
              />
            </div>
                <div className="relative h-64 w-full">
              <Image
                src="/kitchen4.jpeg"
                alt="kitchen project 3"
                fill
                className="object-cover"
              />
            </div>

              <button className="mt-6 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                View Our Portfolio
              </button>
          </div>

          
           
        </section>
      </div>
    </main>
  );
}
