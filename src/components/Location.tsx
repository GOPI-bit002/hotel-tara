"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="bg-navy py-24 md:py-36">
      <div className="frame">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Where We Are</p>
            <h2
              className="display mt-6 text-white"
              style={{ fontSize: "clamp(48px, 6.5vw, 112px)" }}
            >
              On NH 503,
              <br />
              <span className="text-outline">near Una</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] font-light leading-[1.8] text-taupe">
              Hotel TARA sits right on the highway — a natural stop for
              travellers between Himachal and Punjab. Calm surroundings, safe
              parking, easy to find.
            </p>

            <dl className="mt-12 space-y-8 border-t border-white/10 pt-8">
              <div>
                <dt className="label">Address</dt>
                <dd className="mt-2 text-[16px] font-light leading-[1.8] text-white">
                  {site.address}
                </dd>
              </div>
              <div>
                <dt className="label">Coordinates</dt>
                <dd className="mt-2 font-display text-xl uppercase tracking-widest text-sage">
                  31.4685° N · 76.2708° E
                </dd>
              </div>
              <div>
                <dt className="label">Direct line</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="font-display text-3xl uppercase tracking-tight text-white transition-colors ease-cinema hover:text-sage"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Get Directions
              </a>
              <a href="#contact" className="link-arrow text-white">
                <span>Enquire Now</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative h-[420px] overflow-hidden border border-white/10 md:h-[580px]">
              <iframe
                title="Hotel TARA location map"
                src={site.mapsEmbed}
                className="h-full w-full"
                style={{ filter: "grayscale(1) contrast(1.1) invert(0.92)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Corner marker overlay */}
              <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-cyan" />
                <span className="font-display text-sm uppercase tracking-super-wide text-navy">
                  TARA · 174306
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
