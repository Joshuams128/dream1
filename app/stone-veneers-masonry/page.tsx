// app/stone-veneers-masonry/page.tsx
import Image from "next/image";

export default function StoneVeneersMasonryPage() {
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
            Stone Veneers &amp; Masonry
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-brandDark">
              Modern Stone With Lasting Character
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              We use natural and manufactured stone to add texture and depth to
              your home. From exterior facades to feature walls, we design and
              install stonework that enhances curb appeal and value.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Exterior stone veneers and accents</li>
              <li>Entry columns and porch details</li>
              <li>Interior feature walls and fireplaces</li>
            </ul>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded shadow-md">
            <Image
              src="/stone-main.jpg"
              alt="Stone veneer planter"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
