"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

/**
 * Scroll reveal wrapper — initial translateY(10px) & opacity 0,
 * transitions to visible over 1000ms with cinematic easing.
 *
 *   <Reveal><h2>...</h2></Reveal>
 */
type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  once?: boolean;
  amount?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "transition" | "viewport">;

export default function Reveal({
  children,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
