import { C, FH, FB } from "../theme";
import { Link } from "../router/Link";
import { Photo } from "./Photo";
import { Tag } from "./ui";

const card = { display: "block", background: C.white, borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, color: "inherit" };
const SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

export function DienstCard({ d, to }) {
  const { Icon } = d;
  const inner = (
    <>
      <div style={{ height: 180, position: "relative", overflow: "hidden", background: C.bgAlt }}>
        <Photo img={d.img} sizes={SIZES} />
        {d.badge && <span style={{ position: "absolute", top: 12, left: 12, padding: "4px 10px", background: C.green, borderRadius: 20, fontSize: 11, color: C.white, fontWeight: 700, fontFamily: FH }}>{d.badge}</span>}
        <span aria-hidden="true" style={{ position: "absolute", right: 14, bottom: -20, width: 44, height: 44, borderRadius: "50%", background: C.white, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(27,58,107,0.15)" }}>
          <Icon size={20} color={C.navy} />
        </span>
      </div>
      <div style={{ padding: "20px 22px 22px" }}>
        <h3 style={{ fontFamily: FH, fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{d.title}</h3>
        <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, marginBottom: 12, fontFamily: FB }}>{d.desc}</p>
        <div>{d.tags.map((t) => <Tag key={t} label={t} />)}</div>
      </div>
    </>
  );
  return to
    ? <Link to={to} className="card card-hover" style={card}>{inner}</Link>
    : <article className="card" style={card}>{inner}</article>;
}

const CAT_COLORS = { Warmtepomp: C.green, Airco: C.navyMid, Renovatie: "#7B4EA6", Nieuwbouw: C.navyMid, CV: C.navy, Zonnepanelen: "#B7791F" };

export function WerkCard({ w }) {
  const col = CAT_COLORS[w.cat] || C.navy;
  return (
    <article className="card" style={card}>
      <div style={{ height: 200, overflow: "hidden", background: C.bgAlt }}><Photo img={w.img} sizes={SIZES} /></div>
      <div style={{ padding: "18px 20px 20px" }}>
        <span style={{ display: "inline-block", padding: "3px 10px", background: `${col}18`, borderRadius: 20, fontSize: 11, color: col, fontWeight: 700, marginBottom: 10, fontFamily: FH }}>{w.cat}</span>
        <h3 style={{ fontFamily: FH, fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
        <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.65, fontFamily: FB }}>{w.desc}</p>
      </div>
    </article>
  );
}
