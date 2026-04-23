"use client";

import Reveal from "./Reveal";
import AmbientOrbs from "./AmbientOrbs";
import { waLink } from "@/lib/site";

export default function Featured() {
  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-navy py-24 md:py-36"
    >
      <AmbientOrbs colors={["#d5f4f9", "#b7c6c2"]} />

      <div className="frame relative grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Left — image with cyan square behind */}
        <Reveal className="relative lg:col-span-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-6 -top-6 h-full w-full bg-cyan/20 md:-left-12 md:-top-12"
            />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80"
                alt="A considered suite at Hotel TARA"
                className="h-full w-full object-cover grayscale transition duration-1000 ease-cinema hover:scale-[1.04] hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Right — editorial copy */}
        <Reveal delay={0.15} className="lg:col-span-6 lg:pl-6">
          <div className="flex h-full flex-col justify-center">
            <p className="eyebrow">Featured Stay / 2026</p>
            <h2
              className="display mt-6 text-white"
              style={{ fontSize: "clamp(48px, 6vw, 104px)" }}
            >
              The Himachal
              <br />
              <span className="text-sage">Hillside Retreat</span>
            </h2>
            <p className="mt-8 max-w-md text-[16px] font-light leading-[1.8] text-taupe">
              A deliberate escape from the highway rush — a room crafted for
              rest, the morning light, and the quiet hours around Una. Linen
              tones, handmade textures, and stillness.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-white">
              <div>
                <dt className="label">Nights</dt>
                <dd className="mt-2 font-display text-3xl uppercase">
                  From One
                </dd>
              </div>
              <div>
                <dt className="label">Guests</dt>
                <dd className="mt-2 font-display text-3xl uppercase">1 – 4</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#contact" className="btn-ghost">
                Reserve this stay
              </a>
              <a
                href={waLink(
                  "Hello Hotel TARA, I'd like details on the Himachal Hillside Retreat."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow text-white"
              >
                <span>WhatsApp</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
