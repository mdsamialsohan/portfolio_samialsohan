'use client';
// @flow strict
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "ABOUT",      href: "/#about"      },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "SKILLS",     href: "/#skills"     },
  { label: "PROJECTS",   href: "/#projects"   },
  { label: "EDUCATION",  href: "/#education"  },
  { label: "BLOGS",      href: "/#blogs"      },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-end py-5">

        {/* Desktop menu */}
        <ul className="hidden md:flex md:flex-row md:gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-500"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white hover:text-pink-500 transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full right-0 w-48 bg-[#0d1224] border border-[#1b2c68a0] rounded-xl shadow-xl overflow-hidden">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-white hover:text-pink-500 hover:bg-[#1a1443] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;