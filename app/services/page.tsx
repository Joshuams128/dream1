// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/servicesbanner.jpg" // put a bathroom header img here
          alt="Bathroom sinks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Services
          </h1>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">

        {/* SECTION 1 – Bathroom Renovations */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/service1.jpg"
                alt="Bathroom renovation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Bathroom Renovations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Let us take the stress out of your construction project. With
              20+ years of experience in bathroom renovations and remodelling,
              we can make your bathroom your favourite part of your home.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Quality Craftsmanship</span>
              <span>▸ Innovative Design</span>
              <span>▸ 20+ Years Experience</span>
            </div>

            <Link href="/bathrooms">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/* SECTION 2 – Stone Veneers & Masonry */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/services-stone.jpg"
                alt="Stone veneers and masonry"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Stone Veneers &amp; Masonry Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Transform your home with natural or manufactured stone siding,
              giving it an updated and modernized look. Stone veneers add
              durability and timeless character to your home’s exterior.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Custom Design</span>
              <span>▸ High Durability</span>
              <span>▸ Variety of Styles</span>
            </div>

            {/* Testimonial-style box */}
            <div className="mt-6 rounded bg-slate-50 px-4 py-3 text-xs italic text-slate-700 md:text-sm">
              &quot;Steve was helpful, prompt and courteous. He brought over
              samples of stone to choose from. He explained everything he was
              doing, called to give updates and did a very good job. The stone
              work looks great.&quot; – Thomas, Toronto ON
            </div>

            <Link href="/stone-veneers-masonry">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/* SECTION 3 – Home Improvements */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/services-home.jpg"
                alt="Home improvements exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Home Improvements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              From small renovations to massive remodels, we can turn your
              vision into reality. We work with you to create a design that
              fits your lifestyle and transforms your house into the home of
              your dreams.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Basement Remodels</span>
              <span>▸ Kitchen Renovations</span>
              <span>▸ Deck &amp; Patio Additions</span>
            </div>

            <div className="mt-6 rounded bg-slate-50 px-4 py-3 text-xs italic text-slate-700 md:text-sm">
              &quot;It&apos;s obvious that Steve takes pride in his work and
              would rather do the job properly than to rush or cut corners –
              something that is a rare find these days. Excellent workmanship.
              We highly recommend this company and wouldn&apos;t hesitate to
              work with them again.&quot; – Stephanie, Toronto ON
            </div>

            <Link href="/home-improvements">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
