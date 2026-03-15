"use client";

import { useState, useCallback } from "react";

type ShareAndCopyProps = { path: string; title: string };

export default function ShareAndCopy({ path, title }: ShareAndCopyProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = useCallback(() => `${window.location.origin}${path}`, [path]);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, [getUrl]);

  const share = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: getUrl(),
          text: title,
        });
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  }, [title, getUrl, copyLink]);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={share}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-obsidian/70 transition hover:text-forest focus:outline-none focus:ring-2 focus:ring-forest/40 focus:ring-offset-2"
        aria-label="Share"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="flex min-h-[44px] items-center gap-2 rounded px-3 font-sans text-sm text-obsidian/70 transition hover:text-forest focus:outline-none focus:ring-2 focus:ring-forest/40 focus:ring-offset-2"
        aria-label={copied ? "Copied" : "Copy link"}
      >
        {copied ? (
          <span className="text-forest">Copied</span>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy link</span>
          </>
        )}
      </button>
    </div>
  );
}
