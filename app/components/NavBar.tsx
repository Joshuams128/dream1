"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/bathrooms", label: "Washroom Renovations" },
  { href: "/kitchen-renovation", label: "Kitchen Renovations" },
  { href: "/basement-renovations", label: "Basement Renovations" },
  { href: "/home-transformation", label: "Full-Home Renovations" },
  { href: "/office-renovations", label: "Office Renovations" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#0574C9]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/dreamlogo.png"
              alt="Build With Dream logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="sr-only">Build With Dream</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>

          {/* SERVICES LINK + DROPDOWN */}
          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 hover:underline underline-offset-4"
            >
              Services
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <div className="absolute left-0 top-full z-50 hidden w-56 rounded-md bg-white py-3 shadow-lg group-hover:block">
              <Link href="/bathrooms" className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Washroom Renovations
              </Link>
              <Link href="/kitchen-renovation" className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Kitchen Renovations
              </Link>
              <Link href="/basement-renovations" className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Basement Renovations
              </Link>
              <Link href="/home-transformation" className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Full-Home Renovations
              </Link>
              <Link href="/office-renovations" className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Office Renovations
              </Link>
            </div>
          </div>

          <Link href="/portfolio" className="hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="/contact-us" className="hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
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
          {open ? <span className="text-2xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
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
          <Link href="/contact-us" onClick={() => setOpen(false)} className="block">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
