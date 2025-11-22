// components/Footer.tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-slate-700 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-lg font-semibold text-[#0574C9]">Build With Dream</div>
          <p className="text-sm text-slate-600">
            Trusted renovations, repairs, and home improvements across Durham Region.
          </p>
          <p className="text-xs text-slate-500">© {year} Build With Dream. All Rights Reserved.</p>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm font-medium text-[#0574C9]">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#045e9f]"
          >
            <span aria-hidden>📷</span>
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#045e9f]"
          >
            <span aria-hidden>👍</span>
            <span>Facebook</span>
          </a>
        </div>

        <div className="text-center text-xs text-slate-500 md:text-right">
          Website by Ascension Marketing.
        </div>
      </div>
    </footer>
  );
}
