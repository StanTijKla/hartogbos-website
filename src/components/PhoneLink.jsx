import { Phone } from "lucide-react";
import { SITE, telHref } from "../config/site";
import { C } from "../theme";
import { Btn } from "./ui";

// Telefoonlink; verschijnt alleen als er een telefoonnummer in config/site.js staat.
export function PhoneLink({ style, iconSize = 14 }) {
  if (!SITE.phone) return null;
  return (
    <a href={telHref(SITE.phone)} style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none", ...style }}>
      <Phone size={iconSize} color={C.green} aria-hidden="true" /> {SITE.phone}
    </a>
  );
}

export function PhoneButton({ label }) {
  if (!SITE.phone) return null;
  return (
    <Btn href={telHref(SITE.phone)} variant="outlineW">
      <Phone size={14} aria-hidden="true" /> {label || SITE.phone}
    </Btn>
  );
}
