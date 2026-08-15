/**
 * Typographic lockup used wherever the full logo artwork would be
 * too small to read (header, footer bar).
 */
export default function Wordmark({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-lg font-semibold tracking-[0.28em] text-fg sm:text-xl">
        46DOGS
      </span>
      {showTagline && (
        <span className="mt-1.5 font-display text-[0.5rem] font-medium tracking-[0.34em] text-dim sm:text-[0.5625rem]">
          RESCUE. CARE. LOVE.
        </span>
      )}
    </span>
  );
}
