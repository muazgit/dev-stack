import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Desktop Navbar */}
        <div className="hidden h-20 items-center justify-between md:flex">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-pink-500 to-violet-600 text-xs font-extrabold tracking-tight text-white">
              DS
            </div>

            <span className="text-xl font-bold tracking-tight">
              <span className="text-slate-900">Dev </span>
              <span
                className="font-extrabold bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--brand-gradient)' }}
              >
                Stack
              </span>
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-pink-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-slate-700 hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-pink-600"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-pink-600"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-pink-600"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-pink-600">
              Sign In
            </button>

            <button
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundImage: 'var(--brand-gradient)' }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex h-16 items-center justify-between md:hidden">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Mobile Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-pink-500 to-violet-600 text-xs font-extrabold text-white">
              DS
            </div>

            <span className="text-lg font-bold">
              <span className="text-slate-900">Dev </span>
              <span
                className="font-extrabold bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--brand-gradient)' }}
              >
                Stack
              </span>
            </span>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-slate-700">
              Sign In
            </button>

            <button
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundImage: 'var(--brand-gradient)' }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-slate-700">
                Home
              </a>
              <a
                href="#technologies"
                className="text-sm font-medium text-slate-700"
              >
                Technologies
              </a>
              <a href="#" className="text-sm font-medium text-slate-700">
                Projects
              </a>
              <a href="#" className="text-sm font-medium text-slate-700">
                About
              </a>
              <a href="#" className="text-sm font-medium text-slate-700">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
