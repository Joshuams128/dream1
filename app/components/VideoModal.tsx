"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
};

export default function VideoModal({ src, poster }: Props) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* thumbnail / preview (click to open modal) */}
      <div
        className="relative w-full max-w-xl mx-auto md:max-w-none overflow-hidden rounded-lg shadow-lg bg-black flex items-center justify-center cursor-pointer"
        onClick={() => setOpen(true)}
        role="button"
        aria-label="Open video in large view"
      >
        <video
          src={src}
          poster={poster}
          className="w-full h-56 md:h-64 lg:h-130 object-cover rounded-lg"
          playsInline
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-white/90"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative mx-auto w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 z-10 rounded bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
            >
              Close
            </button>

            <video
              src={src}
              className="w-full h-auto max-h-[90vh] bg-black rounded"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  );
}
