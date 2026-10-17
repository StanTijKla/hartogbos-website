// Foto die het vak vult; laadt pas als hij in beeld komt (behalve bij eager).
export function Photo({ img, sizes = "(max-width: 768px) 100vw, 33vw", eager, style }) {
  return (
    <img src={img.src} srcSet={img.srcSet} sizes={img.srcSet ? sizes : undefined} alt={img.alt}
      loading={eager ? "eager" : "lazy"} decoding="async"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }} />
  );
}
