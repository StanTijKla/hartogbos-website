import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { C, FH, FB, GREEN_RGB } from "../theme";
import { SITE, telHref } from "../config/site";
import { NAV_ITEMS } from "../data/routes";
import { Link } from "../router/Link";

const heading = { fontWeight: 700, color: C.white, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18, fontFamily: FH };
const line = { display: "flex", alignItems: "center", gap: 9, marginBottom: 11, fontSize: 13, color: "rgba(255,255,255,0.55)", fontFamily: FB };

export function Footer() {
  const { address } = SITE;
  const contact = [
    SITE.phone && { Icon: Phone, t: SITE.phone, href: telHref(SITE.phone) },
    { Icon: Mail, t: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: MapPin, t: `${address.street}, ${address.postalCode} ${address.city}` },
    { Icon: Clock, t: SITE.hours },
  ].filter(Boolean);
  const legal = [SITE.kvk && `KVK ${SITE.kvk}`, SITE.btw && `BTW ${SITE.btw}`].filter(Boolean).join(" · ");

  return (
    <footer style={{ background: C.navyDk, width: "100%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `rgba(${GREEN_RGB},0.04)` }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 32px 28px", position: "relative" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <img src="/logo.png" alt={SITE.shortName} width="190" height="46" style={{ height: 46, width: "auto", objectFit: "contain", marginBottom: 18 }} />
            <p style={{ fontSize: 13, lineHeight: 1.85, maxWidth: 290, color: "rgba(255,255,255,0.5)", fontFamily: FB }}>
              Specialist in duurzame installaties in regio Nijmegen. Voor aannemers en particulieren.
            </p>
          </div>
          <nav aria-label="Footermenu">
            <div style={heading}>Navigatie</div>
            {NAV_ITEMS.map((n) => (
              <Link key={n.id} to={n.id} className="footer-link" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontFamily: FB, fontSize: 13, padding: "5px 0" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <address style={{ fontStyle: "normal" }}>
            <div style={heading}>Contact</div>
            {contact.map(({ Icon, t, href }) => {
              const inner = <><Icon size={13} color={C.green} aria-hidden="true" /> {t}</>;
              return href
                ? <a key={t} href={href} className="footer-link" style={line}>{inner}</a>
                : <div key={t} style={line}>{inner}</div>;
            })}
          </address>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: FB }}>© {new Date().getFullYear()} {SITE.name} · {address.city}</span>
          {legal && <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: FB }}>{legal}</span>}
        </div>
      </div>
    </footer>
  );
}
