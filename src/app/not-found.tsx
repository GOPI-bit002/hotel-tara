import type { Metadata } from "next";
import Link from "next/link";
import AmbientOrbs from "@/components/AmbientOrbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at Hotel TARA.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-navy">
      <AmbientOrbs />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="frame w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <p className="label">Error · 404</p>
              <h1
                className="display mt-6 text-white"
                style={{ fontSize: "clamp(96px, 18vw, 360px)" }}
              >
                404
              </h1>
              <p className="label mt-4 text-taupe">
                <span className="text-outline-thick font-display">
                  Page&nbsp;Not&nbsp;Found
                </span>
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] font-light leading-[1.8] text-white/70">
                The page you are looking for has moved or no longer exists. You
                can return to the homepage, or call us — we&apos;re happy to
                help plan your stay.
              </p>

              <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="label">Reference</dt>
                  <dd className="mt-2 font-display text-lg uppercase tracking-widest text-sage">
                    404-NOT-FOUND
                  </dd>
                </div>
                <div>
                  <dt className="label">Direct line</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="font-display text-2xl uppercase tracking-widest text-white hover:text-sage"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-6">
                <Link href="/" className="btn-ghost">
                  Return Home
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-super-wide text-white"
                >
                  <span>Call Hotel TARA</span>
                  <span className="inline-block transition-transform duration-700 ease-cinema group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="frame flex items-center justify-between py-6 text-[11px] uppercase tracking-super-wide text-taupe">
          <p>Hotel TARA · Una · Himachal Pradesh</p>
          <p>174306</p>
        </div>
      </div>
    </main>
  );
}
