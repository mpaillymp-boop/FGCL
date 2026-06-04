/**
 * FGCL wordmark. The brief's logo lives on a private Drive link that cannot be
 * embedded, so this is a simple geometric mark plus wordmark in the brand
 * colors, to be swapped for the official asset when provided.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
        <rect x="1.5" y="1.5" width="27" height="27" rx="7" stroke="#ffcb05" strokeWidth="1.5" />
        <path d="M9 21V9h9" stroke="#ffcb05" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M9 15h6" stroke="#3b82f6" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="21.5" cy="20.5" r="2" fill="#3b82f6" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-space-grotesk)]">
        FGCL
      </span>
    </span>
  );
}
