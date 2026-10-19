import { C, FH } from "../theme";
import { PageHero, Section } from "../components/ui";
import { ContactDetails } from "../components/ContactDetails";
import { ContactForm } from "../components/ContactForm";
import { FormPanel } from "../components/FormPanel";

export function ContactPage() {
  return (
    <>
      <PageHero label="Neem contact op" title="Contact" intro="Heeft u een vraag of wilt u een afspraak maken? Wij horen graag van u." />
      <Section bg={C.bg}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56 }}>
          <div>
            <h2 style={{ fontFamily: FH, fontSize: 24, fontWeight: 700, color: C.navy, marginBottom: 32 }}>Contactgegevens</h2>
            <ContactDetails />
          </div>
          <FormPanel title="Stuur ons een bericht">
            <ContactForm formName="contact" messageField="bericht" messageLabel="Bericht"
              messagePlaceholder="Hoe kunnen wij u helpen?" submitLabel="Verstuur bericht"
              successText="Bedankt! Wij nemen snel contact met u op." />
          </FormPanel>
        </div>
      </Section>
    </>
  );
}
