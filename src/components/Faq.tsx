import { FAQS } from "@/lib/site";

export default function Faq() {
  return (
    <div className="divide-y divide-line-soft border-y border-line-soft">
      {FAQS.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 transition-colors duration-200 hover:text-muted">
            <h3 className="font-display text-lg font-medium sm:text-xl">{item.q}</h3>
            <span
              aria-hidden="true"
              className="faq-sign relative block h-4 w-4 shrink-0 transition-transform duration-300"
            >
              <span className="absolute top-1/2 left-0 block h-px w-4 -translate-y-1/2 bg-current" />
              <span className="absolute top-0 left-1/2 block h-4 w-px -translate-x-1/2 bg-current" />
            </span>
          </summary>
          <p className="max-w-2xl pb-8 text-base text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
