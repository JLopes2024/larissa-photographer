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

/*
  ============================================================
  DESTAQUES PRINCIPAIS DO PORTFÓLIO
  ============================================================

  Todos os caminhos abaixo foram alinhados à nova pasta
  de imagens.

  Sempre que trocar uma fotografia aqui, confira se o arquivo
  realmente existe dentro de public/images/.
*/

export const portfolioHighlights: PortfolioHighlight[] = [
  /* ----------------------------------------------------------
     01 — ENSAIO AUTORAL

     Arquivo:
     public/images/ensaios/autoral/autoralcapa.jpg
  ---------------------------------------------------------- */

  {
    id: "autoral",
    number: "01",
    title: "Ensaio autoral",
    description:
      "Presença, gesto e instante em imagens que partem de quem você é.",
    src: "/images/ensaios/autoral/autoralcapa.jpg",
    alt: "Ensaio fotográfico autoral por Larissa Photographer",
    objectPosition: "center 42%",
    selection: {
      category: "ensaios",
      collection: "autoral",
    },
  },

  /* ----------------------------------------------------------
     02 — CASAMENTO

     Arquivo:
     public/images/religiosos/casamento/casamentocapa.jpg
  ---------------------------------------------------------- */

  {
    id: "casamento",
    number: "02",
    title: "Casamento",
    description:
      "Encontros, detalhes e celebrações registrados sem interromper o que está acontecendo.",
    src: "/images/religiosos/casamento/casamentocapa.jpg",
    alt: "Fotografia de casamento por Larissa Photographer",
    objectPosition: "center center",
    selection: {
      category: "religiosos",
      collection: "casamento",
    },
  },

  /* ----------------------------------------------------------
     03 — PROFISSIONAL

     Arquivo:
     public/images/profissional/profissional4.jpg
  ---------------------------------------------------------- */

  {
    id: "profissional",
    number: "03",
    title: "Profissional",
    description:
      "Retratos que traduzem presença, identidade e intenção.",
    src: "/images/profissional/profissional4.jpg",
    alt: "Retrato profissional por Larissa Photographer",
    objectPosition: "center 34%",
    selection: {
      category: "profissional",
      collection: "profissional",
    },
  },

  /* ----------------------------------------------------------
     04 — BATIZADO

     Arquivo:
     public/images/religiosos/batizado/batizadocapa.jpg
  ---------------------------------------------------------- */

  {
    id: "batizado",
    number: "04",
    title: "Batizado",
    description:
      "Afeto, rito e memória em uma celebração feita de pequenos gestos.",
    src: "/images/religiosos/batizado/batizadocapa.jpg",
    alt: "Fotografia de batizado por Larissa Photographer",
    objectPosition: "center center",
    selection: {
      category: "religiosos",
      collection: "batizado",
    },
  },

  /* ----------------------------------------------------------
     05 — EUCARISTIA

     Arquivo:
     public/images/religiosos/eucaristia/eucaristiacapa.jpg
  ---------------------------------------------------------- */

  {
    id: "eucaristia",
    number: "05",
    title: "Eucaristia",
    description:
      "Um dia de fé e encontro guardado de forma sensível e natural.",
    src: "/images/religiosos/eucaristia/eucaristiacapa.jpg",
    alt: "Fotografia de primeira eucaristia por Larissa Photographer",
    objectPosition: "center 42%",
    selection: {
      category: "religiosos",
      collection: "eucaristia",
    },
  },

  /* ----------------------------------------------------------
     06 — PRÉ-WEDDING

     Arquivo:
     public/images/religiosos/pw/pw5.jpg
  ---------------------------------------------------------- */

  {
    id: "pw",
    number: "06",
    title: "Pré-Wedding",
    description:
      "Um ensaio para guardar a conexão e a expectativa antes do grande dia.",
    src: "/images/religiosos/pw/pw5.jpg",
    alt: "Ensaio fotográfico pré-wedding por Larissa Photographer",
    objectPosition: "center 40%",
    selection: {
      category: "religiosos",
      collection: "pw",
    },
  },
];

/*
  ============================================================
  TRABALHOS EM DESTAQUE
  ============================================================

  Aqui a composição usa quatro formatos diferentes.

  leftTall  → vertical à esquerda
  rightWide → horizontal à direita
  leftWide  → horizontal à esquerda
  rightTall → vertical à direita
*/

export const featuredCollections: FeaturedCollection[] = [
  /* ----------------------------------------------------------
     01 — AUTORAL
     Vertical
  ---------------------------------------------------------- */

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

  /* ----------------------------------------------------------
     02 — CASAMENTO
     Horizontal
  ---------------------------------------------------------- */

  {
    id: "featured-casamento",
    number: "02",
    title: "Casamento",
    description:
      "O que acontece entre os grandes momentos também importa.",
    src: "/images/religiosos/casamento/casamento4.jpg",
    alt: "Fotografia de casamento",
    objectPosition: "center center",
    layout: "rightWide",
    selection: {
      category: "religiosos",
      collection: "casamento",
    },
  },

  /* ----------------------------------------------------------
     03 — PROFISSIONAL
     Horizontal
  ---------------------------------------------------------- */

  {
    id: "featured-profissional",
    number: "03",
    title: "Profissional",
    description:
      "Imagem, posicionamento e personalidade em equilíbrio.",
    src: "/images/profissional/profissional14.jpg",
    alt: "Retrato fotográfico profissional",
    objectPosition: "center center",
    layout: "leftWide",
    selection: {
      category: "profissional",
      collection: "profissional",
    },
  },

  /* ----------------------------------------------------------
     04 — PRÉ-WEDDING
     Vertical
  ---------------------------------------------------------- */

  {
    id: "featured-pw",
    number: "04",
    title: "Pré-Wedding",
    description:
      "Uma pausa para registrar a história antes da celebração.",
    src: "/images/religiosos/pw/pw5.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    objectPosition: "center 40%",
    layout: "rightTall",
    selection: {
      category: "religiosos",
      collection: "pw",
    },
  },
];
