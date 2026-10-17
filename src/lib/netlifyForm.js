// Verstuurt een formulier naar Netlify Forms.
// Veldnamen moeten overeenkomen met de verborgen formulieren in index.html.
export async function submitNetlifyForm(formName, fields) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
  });
  if (!res.ok) throw new Error(`Formulier niet verzonden (status ${res.status})`);
}
