"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type Story = {
  text: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
};

const stories: Story[] = [
  {
    text:
      "A genuinely restful stop on the road through Himachal. Warm, simple, and calmly premium.",
    name: "Amit Sharma",
    role: "Traveller · New Delhi",
    initials: "AS",
    avatarBg: "#d7c5b2", // beige
  },
  {
    text:
      "Lovely rooms for the family. The staff were polite and helpful, and the highway location made the whole trip easier to plan.",
    name: "Neha Verma",
    role: "Family stay · Chandigarh",
    initials: "NV",
    avatarBg: "#b7c6c2", // sage
  },
  {
    text:
      "Quiet room, fast check-in, good food on request. Exactly the kind of stay I want on work trips. Will return.",
    name: "Rajiv Thakur",
    role: "Business · Shimla",
    initials: "RT",
    avatarBg: "#bbe2f5", // soft blue
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % stories.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const active = stories[index];

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-charcoal py-24 md:py-36"
    >
      {/* Giant decorative quotation mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display leading-none text-navy"
        style={{ fontSize: "clamp(18rem, 40vw, 30rem)", opacity: 0.3 }}
      >
        &ldquo;
      </span>

      <div className="frame relative">
        <Reveal className="text-center">
          <p className="eyebrow">Guest Stories</p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="display text-white"
              style={{ fontSize: "clamp(28px, 3.6vw, 60px)", lineHeight: 1.1 }}
            >
              &ldquo;{active.text}&rdquo;
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-14 flex items-center justify-center gap-5">
            <span
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full font-display text-lg uppercase tracking-wider text-navy"
              style={{ background: active.avatarBg }}
            >
              {active.initials}
            </span>
            <div className="text-left">
              <p className="font-display text-lg uppercase tracking-widest text-white">
                {active.name}
              </p>
              <p className="label text-taupe">{active.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show story ${i + 1}`}
                aria-current={i === index}
                className={`h-px w-10 transition-colors duration-700 ease-cinema ${
                  i === index ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
