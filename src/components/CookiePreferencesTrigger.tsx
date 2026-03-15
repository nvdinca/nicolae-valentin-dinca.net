"use client";

const STORAGE_KEY = "cookie-consent";

export default function CookiePreferencesTrigger() {
  function handleClick() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="font-sans text-xs text-obsidian/70 underline transition hover:text-forest"
    >
      Cookie preferences
    </button>
  );
}
