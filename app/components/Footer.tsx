import Link from "next/link";

export default function Footer() {
  return (
<footer className="bg-[#0574C9] py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm text-white/90">
          © {new Date().getFullYear()} Build With Dream. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
