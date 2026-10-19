import { C, FH, FB } from "../theme";
import { Link } from "../router/Link";

export function Tag({ label }) {
  return (
    <span style={{ display: "inline-block", padding: "3px 10px", background: `${C.navyMid}18`, borderRadius: 20, fontSize: 12, color: C.navyMid, fontWeight: 600, marginRight: 5, marginBottom: 5, fontFamily: FB }}>
      {label}
    </span>
  );
}

const BTN_VARIANTS = {
  primary: { background: C.green, color: C.white, border: "none" },
  navy: { background: C.navy, color: C.white, border: "none" },
  outline: { background: "transparent", color: C.navy, border: `2px solid ${C.navy}` },
  outlineW: { background: "transparent", color: C.white, border: "2px solid rgba(255,255,255,0.55)" },
  outlineGreen: { background: "transparent", color: C.green, border: `2px solid ${C.green}` },
};

// Knop die automatisch een interne link (to), externe link (href) of gewone knop wordt.
export function Btn({ children, to, href, onClick, type = "button", variant = "primary", full, small, disabled }) {
  const style = {
    ...BTN_VARIANTS[variant],
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: small ? "9px 18px" : "12px 26px", borderRadius: 7,
    fontFamily: FH, fontWeight: 700, fontSize: small ? 13 : 14,
    cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.6 : undefined,
    letterSpacing: "0.02em", textDecoration: "none",
    width: full ? "100%" : undefined, justifyContent: full ? "center" : undefined,
  };
  if (to) return <Link to={to} onClick={onClick} className="btn" style={style}>{children}</Link>;
  if (href) return <a href={href} className="btn" style={style}>{children}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} className="btn" style={style}>{children}</button>;
}

export function SLabel({ text, light }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div style={{ width: 24, height: 2, background: C.green }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: light ? "rgba(255,255,255,0.7)" : C.green, fontFamily: FH }}>{text}</span>
      <div style={{ width: 24, height: 2, background: C.green }} />
    </div>
  );
}

export function Section({ bg, children, style }) {
  return (
    <section style={{ background: bg || C.bg, width: "100%", ...style }}>
      <div className="section-pad" style={{ maxWidth: 1400, margin: "0 auto", padding: "72px 32px" }}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ label, title, intro, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
      <SLabel text={label} />
      <h2 style={{ fontFamily: FH, fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: C.navy, lineHeight: 1.2 }}>{title}</h2>
      {intro && <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.75, fontFamily: FB, maxWidth: 600, margin: "12px auto 0" }}>{intro}</p>}
    </div>
  );
}

// Donkere kopbalk bovenaan elke subpagina
export function PageHero({ label, title, intro }) {
  return (
    <section className="page-hero" style={{ background: `linear-gradient(160deg, ${C.navyDk} 0%, ${C.navy} 60%, ${C.navyMid} 100%)`, padding: "80px 32px 64px", width: "100%" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <SLabel text={label} light />
        <h1 style={{ fontFamily: FH, fontSize: "clamp(28px,5vw,50px)", fontWeight: 700, color: C.white, margin: "12px 0 16px", lineHeight: 1.12 }}>{title}</h1>
        {intro && <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontFamily: FB }}>{intro}</p>}
      </div>
    </section>
  );
}

export function IconBox({ Icon, size = 40, iconSize = 18, center }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size / 4.5, background: `${C.green}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, margin: center ? "0 auto 16px" : undefined }}>
      <Icon size={iconSize} color={C.green} aria-hidden="true" />
    </div>
  );
}
