// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white flex flex-col">

      {/* HERO SECTION */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/hero.jpg" // <-- Replace with your real hero image
          alt="Construction Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-0 top-0 flex h-full w-full items-center">
          <div className="ml-12 bg-black/60 p-10 max-w-lg text-white">
            <h1 className="text-4xl font-bold">Dream Contractors Services</h1>
            <p className="mt-4 text-lg">
              Our mission is to create the dream home for our
               client’s vision and make it a reality.
            </p>

            <button className="mt-6 bg-[#0574C9] px-6 py-3 font-medium text-white hover:bg-[#0462A6]">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* 20 YEARS SECTION */}
<section className="max-w-6xl mx-auto py-20 px-4">
  <div className="flex flex-col md:flex-row items-start gap-10">
    
    {/* LEFT SIDE — TEXT */}
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold text-gray-900">
        Durham Home Improvements, Repairs & Renovations
      </h2>

      <p className="mt-2 font-semibold text-[#0574C9]">
        Industry Leaders for the Past 15 Years
      </p>

      <p className="mt-6 text-gray-700 leading-relaxed">
       Expert residential and commercial renovations across the GTA, 
       built with precision, reliability,
        and your vision at the center.
      </p>

      <ul className="mt-4 space-y-2 text-gray-700">
        <li>• Design & Construction of New Bathrooms</li>
        <li>• Relocation of Doors & Windows</li>
        <li>• Masonry & Stone Work</li>
        <li>• Water Leak Repairs</li>
      </ul>

      <button className="mt-6 bg-[#0574C9] px-6 py-3 text-white hover:bg-[#0462A6]">
        Get a Quote
      </button>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <div className="md:w-1/2 relative h-full">
      <div className="relative h-full min-h-[300px] w-full">
        <Image
          src="/house1.jpg"
          alt="Renovation example"
          fill
          className="rounded-lg object-cover shadow-lg"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>

  </div>
</section>


      {/* SERVICES SECTION (3 CARDS) */}
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
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Bathroom Renovations</h3>
              <p className="mt-2 text-gray-700">
                Bathroom renovations are one of the most difficult projects to tackle.
              </p>
            </div>

            <div className="bg-white shadow p-5">
              <div className="relative h-48 w-full">
                <Image
                  src="/stone.jpg"
                  alt="Stone Veneers"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Stone Veneers & Masonry</h3>
              <p className="mt-2 text-gray-700">
                Transform your home with natural or manufactured stone.
              </p>
            </div>

            <div className="bg-white shadow p-5">
              <div className="relative h-48 w-full">
                <Image
                  src="/outdoor.jpg"
                  alt="Outdoor Improvements"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Outdoor Improvements</h3>
              <p className="mt-2 text-gray-700">
                Create stunning outdoor spaces for summer entertaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DREAM HOME CALLOUT */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-16">
        <Image
          src="/bathroom-main.jpg"
          alt="Luxury bathroom with soaking tub"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row md:items-center md:px-10">
          <div className="md:w-2/3 text-white space-y-4">
            <p className="text-sm uppercase tracking-wide text-blue-200">Bathroom &amp; Home Renovations</p>
            <h3 className="text-4xl font-bold leading-tight">Create Your Dream Home</h3>
            <p className="text-lg leading-relaxed text-blue-100">
              Whether you&apos;re planning a complete renovation or a focused upgrade, we guide you from
              design through installation. Our team specializes in updates that elevate comfort,
              function, and style throughout your home.
            </p>

            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <span className="text-xl text-[#8ec5ff]">•</span>
                Shower &amp; Bath
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-[#8ec5ff]">•</span>
                Tile &amp; Backsplash
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl text-[#8ec5ff]">•</span>
                Vanities &amp; Mirrors
              </li>
            </ul>

            <button className="mt-4 w-fit rounded bg-[#0574C9] px-6 py-3 font-semibold text-white shadow hover:bg-[#0462A6]">
              Learn More
            </button>
          </div>

          <div className="md:w-1/3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-blue-50">
                &ldquo;It&apos;s obvious that the team takes pride in their work and would rather do the job
                properly than rush or cut corners. Excellent workmanship—we highly recommend them and
                wouldn&apos;t hesitate to work together again.&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-200">
                Stephanie — Toronto, ON
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
