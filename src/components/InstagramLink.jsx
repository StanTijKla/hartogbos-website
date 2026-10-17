import { C, FH } from "../theme";
import { SITE } from "../config/site";

export function InstagramLink({ light }) {
  if (!SITE.instagram) return null;
  return (
    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: FH, fontWeight: 700, fontSize: 14, color: light ? C.white : C.navy }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill={C.green} />
      </svg>
      Volg ons werk op Instagram
    </a>
  );
}
