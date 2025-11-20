// components/Footer.tsx
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-500 md:text-sm">
        © {year} Clayson Construction. All Rights Reserved.{" "}
        <span className="inline-block">
          Website by Ascension Marketing.
        </span>
      </div>
    </footer>
  );
}
