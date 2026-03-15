"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-sans text-sm uppercase tracking-widest text-warm-gray">Something went wrong</p>
        <h1 className="mt-4 font-serif text-2xl tracking-wide text-obsidian sm:text-3xl">
          An error occurred
        </h1>
        <p className="mt-4 font-sans text-obsidian/80 sm:text-base">
          We couldn’t load this page. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center border border-forest px-6 py-3 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-forest hover:text-ivory focus:outline-none focus:ring-2 focus:ring-forest/40 focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
