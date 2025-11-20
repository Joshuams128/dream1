"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0574C9]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/dreamlogo.png"
              alt="Dream logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white uppercase">
            Build With Dream
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/services" className="hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/portfolio" className="hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="/testimonials" className="hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="/contact-us" className="hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-2xl">&times;</span> // X icon
          ) : (
            <span className="text-3xl">&#9776;</span> // hamburger
          )}
        </button>
      </div>

     {/* Mobile Dropdown Menu */}
{open && (
  <nav className="md:hidden bg-[#0462A6] px-6 py-4 space-y-4 text-white text-sm font-medium flex flex-col">
    <Link href="/" onClick={() => setOpen(false)} className="block">
      Home
    </Link>
    <Link href="/services" onClick={() => setOpen(false)} className="block">
      Services
    </Link>
    <Link href="/portfolio" onClick={() => setOpen(false)} className="block">
      Portfolio
    </Link>
    <Link href="/testimonials" onClick={() => setOpen(false)} className="block">
      Testimonials
    </Link>
    <Link href="/contact-us" onClick={() => setOpen(false)} className="block">
      Contact Us
    </Link>
  </nav>
)}

    </header>
  );
}
