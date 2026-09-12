import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Desktop Navbar */}
        <div className="hidden h-20 items-center justify-between md:flex">
          {/* Brand Icon */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-bold text-white">
              DS
            </div>

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
              Dev Stack
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex h-16 items-center justify-between md:hidden">
          {/* Hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Mobile Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white">
              DS
            </div>

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-lg font-bold text-transparent">
              Dev Stack
            </span>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-gray-700">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
