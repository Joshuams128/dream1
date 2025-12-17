// app/home/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomeTransformationsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="assets/living-1.jpg" // update to your actual home reno hero image
          alt="Modern home interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Home Transformations
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        {/* Top row: text + image */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Let&apos;s Take the Stress Out of Your Home Renovation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Build With Dream specializes in transforming homes across Durham
              Region with modern upgrades, smart layouts, and quality finishes.
              Whether you&apos;re refreshing a single room or completing a
              whole-home renovation, we manage the entire process—from design to
              construction—so your renovation feels smooth, clear, and
              stress-free.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 md:text-base space-y-1">
              <li>Living &amp; Family Rooms</li>
              <li>Kitchens &amp; Dining Spaces</li>
              <li>Full-Home Modernizations</li>
            </ul>
          </div>
        </section>

        {/* Gallery + CTA */}
        <section className="grid gap-10 md:grid-cols-[1.5fr,1.2fr] items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative h-64 w-full">
              <Image
                src="assets/living-3.jpg"
                alt="Home renovation project 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 w-full">
              <Image
                src="assets/living-5.jpg"
                alt="Home renovation project 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 w-full">
              <Image
                src="assets/living-2.jpg"
                alt="Home renovation project 3"
                fill
                className="object-cover"
              />
            </div>

           <div className="mt-6 flex flex-wrap gap-3">
  <Link href="/portfolio?category=Home%20Transformations">
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
