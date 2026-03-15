import type { Metadata } from "next";
import Link from "next/link";
import { now } from "@/data/now";

export const metadata: Metadata = {
  title: "Now",
  description: "What Nicolae-Valentin Dincă is working on now.",
  alternates: { canonical: "/now" },
};

export default function NowPage() {
  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[44px] items-center font-sans text-sm uppercase tracking-widest text-warm-gray transition hover:text-forest"
        >
          ← Home
        </Link>
        <h1 className="font-serif text-2xl tracking-wide sm:text-3xl">
          Now
        </h1>
        <p className="mt-2 font-sans text-sm text-warm-gray">
          What I’m doing now. Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest underline hover:no-underline"
          >
            nownownow.com
          </a>
          .
        </p>
        <div className="mt-8 font-sans text-obsidian/90 leading-relaxed sm:text-base">
          <p>{now.text}</p>
        </div>
        <p className="mt-6 font-sans text-xs text-warm-gray">
          Last updated {now.updatedAt}
        </p>
      </div>
    </main>
  );
}
