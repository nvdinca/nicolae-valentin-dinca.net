import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-sans text-sm uppercase tracking-widest text-warm-gray">404</p>
        <h1 className="mt-4 font-serif text-2xl tracking-wide text-obsidian sm:text-3xl md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 font-sans text-obsidian/80 sm:text-base">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center border border-forest px-6 py-3 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-forest hover:text-ivory"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
