import { C } from "../theme";
import { Btn, PageHero, Section } from "../components/ui";

export function NotFoundPage() {
  return (
    <>
      <PageHero label="404" title="Pagina niet gevonden" intro="Deze pagina bestaat niet (meer). Ga terug naar de homepage of neem contact met ons op." />
      <Section bg={C.bg}>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn to="home" variant="primary">Naar de homepage</Btn>
          <Btn to="contact" variant="outline">Contact</Btn>
        </div>
      </Section>
    </>
  );
}
