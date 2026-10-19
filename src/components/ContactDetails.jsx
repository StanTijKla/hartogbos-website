import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { C, FH } from "../theme";
import { SITE, telHref } from "../config/site";
import { IconBox } from "./ui";

export function ContactDetails() {
  const items = [
    SITE.phone && { Icon: Phone, l: "Telefoon", v: SITE.phone, href: telHref(SITE.phone) },
    { Icon: Mail, l: "E-mail", v: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: MapPin, l: "Adres", v: `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}` },
    { Icon: MapPin, l: "Werkgebied", v: SITE.region },
    { Icon: Clock, l: "Bereikbaar", v: SITE.hours },
  ].filter(Boolean);

  return items.map(({ Icon, l, v, href }) => (
    <div key={l} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      <IconBox Icon={Icon} size={46} iconSize={20} />
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.gray, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4, fontFamily: FH }}>{l}</div>
        {href
          ? <a href={href} style={{ fontSize: 15, fontWeight: 700, color: C.navy, fontFamily: FH }}>{v}</a>
          : <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, fontFamily: FH }}>{v}</div>}
      </div>
    </div>
  ));
}
