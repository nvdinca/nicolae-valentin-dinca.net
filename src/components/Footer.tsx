import Link from "next/link";
import CookiePreferencesTrigger from "@/components/CookiePreferencesTrigger";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-champagne/20 bg-ivory text-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="font-sans text-sm text-obsidian/90">
          Custom digital identities for luxury real estate. Quiet luxury, in digital form.
        </p>
        <p className="mt-3 font-sans text-xs font-medium uppercase tracking-widest text-warm-gray">
          Find me
        </p>
        <div className="mt-2">
          <SocialLinks />
        </div>
        <p className="mt-6 font-sans text-xs text-warm-gray">
          © {new Date().getFullYear()} Nicolae-Valentin Dincă
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs">
          <Link href="/now" className="text-obsidian/70 underline transition hover:text-forest">
            Now
          </Link>
          <span className="text-warm-gray">·</span>
          <Link href="/privacy" className="text-obsidian/70 underline transition hover:text-forest">
            Privacy Policy
          </Link>
          <span className="text-warm-gray">·</span>
          <CookiePreferencesTrigger />
        </div>
      </div>
    </footer>
  );
}
