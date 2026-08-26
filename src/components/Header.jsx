import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../mock";

const LOGO_URL = "https://customer-assets-cm19k8pv.emergentagent.net/job_cruise-ui-rebuild/artifacts/sygz0ryx_6703ef1648d826625eaf84ea.png";

const Logo = () => (
  <div className="flex items-center select-none">
    <img
      src={LOGO_URL}
      alt="Bollywood Masala Cruise"
      className="h-14 w-auto object-contain"
      loading="eager"
    />
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-[15px] font-medium transition-colors relative py-1 ${
                    isActive ? "text-[#4b3df5]" : "text-[#3a3a52] hover:text-[#4b3df5]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#4b3df5] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-[#f5a623] px-5 py-2.5 text-[15px] font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
            >
              Request Pricing
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#1a1a3a]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`py-3 text-[15px] font-medium border-b border-gray-50 ${
                pathname === link.to ? "text-[#4b3df5]" : "text-[#3a3a52]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 text-center rounded-lg bg-[#f5a623] px-5 py-3 text-[15px] font-semibold text-white"
          >
            Request Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
