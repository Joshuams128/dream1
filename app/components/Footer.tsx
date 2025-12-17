import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0574C9] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/dreamcontractors_inc/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/90 hover:text-white transition"
          >
            <Instagram size={24} />
          </a>

          <a
            href="https://www.facebook.com/p/Dream-contractors-100057319486721/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/90 hover:text-white transition"
          >
            <Facebook size={24} />
          </a>
        </div>

        <p className="text-sm md:text-base text-white/90">
          © {new Date().getFullYear()} Build With Dream. All rights reserved.
        </p>

        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
