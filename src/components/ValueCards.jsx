import { C, FH, FB } from "../theme";
import { WAARDEN } from "../data/content";
import { IconBox } from "./ui";

export function ValueCards({ cardBg = C.white }) {
  return (
    <div className="grid-3">
      {WAARDEN.map(({ Icon, t, d }) => (
        <div key={t} style={{ background: cardBg, borderRadius: 14, padding: 28, border: `1px solid ${C.border}`, textAlign: "center" }}>
          <IconBox Icon={Icon} size={52} iconSize={24} center />
          <h3 style={{ fontFamily: FH, fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 10 }}>{t}</h3>
          <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.75, fontFamily: FB }}>{d}</p>
        </div>
      ))}
    </div>
  );
}
