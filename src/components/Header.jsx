import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { C, FH } from "../theme";
import { SITE } from "../config/site";
import { NAV_ITEMS } from "../data/routes";
import { Link } from "../router/Link";
import { useRouter } from "../router/useRouter";
import { Btn } from "./ui";
import { PhoneLink } from "./PhoneLink";

export function Header() {
  const { page } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200, width: "100%", background: scrolled ? "rgba(13,31,60,0.97)" : C.navyDk, backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.07)", boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none", transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
        <Link to="home" aria-label={`${SITE.name} — naar de homepage`} onClick={close}>
          <img src="/logo.png" alt={SITE.name} width="206" height="50" style={{ height: 50, width: "auto", objectFit: "contain" }} />
        </Link>

        <nav className="desktop-nav" aria-label="Hoofdmenu">
          {NAV_ITEMS.map((n) => (
            <Link key={n.id} to={n.id} className="nav-link" aria-current={page === n.id ? "page" : undefined}
              style={{ borderBottom: page === n.id ? `2px solid ${C.green}` : "2px solid transparent", padding: "8px 14px", fontFamily: FH, fontSize: 13, fontWeight: 700, color: page === n.id ? C.white : "rgba(255,255,255,0.6)", letterSpacing: "0.03em" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-right">
          <PhoneLink style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: FH }} />
          <Btn to="offerte" variant="primary" small>Offerte aanvragen</Btn>
        </div>

        <button className="mobile-nav" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={mobileOpen}
          style={{ border: "none", background: "none", cursor: "pointer", color: C.white, padding: 8 }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobiel menu" style={{ background: C.navyDk, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 32px 24px" }}>
          {NAV_ITEMS.map((n) => (
            <Link key={n.id} to={n.id} onClick={close} aria-current={page === n.id ? "page" : undefined}
              style={{ display: "block", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "14px 0", fontFamily: FH, fontSize: 15, fontWeight: 700, color: page === n.id ? C.green : "rgba(255,255,255,0.75)" }}>
              {n.label}
            </Link>
          ))}
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            <PhoneLink iconSize={15} style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: FH }} />
            <Btn to="offerte" onClick={close} variant="primary" full>Offerte aanvragen</Btn>
          </div>
        </nav>
      )}
    </header>
  );
}
