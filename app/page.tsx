// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[420px] w-full md:min-h-[560px] lg:min-h-[640px]">
        <Image
          src="/hero.jpg"
          alt="Construction Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 py-10 text-white">
            <div className="max-w-xl bg-black/55 p-6 backdrop-blur md:p-10">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Dream Build Group
              </h1>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Our mission is to create the dream home for our client’s vision
                and make it a reality.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-block bg-[#0574C9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0462A6] md:text-base"
                >
                  Get a Quote
                </Link>

                <Link
                  href="tel:4167388654"
                  className="inline-block border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 md:text-base"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 YEARS SECTION */}
      <section className="bg-[#f5f7f8] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* LEFT SIDE — TEXT */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900">
                Renovations, built around your vision
              </h2>

              <p className="mt-2 font-semibold text-[#0574C9]">
                Experience you can trust, built over 15 years
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                We specialize in residential and commercial renovations that
                balance precision, reliability, and thoughtful design. More than
                repairs or construction, we approach every project as a
                transformation—enhancing how you live, work, and experience your
                space.
              </p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Design &amp; Construction of New Bathrooms</li>
                <li>• Kitchen renovations &amp; remodels</li>
                <li>• Full-home renovations</li>
                <li>• Interior &amp; exterior upgrades</li>
              </ul>

              <Link
                href="/contact-us"
                className="mt-6 inline-block bg-[#0574C9] px-6 py-3 text-white hover:bg-[#0462A6]"
              >
                Contact Us
              </Link>
            </div>

            {/* RIGHT SIDE — IMAGE (HIDDEN ON MOBILE) */}
            <div className="hidden md:block md:w-1/2">
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-[300px]">
                <Image
                  src="/house1.jpg"
                  alt="Renovation example"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO TRUSTS US */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Who trusts us
            </p>
            <h3 className="mt-2 text-4xl font-bold text-gray-900">
              Who We’ve Worked With
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              We’re proud to support homeowners and organizations across the GTA
              with reliable renovations and consistent craftsmanship.
            </p>
          </div>

          {/* LOGO GRID */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand 1 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-[#f5f7f8] p-5 text-center">
              <div className="relative h-20 w-full">
                <Image
                  src="/eastfm_logo.png"
                  alt="EastFM"
                  fill
                  className="object-contain"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900">EastFM</p>
            </div>

            {/* Brand 2 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-[#f5f7f8] p-5 text-center">
              <div className="relative h-20 w-full">
                <Image
                  src="/niro-law-scale.png"
                  alt="Niro Law"
                  fill
                  className="object-contain"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Niro Law
              </p>
            </div>

            {/* Brand 3 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-[#f5f7f8] p-5 text-center">
              <div className="relative h-20 w-full">
                <Image
                  src="/Vishnu-Mandir-Logo.png"
                  alt="Vishnu Mandir"
                  fill
                  className="object-contain"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Vishnu Mandir
              </p>
            </div>

            {/* Brand 4 */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-[#f5f7f8] p-5 text-center">
              <div className="relative h-20 w-full">
                <Image
                  src="/insurance-logo-small.png"
                  alt="Desjardins Insurance"
                  fill
                  className="object-contain"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900">
                Desjardins Insurance
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact-us"
              className="inline-block rounded bg-[#0574C9] px-6 py-3 font-semibold text-white shadow hover:bg-[#0462A6]"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (MOVED BELOW WHO TRUSTS US) */}
      <section className="bg-[#f5f7f8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            We Offer
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card */}
            <div className="bg-white shadow p-5">
              <div className="relative h-48 w-full">
                <Image
                  src="/bathroom.jpg"
                  alt="Bathroom Renovations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Bathroom Renovations
              </h3>
              <p className="mt-2 text-gray-700">
                Thoughtfully crafted bathroom transformations that combine modern
                design, quality materials, and precise workmanship.
              </p>
            </div>

            <div className="bg-white shadow p-5">
              <div className="relative h-48 w-full">
                <Image
                  src="/stone.jpg"
                  alt="Full-Home Modernizations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Full-Home Modernizations
              </h3>
              <p className="mt-2 text-gray-700">
                Comprehensive interior updates that refresh your home with modern
                finishes and improved functionality.
              </p>
            </div>

            <div className="bg-white shadow p-5">
              <div className="relative h-48 w-full">
                <Image
                  src="/niro-law.png"
                  alt="Office Renovations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Office Renovations
              </h3>
              <p className="mt-2 text-gray-700">
                Modern, functional office spaces designed to support
                productivity and reflect your brand.
              </p>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="mt-6 inline-block bg-[#0574C9] px-6 py-3 text-white hover:bg-[#0462A6]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
