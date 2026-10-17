import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { C, FH, FB, GREEN_RGB, BLUE_RGB } from "../theme";
import { Btn, IconBox, SLabel, Section, SectionTitle } from "../components/ui";
import { PhoneButton } from "../components/PhoneLink";
import { DienstCard, WerkCard } from "../components/Cards";
import { Photo } from "../components/Photo";
import { InstagramLink } from "../components/InstagramLink";
import { CTABanner } from "../components/CTABanner";
import { IMG } from "../data/images";
import { DIENSTEN } from "../data/diensten";
import { WERK } from "../data/werk";
import { STATS, USP_ITEMS, WERKWIJZE } from "../data/content";

const HERO_TILES = [IMG.heroInstallateur, IMG.warmtepomp, IMG.badkamer, IMG.heroZonnepanelen];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pad" style={{ background: `linear-gradient(150deg, ${C.navyDk} 0%, ${C.navy} 55%, #1e4d8c 100%)`, padding: "96px 32px 80px", width: "100%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 50%, rgba(${GREEN_RGB},0.08) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgba(${BLUE_RGB},0.12) 0%, transparent 50%)` }} />
        <div className="grid-2" style={{ maxWidth: 1400, margin: "0 auto", position: "relative", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, background: `rgba(${GREEN_RGB},0.15)`, border: `1px solid rgba(${GREEN_RGB},0.3)`, marginBottom: 24 }}>
              <MapPin size={12} color={C.green} aria-hidden="true" />
              <span style={{ fontSize: 11, color: C.green, fontWeight: 700, letterSpacing: "0.07em", fontFamily: FH }}>Regio Nijmegen · Gecertificeerde installateurs</span>
            </div>
            <h1 className="hero-title" style={{ fontFamily: FH, fontSize: "clamp(34px,5vw,62px)", fontWeight: 700, color: C.white, lineHeight: 1.08, marginBottom: 22 }}>
              Specialist in<br /><span style={{ color: C.green }}>duurzame</span><br />installaties
            </h1>
            <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.85, marginBottom: 38, fontFamily: FB, maxWidth: 480 }}>
              Voor aannemers en particulieren. Warmtepompen, badkamers, airco's, zonnepanelen en meer — altijd met persoonlijk advies en vakmanschap.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn to="offerte" variant="primary">Offerte aanvragen <ArrowRight size={16} aria-hidden="true" /></Btn>
              <PhoneButton label="Bel direct" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {HERO_TILES.map((img, i) => (
              <div key={img.src} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "16/10", background: C.navy }}>
                <Photo img={img} eager={i < 2} sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kerncijfers */}
      <section style={{ background: C.navy, width: "100%" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${STATS.length},1fr)` }}>
            {STATS.map((s, i) => (
              <div key={s.l} className="stat" style={{ textAlign: "center", padding: "22px 8px", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontFamily: FH, fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, color: C.green, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4, fontFamily: FB }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bus */}
      <section style={{ background: C.white, width: "100%", padding: "64px 0", overflow: "hidden" }}>
        <div className="grid-2" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px", alignItems: "center" }}>
          <div>
            <SLabel text="Herkenbaar in de regio" />
            <h2 style={{ fontFamily: FH, fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: C.navy, marginBottom: 16, lineHeight: 1.2 }}>
              Altijd herkenbaar onderweg in de regio
            </h2>
            <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.85, marginBottom: 24, fontFamily: FB }}>
              Onze volledig uitgeruste bestelwagens zijn dagelijks te zien in Nijmegen en omgeving. Altijd netjes, altijd op tijd — dat is de Hartog-Bos belofte.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Warmtepompen", "Airco", "Sanitair", "CV-installaties"].map((t) => (
                <span key={t} style={{ padding: "6px 14px", background: C.bg, borderRadius: 20, fontSize: 13, color: C.navy, fontWeight: 600, fontFamily: FH, border: `1px solid ${C.border}` }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(27,58,107,0.10)", aspectRatio: "16/10", background: C.bgAlt }}>
            <Photo img={IMG.bus} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Diensten */}
      <Section bg={C.bg}>
        <SectionTitle label="Wat wij voor u doen" title="Onze diensten" />
        <div className="grid-auto">
          {DIENSTEN.slice(0, 4).map((d) => <DienstCard key={d.title} d={d} to="diensten" />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Btn to="diensten" variant="outline">Alle diensten bekijken <ChevronRight size={15} aria-hidden="true" /></Btn>
        </div>
      </Section>

      {/* Waarom Hartog-Bos */}
      <Section bg={C.white}>
        <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
          <div>
            <SLabel text="Waarom Hartog-Bos" />
            <h2 style={{ fontFamily: FH, fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: C.navy, marginBottom: 24, lineHeight: 1.2 }}>Vakmanschap dat u kunt vertrouwen</h2>
            <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.85, marginBottom: 32, fontFamily: FB }}>
              Als lokale installateur in de regio Nijmegen staan wij voor kwaliteit, betrouwbaarheid en persoonlijk contact. Of u nu een particulier bent die zijn woning wil verduurzamen of een aannemer die een vaste partner zoekt — wij denken met u mee.
            </p>
            {USP_ITEMS.map(({ Icon, t, s }) => (
              <div key={t} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                <IconBox Icon={Icon} />
                <div>
                  <div style={{ fontFamily: FH, fontSize: 14, fontWeight: 700, color: C.navy }}>{t}</div>
                  <div style={{ fontSize: 13, color: C.gray, fontFamily: FB, marginTop: 2 }}>{s}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <Btn to="over-ons" variant="outline">Meer over ons <ChevronRight size={14} aria-hidden="true" /></Btn>
            </div>
          </div>
          <div className="grid-2-fixed">
            {WERKWIJZE.map((w) => (
              <div key={w.n} style={{ background: C.bg, borderRadius: 12, padding: 22, border: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: FH, fontSize: 42, fontWeight: 700, color: `${C.green}25`, lineHeight: 1, marginBottom: 10 }}>{w.n}</div>
                <div style={{ fontFamily: FH, fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{w.t}</div>
                <div style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, fontFamily: FB }}>{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projecten */}
      <Section bg={C.bgAlt}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <SLabel text="Ons werk" />
            <h2 style={{ fontFamily: FH, fontSize: "clamp(24px,3vw,34px)", fontWeight: 700, color: C.navy }}>Waar wij aan werken</h2>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <InstagramLink />
            <Btn to="projecten" variant="outline">Meer van ons werk <ChevronRight size={15} aria-hidden="true" /></Btn>
          </div>
        </div>
        <div className="grid-auto-lg">
          {WERK.slice(0, 3).map((w) => <WerkCard key={w.title} w={w} />)}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
