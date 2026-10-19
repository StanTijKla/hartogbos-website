import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { C, FH, FB } from "../theme";
import { SITE } from "../config/site";
import { submitNetlifyForm } from "../lib/netlifyForm";
import { Btn } from "./ui";

function Field({ id, label, required, rows, ...input }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={id} style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6, fontFamily: FH }}>
        {label}{required && <span style={{ color: C.green }}> *</span>}
      </label>
      {rows
        ? <textarea id={id} rows={rows} required={required} className="form-input" style={{ resize: "vertical" }} {...input} />
        : <input id={id} required={required} className="form-input" {...input} />}
    </div>
  );
}

// Gedeeld formulier voor Contact en Offerte (Netlify Forms).
// formName + messageField moeten overeenkomen met index.html.
export function ContactForm({ formName, messageField, messageLabel, messagePlaceholder, submitLabel, successText }) {
  const empty = { naam: "", telefoon: "", email: "", [messageField]: "", "bot-field": "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const bind = (key) => ({ name: key, value: form[key], onChange: (e) => setForm({ ...form, [key]: e.target.value }) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitNetlifyForm(formName, form);
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" style={{ textAlign: "center", padding: "48px 0" }}>
        <CheckCircle size={52} color={C.green} aria-hidden="true" style={{ margin: "0 auto" }} />
        <p style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginTop: 16, fontFamily: FH }}>{successText}</p>
      </div>
    );
  }

  return (
    <form name={formName} onSubmit={handleSubmit}>
      {/* Spamfilter: onzichtbaar veld dat alleen bots invullen */}
      <p hidden>
        <label>Niet invullen: <input {...bind("bot-field")} tabIndex={-1} autoComplete="off" /></label>
      </p>
      <Field id={`${formName}-naam`} label="Naam" required placeholder="Uw volledige naam" autoComplete="name" {...bind("naam")} />
      <Field id={`${formName}-telefoon`} label="Telefoonnummer" type="tel" required placeholder="Uw telefoonnummer" autoComplete="tel" {...bind("telefoon")} />
      <Field id={`${formName}-email`} label="E-mailadres" type="email" placeholder="Uw e-mailadres (optioneel)" autoComplete="email" {...bind("email")} />
      <Field id={`${formName}-${messageField}`} label={messageLabel} rows={5} placeholder={messagePlaceholder} {...bind(messageField)} />
      {status === "error" && (
        <p role="alert" style={{ color: "#B42318", fontSize: 13, marginBottom: 12, fontFamily: FB }}>
          Er ging iets mis bij het versturen. Probeer het opnieuw of mail naar {SITE.email}.
        </p>
      )}
      <Btn type="submit" variant="primary" full disabled={status === "sending"}>
        {status === "sending" ? "Bezig met verzenden…" : <>{submitLabel} <ArrowRight size={15} aria-hidden="true" /></>}
      </Btn>
    </form>
  );
}
