/** A distinct, recognisable visual chip used wherever House Membership is pitched. */
export function MemberBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-champagne px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-oxblood-deep ring-1 ring-oxblood/20 shadow-soft ${className}`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l2.4 5 5.6.6-4 4.2 1 5.7L12 14.8 7 17.5l1-5.7-4-4.2L9.6 7 12 2z" fill="currentColor" opacity="0.9" />
      </svg>
      House Member
    </span>
  );
}
