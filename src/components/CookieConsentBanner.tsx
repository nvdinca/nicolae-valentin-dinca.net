"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

type Consent = "all" | "necessary" | null;

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (stored === "all" || stored === "necessary") setConsent(stored);
      else setConsent(null);
    } catch {
      setConsent(null);
    }
    setMounted(true);
  }, []);

  function saveConsent(value: "all" | "necessary") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      setConsent(value);
    } catch {
      setConsent(value);
    }
  }

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-champagne/30 bg-ivory shadow-[0_-4px_20px_rgba(12,12,12,0.08)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="font-sans text-sm text-obsidian/90">
            We use cookies to ensure the site works correctly and to remember your preferences. By
            clicking &quot;Accept all&quot; you agree to the use of cookies. See our{" "}
            <Link
              href="/privacy"
              className="underline transition hover:text-forest"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => saveConsent("necessary")}
              className="min-h-[44px] rounded border border-champagne bg-transparent px-4 py-2 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-champagne/20"
            >
              Necessary only
            </button>
            <button
              type="button"
              onClick={() => saveConsent("all")}
              className="min-h-[44px] rounded border border-forest bg-forest px-4 py-2 font-sans text-sm uppercase tracking-widest text-ivory transition hover:opacity-90"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
