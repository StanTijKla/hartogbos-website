import { CheckCircle } from "lucide-react";
import { C, FH, FB } from "../theme";
import { SITE } from "../config/site";
import { PageHero, Section } from "../components/ui";
import { PhoneLink } from "../components/PhoneLink";
import { ContactForm } from "../components/ContactForm";
import { FormPanel } from "../components/FormPanel";

const VOORDELEN = ["Binnen 24-48 uur reactie", "Vrijblijvend en zonder verplichtingen", "Persoonlijk advies op maat", "Vaste prijsafspraken mogelijk"];

export function OffertePage() {
  return (
    <>
      <PageHero label="Offerte aanvragen" title="Vraag een offerte aan" intro="Vrijblijvend en zonder verplichtingen. Wij nemen binnen 24-48 uur contact met u op." />
      <Section bg={C.bg}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56 }}>
          <div>
            <h2 style={{ fontFamily: FH, fontSize: 24, fontWeight: 700, color: C.navy, marginBottom: 16 }}>Vrijblijvende offerte</h2>
            <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.85, marginBottom: 30, fontFamily: FB }}>Wij nemen contact met u op om uw wensen te bespreken en een passende offerte op te stellen.</p>
            {VOORDELEN.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <CheckCircle size={20} color={C.green} aria-hidden="true" />
                <span style={{ fontSize: 14, fontWeight: 700, color: C.navy, fontFamily: FH }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 24, padding: 20, background: C.white, borderRadius: 12, border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.gray, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, fontFamily: FH }}>
                {SITE.phone ? "Liever bellen?" : "Liever mailen?"}
              </div>
              {SITE.phone
                ? <PhoneLink iconSize={18} style={{ fontSize: 16, fontWeight: 700, color: C.navy, fontFamily: FH }} />
                : <a href={`mailto:${SITE.email}`} style={{ fontSize: 16, fontWeight: 700, color: C.navy, fontFamily: FH }}>{SITE.email}</a>}
            </div>
          </div>
          <FormPanel title="Uw gegevens">
            <ContactForm formName="offerte" messageField="omschrijving" messageLabel="Omschrijving"
              messagePlaceholder="Waarvoor wilt u een offerte ontvangen?" submitLabel="Offerte aanvragen"
              successText="Bedankt! Wij nemen binnen 24-48 uur contact met u op." />
          </FormPanel>
        </div>
      </Section>
    </>
  );
}
