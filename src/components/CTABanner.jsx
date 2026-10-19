import { ArrowRight } from "lucide-react";
import { C, FH, FB, GREEN_RGB, BLUE_RGB } from "../theme";
import { Btn, SLabel } from "./ui";
import { PhoneButton } from "./PhoneLink";

export function CTABanner() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.navyDk} 0%, ${C.navy} 100%)`, padding: "80px 24px", textAlign: "center", width: "100%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, rgba(${GREEN_RGB},0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(${BLUE_RGB},0.08) 0%, transparent 60%)` }} />
      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
        <SLabel text="Klaar om te starten?" light />
        <h2 style={{ fontFamily: FH, fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: C.white, margin: "12px 0", lineHeight: 1.2 }}>
          Op zoek naar een betrouwbare installateur in de regio Nijmegen?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginBottom: 36, fontFamily: FB, lineHeight: 1.75 }}>
          Neem vrijblijvend contact op voor persoonlijk advies of een offerte op maat.
        </p>
        <div className="hero-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn to="offerte" variant="primary">Offerte aanvragen <ArrowRight size={16} aria-hidden="true" /></Btn>
          <PhoneButton />
          <Btn to="contact" variant="outlineW">Contact opnemen</Btn>
        </div>
      </div>
    </section>
  );
}
