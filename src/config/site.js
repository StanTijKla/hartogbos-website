// Eén centrale plek voor alle bedrijfsgegevens.
// Waarde op null = onderdeel wordt automatisch verborgen op de site.
export const SITE = {
  name: "Hartog-Bos Duurzame Installaties",
  shortName: "Hartog-Bos",
  url: "https://www.hartog-bosinstallaties.nl",
  email: "info@hartog-bosinstallaties.nl",
  phone: "06 37 16 70 60",
  kvk: null, // bewust leeg: wordt later toegevoegd
  btw: null, // bewust leeg: wordt later toegevoegd
  address: {
    street: "Bijsterhuizen Zuid 4019",
    postalCode: "6604 LW",
    city: "Wijchen",
  },
  region: "Nijmegen en omgeving",
  instagram: "https://www.instagram.com/hartog_bosinstallaties/",
  hours: "Ma - Vr: 08:00 - 17:00",
};

// 06 37 16 70 60 -> tel:+31637167060 (werkt ook vanuit het buitenland)
export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "").replace(/^0/, "+31")}`;
