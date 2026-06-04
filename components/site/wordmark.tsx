/**
 * FGCL wordmark. Faithful inline-SVG recreation of the FGCL brand mark (orbit
 * swoosh in electric blue with a yellow ribbon) plus the FGCL wordmark, in a
 * light-on-navy treatment so it reads on the dark navbar/footer. Swap for the
 * official asset by dropping it in /public and updating this component.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="40" height="34" viewBox="0 0 44 38" fill="none" aria-hidden>
        <g transform="translate(20 19)">
          <g transform="rotate(-26)">
            <ellipse rx="18" ry="7.2" fill="none" stroke="#3b82f6" strokeWidth="2.4" />
          </g>
          <g transform="rotate(34)">
            <path
              d="M -15 0 A 15 6.4 0 0 1 13 0"
              fill="none"
              stroke="#ffcb05"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>
          <path d="M 12 -4 L 19 0 L 12 4 Z" fill="#3b82f6" />
          <circle r="3" fill="#ffcb05" />
        </g>
      </svg>
      <span className="text-lg font-bold tracking-[-0.01em] text-white font-[family-name:var(--font-space-grotesk)]">
        FGCL
      </span>
    </span>
  );
}
