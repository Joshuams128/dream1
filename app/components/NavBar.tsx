"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/kitchen-renovation", label: "Kitchen Renovations" },
  { href: "/basement-renovations", label: "Basement Renovations" },
  { href: "/home-transformation", label: "Home Transformations" },
  { href: "/office-renovations", label: "Office Renovations" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#0574C9]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">

        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/dreamlogo.png"
              alt="Dream logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="sr-only">Build With Dream</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={() => setServicesOpen(false)}
          >
            <Link href="/services" className="flex items-center gap-1 hover:underline underline-offset-4">
              Services
              <span aria-hidden="true">▾</span>
            </Link>
            <div
              className={`absolute left-0 top-full mt-2 w-56 rounded-md bg-white py-2 text-gray-900 shadow-lg transition-opacity ${servicesOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <Link
                href="/services"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                All Services
              </Link>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/portfolio" className="hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="/contact-us" className="hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            const next = !open;
            setOpen(next);
            if (!next) {
              setServicesOpen(false);
            }
          }}
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
          <div className="space-y-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between"
            >
              <span>Services</span>
              <span aria-hidden="true">{servicesOpen ? "▴" : "▾"}</span>
            </button>
            {servicesOpen && (
              <div className="space-y-2 pl-4">
                <Link
                  href="/services"
                  onClick={() => {
                    setOpen(false);
                    setServicesOpen(false);
                  }}
                  className="block"
                >
                  All Services
                </Link>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className="block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
