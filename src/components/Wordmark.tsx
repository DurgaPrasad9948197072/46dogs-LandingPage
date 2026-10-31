import Image from "next/image";

/**
 * Header lockup: the dog mark (the 4 and 6) beside the name, set in
 * text so it stays crisp at header size.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 leading-none ${className}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={80}
        height={80}
        sizes="40px"
        priority
        className="h-10 w-10 object-contain"
      />
      <span className="font-display text-lg font-semibold tracking-[0.04em] text-fg sm:text-xl">
        46Dogs
      </span>
    </span>
  );
}
