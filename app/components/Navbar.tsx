"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="flex flex-row h-auto w-full items-center text-white absolute top-0 z-50 p-6">
      <div>
        <Link href="/"className="font-extrabold text-slate-200 text-2xl relative left-0">
          Justin Miller
        </Link>
      </div>
      <div className="flex flex-row gap-4 ml-auto">
        <Link
          href="/"
          className={`text-md text-slate-200 hover:text-teal-300 font-bold uppercase ${
            pathname === "/" ? "active-link" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-md text-slate-200 hover:text-teal-300 font-bold uppercase ${
            pathname === "/about" ? "active-link" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`text-md text-slate-200 hover:text-teal-300 font-bold uppercase ${
            pathname === "/projects" ? "active-link" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/resume"
          className={`text-md text-slate-200 hover:text-teal-900 font-bold uppercase ${
            pathname === "/resume" ? "active-link" : ""
          }`}
        >
          Resume
        </Link>
        <Link
          href="/contact"
          className={`text-md text-slate-200 hover:text-teal-300 font-bold uppercase ${
            pathname === "/contact" ? "active-link" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;