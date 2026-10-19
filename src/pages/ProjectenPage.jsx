import { C, FH, FB } from "../theme";
import { PageHero, Section } from "../components/ui";
import { WerkCard } from "../components/Cards";
import { InstagramLink } from "../components/InstagramLink";
import { CTABanner } from "../components/CTABanner";
import { WERK } from "../data/werk";

export function ProjectenPage() {
  return (
    <>
      <PageHero label="Ons werk" title="Waar wij aan werken" intro="Een indruk van de installaties die wij uitvoeren voor particulieren en aannemers in Nijmegen en omgeving." />
      <Section bg={C.bg}>
        <div className="grid-auto-lg">
          {WERK.map((w) => <WerkCard key={w.title} w={w} />)}
        </div>
        <div style={{ marginTop: 40, padding: "24px 28px", background: C.white, borderRadius: 14, border: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: FH, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Benieuwd naar ons recente werk?</div>
            <div style={{ fontFamily: FB, fontSize: 14, color: C.gray }}>Op Instagram delen wij foto's van onze lopende en afgeronde klussen.</div>
          </div>
          <InstagramLink />
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
