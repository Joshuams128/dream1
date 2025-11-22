import Link from "next/link";

export default function ContactPage() {
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
                Providing Masonry & Home Improvements for 20+ Years
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Tell us about your project, and the Build With Dream team will reach out to help bring your ideas to life.
              </p>
            </div>

            <form className="grid gap-4 md:grid-cols-2" noValidate>
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
                />
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
                />
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
                />
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
                  <option value="bathrooms">Bathroom Renovations</option>
                  <option value="kitchens">Kitchen Renovations</option>
                  <option value="outdoor">Outdoor Improvements & Landscaping</option>
                  <option value="windows">Window & Door Installations</option>
                  <option value="home">Home Improvement Services</option>
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
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0574C9] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#045e9f]"
                >
                  Send Message
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
                  href="mailto:info.dreamcontractorsinc@gmail.com"
                  className="text-[#0574C9] hover:underline"
                >
                  info.dreamcontractorsinc@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Bathroom &amp; Kitchen Renovations</li>
                <li>Outdoor Improvements &amp; Landscaping</li>
                <li>Window &amp; Door Installations</li>
                <li>Home Improvement Services</li>
                <li>Masonry &amp; Stone Work</li>
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
