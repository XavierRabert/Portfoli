export type ProjectKind = "arcana" | "seo" | "spacex";

export interface Project {
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  stack: string[];
  kind: ProjectKind;
  href: string;
  accent: string;
  accentSoft: string;
  tagText: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Arcana",
    eyebrow: "Producte personal · Desenvolupament pausat",
    description:
      "Una aplicació completa per gestionar col·leccions i maços Commander de Magic: The Gathering. Inclou inventari de cartes, wishlist, sincronització, anàlisi de maços i una interfície pròpia.",
    stack: ["Angular 21", "TypeScript", "Signals", "Tailwind CSS 4", "Supabase", "Scryfall"],
    kind: "arcana",
    href: "https://arcana.xavierrabert.com",
    accent: "#c6a15a",
    accentSoft: "rgba(198, 161, 90, .28)",
    tagText: "#e7dcc5",
  },
  {
    number: "02",
    name: "SEO amb Talons",
    eyebrow: "Web professional · Publicada",
    description:
      "Disseny i desenvolupament de la web de la consultoria SEO de Laia Xarau, amb Astro i una interfície responsive. Inclou un formulari de contacte connectat a una automatització de Make.",
    stack: ["Astro 6", "Tailwind CSS 4", "React 19", "Make"],
    kind: "seo",
    href: "https://www.seoambtalons.cat",
    accent: "#e8472a",
    accentSoft: "rgba(232, 71, 42, .28)",
    tagText: "#f1d9d2",
  },
  {
    number: "03",
    name: "SpaceX Mission Control",
    eyebrow: "Projecte personal · Aplicació publicada",
    description:
      "Un dashboard espacial desenvolupat amb Angular per explorar llançaments, coets i missions. Integració amb Launch Library 2, adaptació de dades externes, gestió d'errors i una capa de caché a Netlify per fer el servei més robust.",
    stack: ["Angular", "TypeScript", "API REST", "Netlify Functions", "CDN Cache"],
    kind: "spacex",
    href: "https://landing-space-x.netlify.app/",
    accent: "var(--color-cyan-400, oklch(78.9% .154 211.53))",
    accentSoft: "rgba(34, 211, 238, .28)",
    tagText: "#d8f1f5",
  },
];
