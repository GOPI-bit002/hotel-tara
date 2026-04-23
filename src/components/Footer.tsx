"use client";

import Reveal from "./Reveal";
import { site, waLink } from "@/lib/site";

const quickLinks = [
  { href: "#stays", label: "Stays" },
  { href: "#featured", label: "Featured" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#stories", label: "Stories" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy pt-24 md:pt-36">
      <div className="frame">
        <Reveal>
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2
            className="display mt-6 text-white"
            style={{ fontSize: "clamp(88px, 14vw, 260px)" }}
          >
            Let&apos;s
            <br />
            <span className="text-outline-thick">Create</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:hello@hoteltara.in`}
            className="mt-12 inline-block font-display uppercase tracking-tight text-sage underline decoration-1 underline-offset-8 transition-colors duration-700 ease-cinema hover:text-white md:mt-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 72px)" }}
          >
            hello@hoteltara.in
          </a>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <p className="label">Hotel TARA</p>
            <p className="mt-4 max-w-sm text-[14px] font-light leading-[1.8] text-white/70">
              {site.address}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-4 inline-block font-display text-xl uppercase tracking-widest text-white hover:text-sage"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="label">Index</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[13px] uppercase tracking-super-wide text-white/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-sage">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label">Reach</p>
            <ul className="mt-4 space-y-3 text-[13px] uppercase tracking-super-wide text-white/70">
              <li>
                <a
                  href={waLink(
                    "Hello Hotel TARA, I'd like to enquire about a stay."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage"
                >
                  WhatsApp →
                </a>
              </li>
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage"
                >
                  Directions →
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sage">
                  Enquiry Form →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="mt-16 border-t border-white/10">
        <div className="frame flex flex-col items-start justify-between gap-3 py-6 text-[11px] uppercase tracking-super-wide text-taupe md:flex-row md:items-center">
          <p>© {year} Hotel TARA · All rights reserved</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Giant wordmark as closing brutalist flourish */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden border-t border-white/5"
      >
        <p
          className="display whitespace-nowrap text-center text-white/5"
          style={{
            fontSize: "clamp(120px, 22vw, 400px)",
            marginTop: "-0.15em",
            marginBottom: "-0.25em",
          }}
        >
          TARA · HIMACHAL
        </p>
      </div>
    </footer>
  );
}
