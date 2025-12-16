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


        {/* SECTION 1 – Bathroom Renovations */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/bathroom.jpg"
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
              Washroom Transformations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Step into a space designed for comfort, style, and everyday ease.
               From sleek modern updates to complete washroom overhauls, we create rooms that elevate your daily routine. Thoughtful lighting, smart storage, and quality finishes come together to make your
               washroom feel beautifully tailored to you.
            </p>

            <Link href="/bathrooms">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/* SECTION 1 – Kitchen Renovations */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/kitchen1.jpeg"
                alt="Luxury kitchen renovation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Kitchen Transformations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
             Step into a kitchen designed for comfort, style, and everyday living.
From sleek modern upgrades to complete kitchen transformations, we create spaces that elevate how you cook, gather,
 and connect. Thoughtful layouts, smart storage, and quality finishes come 
together to make your kitchen feel beautifully tailored to you.
            </p>

            <Link href="/kitchen-renovation">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/* SECTION 3 – Basement */}
<section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
  {/* Circle image */}
  <div className="flex justify-center md:justify-start md:w-1/2">
    <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
      <Image
        src="/basement2.jpeg"
        alt="Basement renovation transformation"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
      />
    </div>
  </div>

  {/* Text */}
  <div className="md:w-1/2 md:pl-8">
    <h2 className="text-2xl font-semibold text-[#0574C9]">
      Basement Renovations
    </h2>
    <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
      We transform underused basements into comfortable, functional living
      spaces—whether it’s a family room, home office, or entertainment area.
      Thoughtful layouts and quality finishes ensure your basement feels like a
      natural extension of your home.
    </p>

    <Link href="/basement-renovations">
      <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
        Learn More
      </button>
    </Link>
  </div>
</section>


        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/* SECTION 3 – HOME TRANS */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/hometrans.jpg"
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
              Home Transformation 
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
             From modern upgrades to complete home makeovers, we design and build spaces that feel fresh,
             functional, and uniquely yours. Every detail—from layout to
             finishes—is crafted to elevate how you live every day.
            </p>

            <Link href="/home-transformation">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        {/*SECTION 3 –OFfice */}
        <section className="flex flex-col items-center gap-10 md:flex-row md:items-center">
          {/* Circle image */}
          <div className="flex justify-center md:justify-start md:w-1/2">
            <div className="relative aspect-square w-72 max-w-full overflow-hidden rounded-full shadow-md">
              <Image
                src="/niro-law.webp"
                alt="Office renovation with statement wall"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 80vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-[#0574C9]">
              Office Renovations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Create a workspace that reflects your brand and supports productivity. From reception areas to boardrooms, we deliver modern, functional
             environments that enhance client impressions and keep operations running smoothly.
            </p>

            <Link href="/office-renovations">
              <button className="mt-8 rounded bg-[#0574C9] px-6 py-2 text-sm font-semibold text-white hover:bg-[#0462A6]">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* Divider line */}
        <div className="h-px w-full bg-blue-100" />

        

      </div>
    </main>
  );
}
