"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { site, waLink } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const handle =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hello Hotel TARA, I'd like to make an enquiry.%0A` +
      `Name: ${form.name || "-"}%0A` +
      `Phone: ${form.phone || "-"}%0A` +
      `Check-in: ${form.checkIn || "-"}%0A` +
      `Check-out: ${form.checkOut || "-"}%0A` +
      `Guests: ${form.guests}%0A` +
      `Message: ${form.message || "-"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="bg-navy py-24 md:py-36">
      <div className="frame grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Left — editorial heading & direct lines */}
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Reservations</p>
          <h2
            className="display mt-6 text-white"
            style={{ fontSize: "clamp(48px, 6.5vw, 104px)" }}
          >
            Plan
            <br />
            your
            <br />
            stay.
          </h2>
          <p className="mt-8 max-w-sm text-[15px] font-light leading-[1.8] text-taupe">
            Share a few details and we&apos;ll reply on WhatsApp — usually
            within the hour.
          </p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="label">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-display text-2xl uppercase tracking-widest text-white transition-colors ease-cinema hover:text-sage"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Address</dt>
              <dd className="mt-2 text-[15px] font-light leading-[1.8] text-white/80">
                {site.address}
              </dd>
            </div>
            <div>
              <dt className="label">Hours</dt>
              <dd className="mt-2 text-[15px] font-light text-white/80">
                Reception open 24 hours
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={waLink("Hello Hotel TARA, I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Us
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow text-white"
            >
              <span>Open in Maps</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </Reveal>

        {/* Right — dark editorial form */}
        <Reveal delay={0.12} className="lg:col-span-7">
          <form
            onSubmit={submit}
            aria-label="Enquiry form"
            className="border-t border-white/10 pt-10"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="input-dark-label">
                  01 / Name
                </label>
                <input
                  id="c-name"
                  required
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handle("name")}
                  className="input-dark"
                />
              </div>
              <div>
                <label htmlFor="c-phone" className="input-dark-label">
                  02 / Phone
                </label>
                <input
                  id="c-phone"
                  required
                  type="tel"
                  placeholder="+91 98000 00000"
                  value={form.phone}
                  onChange={handle("phone")}
                  className="input-dark"
                />
              </div>
              <div>
                <label htmlFor="c-in" className="input-dark-label">
                  03 / Check-in
                </label>
                <input
                  id="c-in"
                  type="date"
                  value={form.checkIn}
                  onChange={handle("checkIn")}
                  className="input-dark"
                />
              </div>
              <div>
                <label htmlFor="c-out" className="input-dark-label">
                  04 / Check-out
                </label>
                <input
                  id="c-out"
                  type="date"
                  value={form.checkOut}
                  onChange={handle("checkOut")}
                  className="input-dark"
                />
              </div>
              <div>
                <label htmlFor="c-guests" className="input-dark-label">
                  05 / Guests
                </label>
                <select
                  id="c-guests"
                  value={form.guests}
                  onChange={handle("guests")}
                  className="input-dark"
                >
                  <option value="1" className="bg-navy text-white">1 Guest</option>
                  <option value="2" className="bg-navy text-white">2 Guests</option>
                  <option value="3" className="bg-navy text-white">3 Guests</option>
                  <option value="4" className="bg-navy text-white">4 Guests</option>
                  <option value="5+" className="bg-navy text-white">5+ Guests</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-msg" className="input-dark-label">
                  06 / Message
                </label>
                <textarea
                  id="c-msg"
                  rows={3}
                  value={form.message}
                  onChange={handle("message")}
                  placeholder="Any special requests or questions?"
                  className="input-dark resize-none"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
              <p className="label max-w-xs text-taupe">
                On submit we&apos;ll open WhatsApp with your enquiry pre-filled.
              </p>
              <button type="submit" className="btn-ghost">
                Send Enquiry
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
