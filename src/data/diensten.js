import { IMG } from "./images";
import { Bath, Thermometer, Snowflake, Building2, Hammer, Flame, Wind, Sun } from "lucide-react";

export const DIENSTEN = [
  { Icon: Bath, img: IMG.badkamer, title: "Badkamers", badge: "Meest gevraagd",
    desc: "Complete badkamers van A tot Z — van ontwerp en sanitairinstallatie tot tegelwerk en oplevering. Luxe renovatie of nieuwbouwbadkamer, wij leveren vakmanschap.",
    tags: ["Badkamerrenovatie", "Sanitairinstallatie", "Nijmegen"] },
  { Icon: Thermometer, img: IMG.warmtepomp, title: "Warmtepompen",
    desc: "Duurzame manier om uw woning te verwarmen en koelen. Wij installeren lucht-water en lucht-lucht warmtepompen van topmerken, van advies tot onderhoud.",
    tags: ["Warmtepomp", "Duurzaam verwarmen", "Energiebesparing"] },
  { Icon: Snowflake, img: IMG.airco, title: "Airco installatie",
    desc: "Aangenaam binnenklimaat het hele jaar door. Wij adviseren over het juiste systeem voor uw ruimte en verzorgen een snelle, nette installatie.",
    tags: ["Airco", "Koeling", "Split-unit"] },
  { Icon: Building2, img: IMG.nieuwbouw, title: "Nieuw- en verbouw",
    desc: "Vaste installatiepartner voor aannemers. Complete installaties bij nieuwbouw en verbouwprojecten — sanitair, verwarming en ventilatie.",
    tags: ["Nieuwbouw", "Verbouw", "Aannemer"] },
  { Icon: Hammer, img: IMG.renovatie, title: "Renovatie",
    desc: "Installaties die naadloos aansluiten op uw verbouwde situatie. Van leidingwerk tot nieuwe systemen — wij denken mee en werken efficiënt.",
    tags: ["Renovatie", "Verbouwing", "Installaties"] },
  { Icon: Flame, img: IMG.cv, title: "CV-installaties",
    desc: "Van CV-ketel vervanging tot complete nieuwe verwarmingssystemen. Betrouwbare merken, energiezuinige oplossingen en professioneel onderhoud.",
    tags: ["CV-ketel", "Verwarming", "Onderhoud"] },
  { Icon: Wind, img: IMG.ventilatie, title: "Ventilatie",
    desc: "Optimale luchtkwaliteit voor een gezond binnenklimaat. Mechanische ventilatie en WTW-systemen voor woningen en bedrijfspanden.",
    tags: ["Ventilatie", "WTW", "Luchtkwaliteit"] },
  { Icon: Sun, img: IMG.zonnepanelen, title: "Zonnepanelen",
    desc: "Optimaal gebruik van de zon. Van advies over het juiste systeem tot professionele montage en volledige aansluiting op uw installatie.",
    tags: ["Zonnepanelen", "Duurzaam", "Energie"] },
];
