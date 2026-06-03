type Props = { size?: number; className?: string; tone?: "light" | "dark" };

/**
 * House of Affairs monogram — a chic gabled-roof "H" with a hearth/candle inside,
 * suggesting "home + experience". Renders crisply at any size.
 */
export function HouseLogo({ size = 40, className = "", tone = "dark" }: Props) {
  const stroke = tone === "light" ? "var(--champagne)" : "var(--oxblood)";
  const accent = tone === "light" ? "var(--champagne)" : "var(--champagne-deep)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* gable roof */}
      <path
        d="M8 30 L32 8 L56 30"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* house body */}
      <path
        d="M12 30 V54 H52 V30"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* champagne flute / hearth in the centre */}
      <path
        d="M28 40 L36 40 L34.5 47 Q32 49 29.5 47 Z"
        fill={accent}
        opacity="0.95"
      />
      <line x1="32" y1="49" x2="32" y2="54" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      {/* roof sparkle */}
      <circle cx="32" cy="20" r="1.4" fill={accent} />
    </svg>
  );
}
