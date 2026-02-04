"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-orange-600">
          FoodHub
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="/menu" className="hover:text-orange-600">Menu</Link>
          <Link href="/abouts" className="hover:text-orange-600">About</Link>
          <Link href="/contact-us" className="hover:text-orange-600">Contact</Link>

          <Link
            href="/menu"
            className="ml-4 px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
          >
            Order Now
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/menu">Menu</Link>
            <Link onClick={() => setOpen(false)} href="/abouts">About</Link>
            <Link onClick={() => setOpen(false)} href="/contact-us">Contact</Link>

            <Link
              onClick={() => setOpen(false)}
              href="/menu"
              className="mt-2 text-center px-5 py-3 rounded-lg bg-orange-600 text-white"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
