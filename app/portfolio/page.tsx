"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  "All",
  "Washroom",
  "Kitchen",
  "Home Transformations",
  "Basements"
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
  { title: "Washroom  1", category: "Washroom", image: "/assets/bathroom-1.jpg", },
  { title: "Washroom  2", category: "Washroom", image: "/assets/bathroom-2.jpg",  },
  { title: "Washroom  3", category: "Washroom", image: "/assets/bathroom-3.jpg",  },
  { title: "Washroom  4", category: "Washroom", image: "/assets/bathroom-4.jpg", },
  { title: "Washroom  5", category: "Washroom", image: "/assets/bathroom-5.jpg", },
  { title: "Washroom  6", category: "Washroom", image: "/assets/bathroom-6.jpg", },

  // Kitchen (6)
  { title: "Kitchen  1", category: "Kitchen", image: "/assets/kitchen-1.jpg",  },
  { title: "Kitchen  2", category: "Kitchen", image: "/assets/kitchen-2.jpg", },
  { title: "Kitchen  3", category: "Kitchen", image: "/assets/kitchen-3.jpg",  },
  { title: "Kitchen  4", category: "Kitchen", image: "/assets/kitchen-4.jpg", },
  { title: "Kitchen  5", category: "Kitchen", image: "/assets/kitchen-5.jpg", },
  { title: "Kitchen  6", category: "Kitchen", image: "/assets/kitchen-6.jpg", },
  
  // Home Transformations (6)
  { title: "Home Transformation 1", category: "Home Transformations", image: "/assets/living-1.jpg",  },
  { title: "Home Transformation 2", category: "Home Transformations", image: "/assets/living-2.jpg", },
  { title: "Home Transformation 3", category: "Home Transformations", image: "/assets/living-3.jpg", },
  { title: "Home Transformation 4", category: "Home Transformations", image: "/assets/living-4.jpg", },
  { title: "Home Transformation 5", category: "Home Transformations", image: "/assets/living-5.jpg", },
  { title: "Home Transformation 6", category: "Home Transformations", image: "/assets/living-6.jpg", },
  // Basements (6)
  { title: "Basement 1", category: "Basements", image: "/assets/basement-1.jpg", },
  { title: "Basement 2", category: "Basements", image: "/assets/basement-2.jpg", },
  { title: "Basement 3", category: "Basements", image: "/assets/basement-3.jpg", },
  { title: "Basement 4", category: "Basements", image: "/assets/basement-4.jpg", },
  { title: "Basement 5", category: "Basements", image: "/assets/basement-5.jpg", },
  { title: "Basement 6", category: "Basements", image: "/assets/basement-6.jpg", },

  
];

function isValidCategory(value: string | null): value is Category {
  return !!value && (categories as readonly string[]).includes(value);
}

function PortfolioContent() {
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
          src="/assets/living-1.jpg"
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

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
