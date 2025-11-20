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

            <button className="mt-6 bg-emerald-500 px-6 py-3 font-medium hover:bg-emerald-400">
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

      <p className="mt-2 text-emerald-600 font-semibold">
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

      <button className="mt-6 bg-emerald-500 px-6 py-3 text-white hover:bg-emerald-400">
        Get a Quote
      </button>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <div className="md:w-1/2 relative">
      <img
        src="/house1.jpg"  
        alt="Renovation example"
        className="w-full rounded-lg shadow-lg object-cover"
      />
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

    </main>
  );
}
