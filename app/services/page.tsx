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
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16 md:space-y-20">

        {/* OVERVIEW */}
        <section className="space-y-4 text-center md:space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0574C9]">
            Renovations reimagined
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Spaces tailored to how you live and work
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            We specialize in residential and commercial renovations, bringing expertise, precision, and creativity to every project. More than construction, we see renovations as transformations—enhancing the way you live and work.
          </p>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Our commitment to quality and attention to detail ensure flawless execution, delivering spaces that exceed expectations. We tailor each project to your vision, working closely with you from consultation to completion.
          </p>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            With a proven track record in the Greater Toronto Area, we pride ourselves on meeting deadlines, budgets, and building lasting relationships.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-[#0574C9] md:text-base">
            <span className="rounded-full bg-blue-50 px-4 py-2">Home transformations</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Washrooms &amp; spas</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Outdoor living</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Office renovations</span>
            <span className="rounded-full bg-blue-50 px-4 py-2">Custom tiling</span>
          </div>
        </section>

        {/* SECTION 1 – Bathroom Renovations */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/bathroom.jpg"
                src="/portfolio/portfolio-bath-shower.svg"
                alt="Luxury bathroom renovation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Residential Transformations
              Bathroom Renovations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              From modern washrooms to full-home refreshes, we design and build spaces that elevate daily life. Every room is planned with your routines in mind—lighting, storage, and finishes that feel tailored to you.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Spa-inspired washrooms</span>
              <span>▸ Full-home remodels</span>
              <span>▸ Precision tile work</span>
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
                src="/service1.jpg"
                alt="Office renovation with statement wall"
                src="/portfolio/portfolio-fireplace.svg"
                alt="Stone and fireplace millwork"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Commercial &amp; Office Renovations
              Stone Veneers &amp; Masonry Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Renovations that support productivity and client experiences. From reception areas to boardrooms, we deliver polished environments that keep operations moving and match your brand standards.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Phased scheduling</span>
              <span>▸ Budget &amp; deadline alignment</span>
              <span>▸ Tenant-friendly workflows</span>
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
                src="/outdoor.jpg"
                alt="Outdoor living renovation"
                src="/portfolio/portfolio-kitchen-island.svg"
                alt="Open concept kitchen and living"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Exteriors, Masonry &amp; Outdoor Living
              Home Improvements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Curb appeal and gathering spaces built to last—from stone veneers and fireplaces to decks, patios, and covered porches. We also handle specialty tiling for patios, entries, and feature walls.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0574C9]">
              <span>▸ Outdoor kitchens &amp; patios</span>
              <span>▸ Stonework &amp; fireplaces</span>
              <span>▸ Weather-ready materials</span>
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
