"use client";

import Link from "next/link";
import { useEffect } from "react";
import AmbientOrbs from "@/components/AmbientOrbs";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const incidentId = error.digest ?? "UNKNOWN";

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-navy">
      <AmbientOrbs colors={["#d5f4f9", "#9f8d8b"]} />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="frame w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <p className="label">Error · 500</p>
              <h1
                className="display mt-6 text-white"
                style={{ fontSize: "clamp(72px, 14vw, 280px)" }}
              >
                Something
                <br />
                <span className="text-outline-thick">went wrong.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] font-light leading-[1.8] text-white/70">
                An unexpected issue occurred while loading this page. Try again,
                or reach out to us directly — we&apos;re happy to help.
              </p>

              <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="label">Incident ID</dt>
                  <dd className="mt-2 break-all font-display text-lg uppercase tracking-widest text-sage">
                    {incidentId}
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
                <button type="button" onClick={() => reset()} className="btn-ghost">
                  Try Again
                </button>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-super-wide text-white"
                >
                  <span>Return Home</span>
                  <span className="inline-block transition-transform duration-700 ease-cinema group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="frame flex items-center justify-between py-6 text-[11px] uppercase tracking-super-wide text-taupe">
          <p>Hotel TARA · Una · Himachal Pradesh</p>
          <p>500-SERVER-ERROR</p>
        </div>
      </div>
    </main>
  );
}
