"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  "All",
  "Bathroom",
  "Kitchen",
  "Living Spaces",
  "Laundry",
  "Bedrooms",
  "Stairs",
  "Dining",
] as const;

type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  description?: string;
  image: string;
};

// ✅ 6 image slots per category (edit these paths + titles)
const projects: Project[] = [
  // Bathroom (6)
  { title: "Bathroom Project 1", category: "Bathroom", image: "/assets/basement2.jpeg", description: "Add description..." },
  { title: "Bathroom Project 2", category: "Bathroom", image: "/assets/bathroom-1.jpg", description: "Add description..." },
  { title: "Bathroom Project 3", category: "Bathroom", image: "/assets/bathroom-3.jpg", description: "Add description..." },
  { title: "Bathroom Project 4", category: "Bathroom", image: "/assets/bathroom-4.jpg", description: "Add description..." },
  { title: "Bathroom Project 5", category: "Bathroom", image: "/assets/bathroom-5.jpg", description: "Add description..." },
  { title: "Bathroom Project 6", category: "Bathroom", image: "/assets/bathroom-6.jpg", description: "Add description..." },

  // Kitchen (6)
  { title: "Kitchen Project 1", category: "Kitchen", image: "/assets/kitchen-1.jpg", description: "Add description..." },
  { title: "Kitchen Project 2", category: "Kitchen", image: "/assets/kitchen-2.jpg", description: "Add description..." },
  { title: "Kitchen Project 3", category: "Kitchen", image: "/assets/kitchen-3.jpg", description: "Add description..." },
  { title: "Kitchen Project 4", category: "Kitchen", image: "/assets/kitchen-4.jpg", description: "Add description..." },
  { title: "Kitchen Project 5", category: "Kitchen", image: "/assets/kitchen-5.jpg", description: "Add description..." },
  { title: "Kitchen Project 6", category: "Kitchen", image: "/assets/kitchen-6.jpg", description: "Add description..." },

  // Living Spaces (6)
  { title: "Living Space 1", category: "Living Spaces", image: "/assets/living-1.jpg", description: "Add description..." },
  { title: "Living Space 2", category: "Living Spaces", image: "/assets/living-2.jpg", description: "Add description..." },
  { title: "Living Space 3", category: "Living Spaces", image: "/assets/living-3.jpg", description: "Add description..." },
  { title: "Living Space 4", category: "Living Spaces", image: "/assets/living-4.jpg", description: "Add description..." },
  { title: "Living Space 5", category: "Living Spaces", image: "/assets/living-5.jpg", description: "Add description..." },
  { title: "Living Space 6", category: "Living Spaces", image: "/assets/living-6.jpg", description: "Add description..." },

  // Laundry (6)
  { title: "Laundry 1", category: "Laundry", image: "/assets/laundry-1.jpg", description: "Add description..." },
  { title: "Laundry 2", category: "Laundry", image: "/assets/laundry-2.jpg", description: "Add description..." },
  { title: "Laundry 3", category: "Laundry", image: "/assets/laundry-3.jpg", description: "Add description..." },
  { title: "Laundry 4", category: "Laundry", image: "/assets/laundry-4.jpg", description: "Add description..." },
  { title: "Laundry 5", category: "Laundry", image: "/assets/laundry-5.jpg", description: "Add description..." },
  { title: "Laundry 6", category: "Laundry", image: "/assets/laundry-6.jpg", description: "Add description..." },

  // Bedrooms (6)
  { title: "Bedroom 1", category: "Bedrooms", image: "/assets/bedroom-1.jpg", description: "Add description..." },
  { title: "Bedroom 2", category: "Bedrooms", image: "/assets/bedroom-2.jpg", description: "Add description..." },
  { title: "Bedroom 3", category: "Bedrooms", image: "/assets/bedroom-3.jpg", description: "Add description..." },
  { title: "Bedroom 4", category: "Bedrooms", image: "/assets/bedroom-4.jpg", description: "Add description..." },
  { title: "Bedroom 5", category: "Bedrooms", image: "/assets/bedroom-5.jpg", description: "Add description..." },
  { title: "Bedroom 6", category: "Bedrooms", image: "/assets/bedroom-6.jpg", description: "Add description..." },

  // Stairs (6)
  { title: "Stairs 1", category: "Stairs", image: "/assets/stairs-1.jpg", description: "Add description..." },
  { title: "Stairs 2", category: "Stairs", image: "/assets/stairs-2.jpg", description: "Add description..." },
  { title: "Stairs 3", category: "Stairs", image: "/assets/stairs-3.jpg", description: "Add description..." },
  { title: "Stairs 4", category: "Stairs", image: "/assets/stairs-4.jpg", description: "Add description..." },
  { title: "Stairs 5", category: "Stairs", image: "/assets/stairs-5.jpg", description: "Add description..." },
  { title: "Stairs 6", category: "Stairs", image: "/assets/stairs-6.jpg", description: "Add description..." },

  // Dining (6)
  { title: "Dining 1", category: "Dining", image: "/assets/dining-1.jpg", description: "Add description..." },
  { title: "Dining 2", category: "Dining", image: "/assets/dining-2.jpg", description: "Add description..." },
  { title: "Dining 3", category: "Dining", image: "/assets/dining-3.jpg", description: "Add description..." },
  { title: "Dining 4", category: "Dining", image: "/assets/dining-4.jpg", description: "Add description..." },
  { title: "Dining 5", category: "Dining", image: "/assets/dining-5.jpg", description: "Add description..." },
  { title: "Dining 6", category: "Dining", image: "/assets/dining-6.jpg", description: "Add description..." },
];

function isValidCategory(value: string | null): value is Category {
  return !!value && (categories as readonly string[]).includes(value);
}

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get("category");
  const initialCategory: Category = isValidCategory(urlCategory) ? urlCategory : "All";

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  // Keep state in sync if someone lands via a direct link (or changes URL)
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);

    // ✅ Update URL so you can link to categories
    if (category === "All") {
      router.push("/portfolio");
    } else {
      router.push(`/portfolio?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[260px] w-full">
        <Image
          src="/outdoor.jpg"
          alt="Portfolio banner"
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
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[#0574C9] bg-[#0574C9] text-white"
                    : "border-blue-200 bg-white text-[#0f4f83] hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={`${project.category}-${project.title}`}
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

              {project.description && (
                <div className="p-5 text-sm text-slate-700 leading-relaxed">
                  {project.description}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
