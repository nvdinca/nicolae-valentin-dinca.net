export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-pulse rounded-full border-2 border-champagne border-t-forest" aria-hidden />
        <p className="font-sans text-sm text-warm-gray">Loading…</p>
      </div>
    </div>
  );
}
