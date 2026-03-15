import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { now } from "@/data/now";

type NowSectionProps = { showLinkToPage?: boolean };

export default function NowSection({ showLinkToPage = true }: NowSectionProps) {
  return (
    <AnimateIn as="section" className="border-t border-champagne/20 bg-ivory px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
          Now
        </h2>
        <p className="mt-3 font-sans text-obsidian/90 leading-relaxed sm:text-base">
          {now.text}
        </p>
        <p className="mt-2 font-sans text-xs text-warm-gray">
          Updated {now.updatedAt}
        </p>
        {showLinkToPage && (
          <Link
            href="/now"
            className="mt-4 inline-flex font-sans text-sm uppercase tracking-widest text-forest transition hover:text-champagne"
          >
            More on /now →
          </Link>
        )}
      </div>
    </AnimateIn>
  );
}
