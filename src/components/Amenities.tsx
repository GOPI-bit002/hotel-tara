"use client";

import Reveal from "./Reveal";

const capabilities = [
  "Private Rooms",
  "Room Service",
  "On-site Parking",
  "Highway Access",
  "Family Suites",
  "Clean Washrooms",
  "Home-style Dining",
  "Phone Booking",
  "24-hour Reception",
  "Complimentary Water",
];

export default function Amenities() {
  return (
    <section id="capabilities" className="bg-bone py-24 md:py-36">
      <div className="frame grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — list */}
        <Reveal className="lg:col-span-4">
          <p className="label text-taupe">Capabilities</p>
          <ul className="mt-10 flex flex-col gap-5">
            {capabilities.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-5 crosshair"
              >
                <span
                  aria-hidden
                  className="h-px w-10 bg-navy transition-all duration-700 ease-cinema group-hover:w-16"
                />
                <span className="font-display text-[18px] uppercase tracking-tight text-navy md:text-[20px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right — big typographic statement */}
        <Reveal delay={0.12} className="lg:col-span-8">
          <h2
            className="display text-navy"
            style={{ fontSize: "clamp(44px, 6vw, 108px)" }}
          >
            A quiet stay <AccentWord>crafted</AccentWord>
            <br />
            with intention{" "}
            <AccentWord>for every</AccentWord>
            <br />
            traveller.
          </h2>
          <p className="mt-10 max-w-lg text-[16px] font-light leading-[1.8] text-navy/70">
            Hospitality, distilled. Clean rooms, polite service, a room key at
            11 in the night, and someone who answers the phone on the second
            ring. The details you miss only when they are missing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AccentWord({ children }: { children: React.ReactNode }) {
  return (
    <em className="font-sans font-light italic normal-case text-taupe">
      {children}
    </em>
  );
}
