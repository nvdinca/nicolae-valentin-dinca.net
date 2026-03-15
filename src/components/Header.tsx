"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <><header className="sticky top-0 z-50 border-b border-champagne/30 bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="min-h-[44px] min-w-[44px] flex items-center font-serif text-lg tracking-wide text-obsidian transition hover:text-forest sm:text-xl"
          onClick={closeMenu}
        >
          Nicolae-Valentin Dincă
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex md:gap-8" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="min-h-[44px] flex items-center font-sans text-sm uppercase tracking-widest text-obsidian/90 transition hover:text-forest"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-5 bg-obsidian transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-obsidian transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-obsidian transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "visible" : "invisible"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute left-0 right-0 top-full border-b border-champagne/30 bg-ivory backdrop-blur transition-[visibility,opacity] duration-200 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        >
          <nav className="flex flex-col px-4 py-4 sm:px-6" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="min-h-[48px] flex items-center border-b border-champagne/20 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-champagne/20 hover:text-forest last:border-0"
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-champagne/20">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div></header></>
  );
}
