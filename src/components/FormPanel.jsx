import { C, FH } from "../theme";

export function FormPanel({ title, children }) {
  return (
    <div style={{ background: C.white, borderRadius: 16, padding: 36, border: `1px solid ${C.border}`, boxShadow: "0 4px 24px rgba(27,58,107,0.07)" }} className="form-panel">
      <h2 style={{ fontFamily: FH, fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 26 }}>{title}</h2>
      {children}
    </div>
  );
}
