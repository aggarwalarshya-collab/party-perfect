// Tiny client-only store for saved + browsed affairs (My Board).
const SAVED_KEY = "hoa:saved";
const BROWSED_KEY = "hoa:browsed";

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
function write(key: string, list: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent("hoa:board"));
}

export const board = {
  isSaved: (slug: string) => read(SAVED_KEY).includes(slug),
  toggleSaved: (slug: string) => {
    const cur = read(SAVED_KEY);
    const next = cur.includes(slug) ? cur.filter((s) => s !== slug) : [slug, ...cur];
    write(SAVED_KEY, next.slice(0, 50));
    return next.includes(slug);
  },
  saved: () => read(SAVED_KEY),
  trackBrowsed: (slug: string) => {
    const cur = read(BROWSED_KEY).filter((s) => s !== slug);
    write(BROWSED_KEY, [slug, ...cur].slice(0, 20));
  },
  browsed: () => read(BROWSED_KEY),
};
