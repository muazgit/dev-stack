function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-b from-pink-500 to-violet-600 text-xs font-extrabold text-white">
                DS
              </div>

              <span className="text-lg font-bold text-slate-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-5 text-xs font-semibold text-slate-600">
              <a href="#" className="hover:text-pink-600">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-600">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-slate-500">
              <a href="#" className="block hover:text-pink-600">
                Home
              </a>
              <a href="#" className="block hover:text-pink-600">
                Technologies
              </a>
              <a href="#" className="block hover:text-pink-600">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-slate-500">
              <a href="#" className="block hover:text-pink-600">
                About
              </a>
              <a href="#" className="block hover:text-pink-600">
                Contact
              </a>
              <a href="#" className="block hover:text-pink-600">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-slate-500">
              <a href="#" className="block hover:text-pink-600">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-pink-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
