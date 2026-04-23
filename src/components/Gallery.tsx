"use client";

import Reveal from "./Reveal";

type Shot = { src: string; alt: string; span?: string; ratio: string };

const shots: Shot[] = [
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    alt: "Premium bedroom at Hotel TARA",
    span: "lg:col-span-7",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
    alt: "Himachal highway near the hotel",
    span: "lg:col-span-5 lg:mt-24",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
    alt: "Clean, elegant bathroom",
    span: "lg:col-span-5",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    alt: "Hotel TARA exterior view",
    span: "lg:col-span-7 lg:mt-12",
    ratio: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 md:py-36">
      <div className="frame">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="label text-taupe">Visual Index</p>
            <h2
              className="display mt-4 text-navy"
              style={{ fontSize: "clamp(44px, 7vw, 128px)" }}
            >
              Gallery
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-[14px] font-light leading-[1.8] text-navy/60 md:text-right">
              Four frames — rooms, dining, the highway, and the quiet charm of
              Himachal.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 lg:grid-cols-12 lg:gap-10">
          {shots.map((s, i) => (
            <Reveal
              key={s.src}
              delay={i * 0.05}
              className={`group ${s.span ?? ""}`}
            >
              <figure className="relative overflow-hidden crosshair">
                <div className={`${s.ratio} overflow-hidden`}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-cinema group-hover:scale-110"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between text-[11px] uppercase tracking-super-wide text-navy/60">
                  <span>{`0${i + 1} / 0${shots.length}`}</span>
                  <span className="max-w-[60%] text-right normal-case tracking-normal">
                    {s.alt}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
