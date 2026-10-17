import { C } from "../theme";
import { PageHero, Section, SectionTitle } from "../components/ui";
import { DienstCard } from "../components/Cards";
import { ValueCards } from "../components/ValueCards";
import { CTABanner } from "../components/CTABanner";
import { DIENSTEN } from "../data/diensten";

export function DienstenPage() {
  return (
    <>
      <PageHero label="Wat wij bieden" title="Onze diensten"
        intro="Van badkamers en warmtepompen tot zonnepanelen — complete duurzame installatiediensten in Nijmegen en omgeving." />
      <Section bg={C.bg}>
        <div className="grid-auto">
          {DIENSTEN.map((d) => <DienstCard key={d.title} d={d} />)}
        </div>
      </Section>
      <Section bg={C.white}>
        <SectionTitle label="Onze waarden" title="Waar wij voor staan" />
        <ValueCards cardBg={C.bg} />
      </Section>
      <CTABanner />
    </>
  );
}
