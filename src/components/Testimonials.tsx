import AnimateIn from "@/components/AnimateIn";
import { testimonials } from "@/data/testimonials";

type TestimonialsProps = {
  maxItems?: number;
  className?: string;
};

export default function Testimonials({ maxItems = 2, className = "" }: TestimonialsProps) {
  const items = testimonials.slice(0, maxItems);

  return (
    <section
      className={className}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
        What clients say
      </h2>
      <ul className="mt-6 space-y-8 sm:mt-8">
        {items.map((t, i) => (
          <AnimateIn key={i} delay={i * 0.05}>
            <li className="border-l-2 border-champagne/40 pl-5">
              <blockquote className="font-sans text-obsidian/90 italic leading-relaxed sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-3 font-sans text-sm text-warm-gray">
                — {t.author}
                {t.role && <span className="block text-xs">{t.role}</span>}
              </footer>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
