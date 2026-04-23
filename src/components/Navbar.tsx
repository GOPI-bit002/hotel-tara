"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#stays", label: "Stays" },
  { href: "#featured", label: "Featured" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#stories", label: "Stories" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
        style={{ mixBlendMode: "difference" }}
      >
        <nav className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10">
          <a
            href="#top"
            className="font-display text-2xl uppercase tracking-widest text-white"
            aria-label="Hotel TARA — home"
          >
            TARA
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[12px] uppercase tracking-super-wide text-white/90 transition-colors duration-500 ease-cinema hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden text-[12px] uppercase tracking-super-wide text-white md:inline"
            >
              {site.phoneDisplay}
            </a>
            <a href="#contact" className="btn-ghost hidden sm:inline-flex">
              Get in Touch
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white text-white lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay — not mix-blend-difference so it's readable */}
      {open && (
        <div className="fixed inset-0 z-40 bg-navy pt-24 lg:hidden">
          <ul className="frame flex flex-col gap-6 pt-10">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-6"
                >
                  <span className="label text-taupe">{`0${i + 1}`}</span>
                  <span className="font-display text-5xl uppercase tracking-tight text-white transition-colors ease-cinema group-hover:text-sage">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="mt-8 border-t border-white/10 pt-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-ghost"
              >
                Get in Touch
              </a>
            </li>
            <li className="mt-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="text-[12px] uppercase tracking-super-wide text-sage"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
