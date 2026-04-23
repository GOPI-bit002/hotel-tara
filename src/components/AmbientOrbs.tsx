"use client";

/**
 * Two floating blurred circles used as an ambient cinematic backdrop.
 * Spec: 384px size, 120px blur, 20% opacity, 6s ease-in-out float.
 *
 * Usage: drop inside a `relative overflow-hidden` dark section.
 *   <AmbientOrbs />
 */
type Props = {
  className?: string;
  colors?: [string, string];
};

export default function AmbientOrbs({
  className = "",
  colors = ["#b7c6c2", "#bbe2f5"], // sage + soft blue
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span
        className="orb animate-float"
        style={{ background: colors[0], top: "-6rem", left: "-6rem" }}
      />
      <span
        className="orb animate-float-long"
        style={{
          background: colors[1],
          bottom: "-8rem",
          right: "-4rem",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
