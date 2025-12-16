"use client";

import Link from "next/link";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Your message has been sent successfully. We'll get back to you soon!
            </p>
            <Link
              href="/"
              className="inline-block rounded-lg bg-[#0574C9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#045e9f]"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0574C9]">
                Send Us A Message
              </p>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Renovations, built around your vision
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Tell us about your project, and the Build With Dream team will reach out to help bring your ideas to life.
              </p>
            </div>

            <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700" htmlFor="name">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#0574C9] focus:outline-none"
                  placeholder="Your Name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#0574C9] focus:outline-none"
                  placeholder="name@email.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700" htmlFor="phone">
                  Your Phone Number*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#0574C9] focus:outline-none"
                  placeholder="000-000-0000"
                  required
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700" htmlFor="service">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#0574C9] focus:outline-none"
                  defaultValue="bathrooms"
                >
                  <option value="bathrooms">Washroom Transformation</option>
                  <option value="kitchens">Kitchen Transformation</option>
                  <option value="windows"> Office Renovations</option>
                  <option value="home">Home Improvement Services</option>
                  <option value="outdoor">Outdoor Improvements</option>

                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="details">
                  Tell us a little more about your project*
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#0574C9] focus:outline-none"
                  placeholder="Describe your project, timeline, and address."
                  required
                ></textarea>
                <ValidationError prefix="Details" field="details" errors={state.errors} />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-lg bg-[#0574C9] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#045e9f] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Serving Durham &amp; the GTA</h2>
              <p className="mt-2 text-sm text-slate-600">
                Whether you&apos;re renovating a bathroom or planning a full home refresh, we bring craftsmanship and care to every project.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">Phone:</span>
                <a href="tel:4167388654" className="text-[#0574C9] hover:underline">
                  416-738-8654
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">Email:</span>
                <a
                  href="mailto:info.buildwithdream.com"
                  className="text-[#0574C9] hover:underline"
                >
                info@buildwithdream.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Washroom Transformations</li>
                <li>Kitchen Transformations</li>
                <li>Office Renovations</li>
                <li>Home Improvement Services</li>
                <li>Outdoor Improvements</li>
              </ul>
            </div>

            <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Ready for an estimate?</p>
              <p className="mt-1">
                Fill out the form or call us directly. We&apos;ll get back to you as soon as possible.
              </p>
              <Link
                href="tel:4167388654"
                className="mt-3 inline-block rounded-md bg-[#0574C9] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#045e9f]"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
