// Alle pagina's met URL, menulabel en paginatitel (voor Google en het browsertabblad)
export const ROUTES = [
  { id: "home", path: "/", label: "Home", inNav: true,
    title: "Hartog-Bos Duurzame Installaties | Installateur regio Nijmegen" },
  { id: "diensten", path: "/diensten", label: "Diensten", inNav: true,
    title: "Diensten | Hartog-Bos Duurzame Installaties" },
  { id: "over-ons", path: "/over-ons", label: "Over ons", inNav: true,
    title: "Over ons | Hartog-Bos Duurzame Installaties" },
  { id: "projecten", path: "/projecten", label: "Ons werk", inNav: true,
    title: "Ons werk | Hartog-Bos Duurzame Installaties" },
  { id: "contact", path: "/contact", label: "Contact", inNav: true,
    title: "Contact | Hartog-Bos Duurzame Installaties" },
  { id: "offerte", path: "/offerte", label: "Offerte aanvragen", inNav: false,
    title: "Offerte aanvragen | Hartog-Bos Duurzame Installaties" },
];

export const NOT_FOUND = { id: "niet-gevonden", path: null, title: "Pagina niet gevonden | Hartog-Bos" };

export const NAV_ITEMS = ROUTES.filter((r) => r.inNav);

export const routeById = (id) => ROUTES.find((r) => r.id === id);

export const routeByPath = (path) => {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return ROUTES.find((r) => r.path === clean) || NOT_FOUND;
};
