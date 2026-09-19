import type {
  PortfolioCategory,
  PortfolioCollection,
} from "@/data/portfolio";

export type PortfolioSelection = {
  category: PortfolioCategory;
  collection: PortfolioCollection;
};

export type PortfolioHighlight = {
  id: string;
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  objectPosition: string;
  selection: PortfolioSelection;
};

export type FeaturedCollection = {
  id: string;
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  objectPosition: string;
  layout:
    | "leftTall"
    | "rightWide"
    | "leftWide"
    | "rightTall";
  selection: PortfolioSelection;
};

export const portfolioHighlights: PortfolioHighlight[] = [
  {
    id: "autoral",
    number: "01",
    title: "Ensaio autoral",
    description:
      "Presença, gesto e instante em imagens que partem de quem você é.",
    src: "/images/ensaios/autoral/autoralcapa.jpg",
    alt: "Ensaio fotográfico autoral por Larissa Photographer",
    objectPosition: "center 38%",
    selection: {
      category: "ensaios",
      collection: "autoral",
    },
  },

  {
    id: "casamento",
    number: "02",
    title: "Casamento",
    description:
      "Encontros, detalhes e celebrações registrados sem interromper o que está acontecendo.",
    src: "/images/religiosos/casamento/casamento4.jpg",
    alt: "Fotografia de casamento por Larissa Photographer",
    objectPosition: "center center",
    selection: {
      category: "religiosos",
      collection: "casamento",
    },
  },

  {
    id: "profissional",
    number: "03",
    title: "Profissional",
    description:
      "Retratos que traduzem presença, identidade e intenção.",
    src: "/images/profissional/profissional7.jpg",
    alt: "Retrato profissional por Larissa Photographer",
    objectPosition: "center 38%",
    selection: {
      category: "profissional",
      collection: "profissional",
    },
  },

  {
    id: "batizado",
    number: "04",
    title: "Batizado",
    description:
      "Afeto, rito e memória em uma celebração feita de pequenos gestos.",
    src: "/images/religiosos/batizado/batizadocapa.jpg",
    alt: "Fotografia de batizado por Larissa Photographer",
    objectPosition: "center 42%",
    selection: {
      category: "religiosos",
      collection: "batizado",
    },
  },

  {
    id: "eucaristia",
    number: "05",
    title: "Eucaristia",
    description:
      "Um dia de fé e encontro guardado de forma sensível e natural.",
    src: "/images/religiosos/eucaristia/eucaristiacapa.jpg",
    alt: "Fotografia de primeira eucaristia por Larissa Photographer",
    objectPosition: "center 40%",
    selection: {
      category: "religiosos",
      collection: "eucaristia",
    },
  },
];

export const featuredCollections: FeaturedCollection[] = [
  {
    id: "featured-autoral",
    number: "01",
    title: "Autoral",
    description:
      "Retratos que começam na pessoa, não na pose.",
    src: "/images/ensaios/autoral/autoral1.jpg",
    alt: "Ensaio fotográfico autoral",
    objectPosition: "center 42%",
    layout: "leftTall",
    selection: {
      category: "ensaios",
      collection: "autoral",
    },
  },

  {
    id: "featured-casamento",
    number: "02",
    title: "Casamento",
    description:
      "O que acontece entre os grandes momentos também importa.",
    src: "/images/religiosos/casamento/casamento10.jpg",
    alt: "Fotografia de casamento",
    objectPosition: "center 44%",
    layout: "rightWide",
    selection: {
      category: "religiosos",
      collection: "casamento",
    },
  },

  {
    id: "featured-profissional",
    number: "03",
    title: "Profissional",
    description:
      "Imagem, posicionamento e personalidade em equilíbrio.",
    src: "/images/profissional/profissional9.jpg",
    alt: "Retrato profissional",
    objectPosition: "center 40%",
    layout: "leftWide",
    selection: {
      category: "profissional",
      collection: "profissional",
    },
  },

  {
    id: "featured-batizado",
    number: "04",
    title: "Batizado",
    description:
      "Celebrações íntimas guardadas sem perder sua espontaneidade.",
    src: "/images/religiosos/batizado/batizado1.jpg",
    alt: "Fotografia de batizado",
    objectPosition: "center 40%",
    layout: "rightTall",
    selection: {
      category: "religiosos",
      collection: "batizado",
    },
  },
];