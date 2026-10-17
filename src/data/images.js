// Alle foto's op één plek.
// Nu: rechtenvrije stockfoto's van Unsplash (unsplash.com/license — vrij te gebruiken, ook commercieel).
// Eigen foto vervangen? Zet het bestand in public/images/ en vervang de regel, bijvoorbeeld:
//   badkamer: local("badkamer.jpg", "Badkamer door Hartog-Bos in Wijchen"),

const unsplash = (id, alt) => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`,
  srcSet: [480, 800, 1200, 1600].map((w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70 ${w}w`).join(", "),
  alt,
});

// eslint-disable-next-line no-unused-vars
const local = (file, alt) => ({ src: `/images/${file}`, srcSet: undefined, alt });

export const IMG = {
  // Diensten
  badkamer: unsplash("1584622650111-993a426fbf0a", "Moderne badkamer met inloopdouche en wastafelmeubel"),
  warmtepomp: unsplash("1776860150305-108ed577d7d4", "Buitenunit van een warmtepomp naast een bakstenen woning"),
  airco: unsplash("1759772238012-9d5ad59ae637", "Wandmodel airco-binnenunit"),
  nieuwbouw: unsplash("1587582423116-ec07293f0395", "Bouwvakker op het houtskelet van een nieuwbouwwoning"),
  renovatie: unsplash("1517581177682-a085bb7ffb15", "Vakman op een trap tijdens een verbouwing"),
  cv: unsplash("1618840626133-54463084a141", "Leidingwerk en verdelers in een technische ruimte"),
  ventilatie: unsplash("1574334292321-4844f63aefef", "Ventilatiekanalen van een mechanisch ventilatiesysteem"),
  zonnepanelen: unsplash("1660330589257-813305a4a383", "Installateur monteert zonnepanelen op een dak"),

  // Algemeen
  heroInstallateur: unsplash("1749532125405-70950966b0e5", "Installateur aan het werk in een badkamer"),
  heroZonnepanelen: unsplash("1624397640148-949b1732bb0a", "Zonnepaneel wordt op een dak geplaatst"),
  bus: unsplash("1641199788912-9a7385a35c82", "Witte bedrijfsbus geparkeerd langs de weg"),
  vakman: unsplash("1676210134188-4c05dd172f89", "Installateur werkt aan leidingwerk"),

  // Ons werk
  werkWarmtepomp: unsplash("1776860155275-eee24bfb1dee", "Woning met warmtepomp-buitenunit"),
  werkAirco: unsplash("1762341123870-d706f257a12e", "Airco-binnenunit met temperatuurdisplay"),
  werkNieuwbouw: unsplash("1774869174949-9fd84ba6cc0c", "Nieuwbouwwoningen in aanbouw"),
  werkLeidingwerk: unsplash("1768321913920-d3ac011e0683", "Leidingwerk in een wand tijdens de bouw"),
  werkThermostaat: unsplash("1619140099965-06d74aaf51fa", "Slimme thermostaat aan de wand"),
  werkZonnepanelen: unsplash("1655300256335-beef51a914fe", "Woning met zonnepanelen op het dak"),
};
