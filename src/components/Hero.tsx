"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AmbientOrbs from "./AmbientOrbs";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy crosshair"
    >
      <AmbientOrbs />

      {/* Top meta strip (sits under the fixed nav) */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-28 md:px-10 md:pt-32 lg:px-16 lg:pt-36">
        <p className="label">Est. · Behdala, Una — Himachal Pradesh</p>
        <p className="hidden label md:block">NH 503 · 174306</p>
      </div>

      {/* Centered massive headline */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="display select-none text-center text-white"
          style={{ fontSize: "clamp(88px, 18vw, 320px)", lineHeight: 0.85 }}
        >
          <span className="block">TARA</span>
          <span className="text-outline block">Hotel</span>
        </motion.h1>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 flex items-end justify-between gap-6 px-6 pb-10 md:px-10 md:pb-14 lg:px-16 lg:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="label max-w-[320px] text-taupe leading-[1.8]"
        >
          A calm, editorial stay on the highway to Himachal — intentional rooms,
          warm hospitality, cinematic quiet.
        </motion.p>

        <motion.a
          href="#stays"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to Selected Works"
          className="group inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-700 ease-cinema hover:border-sage hover:text-sage md:h-16 md:w-16"
        >
          <ArrowDown className="h-5 w-5 animate-bounce-slow" />
        </motion.a>
      </div>
    </section>
  );
}
