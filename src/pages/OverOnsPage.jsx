import { ArrowRight, MapPin } from "lucide-react";
import { C, FH, FB, GREEN_RGB } from "../theme";
import { SITE } from "../config/site";
import { Btn, PageHero, Section, SectionTitle, SLabel } from "../components/ui";
import { ValueCards } from "../components/ValueCards";
import { CTABanner } from "../components/CTABanner";
import { Photo } from "../components/Photo";
import { IMG } from "../data/images";
import { OVER_ONS_TEKST } from "../data/content";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`)}`;

export function OverOnsPage() {
  const { address } = SITE;
  return (
    <>
      <PageHero label="Wie wij zijn" title="Over ons" intro="Persoonlijk, professioneel en altijd in de buurt. Leer Hartog-Bos Installaties kennen." />
      <Section bg={C.bg}>
        <div className="grid-2" style={{ gap: 64, marginBottom: 72, alignItems: "center" }}>
          <div>
            <SLabel text="Wie wij zijn" />
            <h2 style={{ fontFamily: FH, fontSize: 30, fontWeight: 700, color: C.navy, marginBottom: 22, lineHeight: 1.2 }}>Uw lokale installateur in de regio Nijmegen</h2>
            {OVER_ONS_TEKST.map((t) => <p key={t} style={{ fontSize: 14, color: C.gray, lineHeight: 1.85, marginBottom: 16, fontFamily: FB }}>{t}</p>)}
            <div style={{ marginTop: 8 }}>
              <Btn to="contact" variant="primary">Neem contact op <ArrowRight size={14} aria-hidden="true" /></Btn>
            </div>
          </div>
          <div style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`, borderRadius: 16, minHeight: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, position: "relative", overflow: "hidden", padding: 32, textAlign: "center" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 70% 30%, rgba(${GREEN_RGB},0.15) 0%, transparent 60%)` }} />
            <img src="/logo.png" alt={SITE.shortName} width="247" height="60" style={{ height: 60, width: "auto", objectFit: "contain", position: "relative" }} />
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ position: "relative", color: C.white, fontFamily: FB, fontSize: 15, lineHeight: 1.6, textDecoration: "none" }}>
              <MapPin size={16} color={C.green} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: 6 }} />
              {address.street}<br />{address.postalCode} {address.city}
              <span style={{ display: "block", marginTop: 8, fontSize: 13, color: C.green, fontWeight: 700, fontFamily: FH }}>Route plannen →</span>
            </a>
          </div>
        </div>
        <SectionTitle label="Onze waarden" title="Waar wij voor staan" />
        <ValueCards />
      </Section>
      <Section bg={C.bgAlt}>
        <SectionTitle label="Ons team" title="Vakmensen die meedenken"
          intro="Ervaren installateurs, herkenbaar in Hartog-Bos werkkleding. Eén vast aanspreekpunt van advies tot oplevering." />
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(27,58,107,0.08)", maxWidth: 900, margin: "0 auto", aspectRatio: "16/9", background: C.bg }}>
          <Photo img={IMG.vakman} sizes="(max-width: 960px) 100vw, 900px" />
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
