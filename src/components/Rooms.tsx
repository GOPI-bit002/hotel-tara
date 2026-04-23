"use client";

import Reveal from "./Reveal";
import { waLink } from "@/lib/site";

type Work = {
  num: string;
  name: string;
  meta: string;
  description: string;
  image: string;
  fallback: string;
  features: string[];
};

const works: Work[] = [
  {
    num: "01",
    name: "Deluxe Room",
    meta: "For one or two",
    description:
      "A cozy, well-appointed room for solo travellers and couples — composed for a restful night on the highway.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
    fallback:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
    features: ["Air Conditioning", "Comfort Bed", "Room Service", "Wi-Fi"],
  },
  {
    num: "02",
    name: "Family Room",
    meta: "For groups up to five",
    description:
      "Spacious rooms designed for families and small groups, with extra bedding and soft seating for unwinding.",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=80",
    fallback:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
    features: ["Family Size", "Air Conditioning", "Parking", "Room Service"],
  },
  {
    num: "03",
    name: "Premium Stay",
    meta: "Our most considered room",
    description:
      "Thoughtful details, quality linen and a calm, premium ambience — our most considered category.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
    fallback:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    features: ["King Bed", "Air Conditioning", "Room Service", "Wi-Fi"],
  },
  {
    num: "04",
    name: "Highway Suite",
    meta: "For the long distance traveller",
    description:
      "A quiet suite shielded from the road — with a dedicated work corner and a soft morning light.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80",
    fallback:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=80",
    features: ["Quiet Side", "Work Desk", "Air Conditioning", "Breakfast"],
  },
];

export default function Rooms() {
  return (
    <section id="stays" className="bg-white py-24 md:py-36">
      <div className="frame">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="label text-taupe">The Portfolio</p>
            <h2
              className="display mt-4 text-navy"
              style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
            >
              Selected
              <br />
              Works
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-xs md:text-right">
            <p className="text-[15px] font-light leading-[1.7] text-navy/70">
              Four rooms, each considered as its own small project — composed
              for the way a guest moves, rests and leaves.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
          {works.map((w, i) => (
            <Reveal
              key={w.num}
              delay={i * 0.05}
              className={i % 2 === 1 ? "md:mt-16" : ""}
            >
              <WorkCard work={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  const enquireUrl = waLink(
    `Hello Hotel TARA, I'd like to enquire about the ${work.name}.`
  );
  return (
    <article className="group">
      <a
        href={enquireUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire about ${work.name} on WhatsApp`}
        className="relative block overflow-hidden crosshair"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={work.image}
            alt={`${work.name} at Hotel TARA`}
            className="h-full w-full object-cover transition-transform duration-1000 ease-cinema group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = work.fallback;
            }}
          />
          {/* Navy overlay */}
          <div className="absolute inset-0 bg-navy/60 opacity-0 transition-opacity duration-700 ease-cinema group-hover:opacity-100" />
          {/* VIEW badge */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 scale-90 items-center justify-center rounded-full border border-white opacity-0 transition-all duration-700 ease-cinema group-hover:scale-100 group-hover:opacity-100">
              <span className="font-display text-[14px] uppercase tracking-super-wide text-white">
                View
              </span>
            </div>
          </div>
          {/* Number badge */}
          <div className="absolute left-4 top-4 font-display text-xl uppercase tracking-widest text-white mix-blend-difference md:left-6 md:top-6 md:text-2xl">
            {work.num}
          </div>
        </div>
      </a>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl uppercase tracking-tight text-navy md:text-4xl">
          {work.name}
        </h3>
        <p className="label text-navy/50">{work.meta}</p>
      </div>

      <p className="mt-3 max-w-md text-[15px] font-light leading-[1.7] text-navy/70">
        {work.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-super-wide text-navy/70">
        {work.features.map((f) => (
          <li key={f} className="before:mr-2 before:content-['·']">
            {f}
          </li>
        ))}
      </ul>

      <a
        href={enquireUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link-arrow mt-6 text-navy"
      >
        <span>Enquire Now</span>
        <span className="arrow">→</span>
      </a>
    </article>
  );
}
