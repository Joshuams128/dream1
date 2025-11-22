import Image from "next/image";

const categories = [
  "All",
  "Bathroom",
  "Kitchen",
  "Living Spaces",
  "Laundry",
  "Bedrooms",
  "Stairs",
  "Dining",
  "Backsplash",
  "Bathroom",
  "Foundation Repair",
  "Leak Repair",
  "Outdoor Renovations",
  "Stone Work",
  "Windows & Doors",
];

const projects = [
  {
    title: "Spa Ensuite Retreat",
    category: "Bathroom",
    description:
      "Stone tile surrounds a freestanding tub and glass shower for a calming ensuite escape.",
    image: "/portfolio/portfolio-bath-shower.svg",
  },
  {
    title: "Double Vanity Bathroom",
    category: "Bathroom",
    description:
      "Bright double vanity with generous storage, quartz counters, and warm brushed hardware.",
    image: "/portfolio/portfolio-vanity.svg",
  },
  {
    title: "Open Concept Kitchen",
    category: "Kitchen",
    description:
      "Entertaining-friendly kitchen with a waterfall island, seating, and connected living area.",
    image: "/portfolio/portfolio-kitchen-island.svg",
  },
  {
    title: "Wine Bar Millwork",
    category: "Kitchen",
    description:
      "Custom built-in with glass displays, X-shelf wine storage, and a dedicated beverage fridge.",
    image: "/portfolio/portfolio-wine-bar.svg",
  },
  {
    title: "Range & Hood Feature",
    category: "Kitchen",
    description:
      "Marble-inspired backsplash and tailored hood surround highlight a professional gas range.",
    image: "/portfolio/portfolio-range.svg",
  },
  {
    title: "Fireplace Feature Wall",
    category: "Living Spaces",
    description:
      "Modern fireplace surround with media integration and cozy seating anchored in warm wood floors.",
    image: "/portfolio/portfolio-fireplace.svg",
  },
  {
    title: "Dining Room Refresh",
    category: "Dining",
    description:
      "Neutral dining space layered with greenery, sculptural art, and comfortable seating for six.",
    image: "/portfolio/portfolio-dining.svg",
  },
  {
    title: "Laundry Room Upgrade",
    category: "Laundry",
    description:
      "Durable cabinetry, deep sink, and stone counters transform a hardworking laundry into a tidy workspace.",
    image: "/portfolio/portfolio-laundry.svg",
  },
  {
    title: "Bedroom Retreat",
    category: "Bedrooms",
    description:
      "Soft palettes, arched windows, and layered textiles create a restful primary bedroom oasis.",
    image: "/portfolio/portfolio-bedroom.svg",
  },
  {
    title: "Staircase Detailing",
    category: "Stairs",
    description:
      "Updated staircase with painted risers, oak treads, and iron spindles for a crisp transitional look.",
    image: "/portfolio/portfolio-staircase.svg",
    title: "Exterior Restoration",
    category: "All",
    description:
      "Full-height masonry restoration with updated trim work for a refined curb appeal.",
    image: "/house1.jpg",
  },
  {
    title: "Backsplash Upgrade",
    category: "Backsplash",
    description:
      "Sleek tile backsplash installed to brighten kitchens and protect cooking spaces.",
    image: "/bathroom.jpg",
  },
  {
    title: "Framing & Foundation",
    category: "Foundation Repair",
    description:
      "Structural framing repair that reinforces openings and seals the building envelope.",
    image: "/service1.jpg",
  },
  {
    title: "Leak Detection",
    category: "Leak Repair",
    description:
      "Targeted leak investigation and remediation to safeguard interiors from water damage.",
    image: "/washroom.png",
  },
  {
    title: "Stone Entryway",
    category: "Stone Work",
    description:
      "Custom stone veneer around entryways to deliver durability and timeless character.",
    image: "/stone.jpg",
  },
  {
    title: "New Windows",
    category: "Windows & Doors",
    description:
      "Energy-efficient window replacement that enhances natural light and insulation.",
    image: "/window.svg",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/outdoor.jpg"
          alt="Outdoor renovation banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex h-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Portfolio</h1>
        </div>
      </section>

      {/* FILTERS AND GRID */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-lg text-slate-700">
          Explore some of our recent renovations, restorations, and home upgrades.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                category === "All"
                  ? "border-[#0574C9] bg-[#0574C9] text-white"
                  : "border-blue-200 bg-white text-[#0f4f83] hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                  <p className="text-xs uppercase tracking-wide">{project.category}</p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-5 text-sm text-slate-700 leading-relaxed">
                {project.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
