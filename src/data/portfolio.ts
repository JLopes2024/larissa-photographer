export type PortfolioCategory =
  | "ensaios"
  | "profissional"
  | "religiosos";

export type PortfolioCollection =
  | "aniversario"
  | "ar-livre"
  | "autoral"
  | "profissional"
  | "batizado"
  | "casamento"
  | "eucaristia";

export type PortfolioItem = {
  id: number;
  src: string;
  alt: string;

  width: number;
  height: number;

  category: PortfolioCategory;
  collection: PortfolioCollection;

  cover?: boolean;
};

export const portfolioCategories = [
  {
    label: "Ensaios",
    value: "ensaios",
  },
  {
    label: "Profissional",
    value: "profissional",
  },
  {
    label: "Religiosos",
    value: "religiosos",
  },
] as const;

export const portfolioCollections: Partial<
  Record<
    PortfolioCategory,
    readonly {
      label: string;
      value: PortfolioCollection;
    }[]
  >
> = {
  ensaios: [
    {
      label: "Aniversário",
      value: "aniversario",
    },
    {
      label: "Ar Livre",
      value: "ar-livre",
    },
    {
      label: "Autoral",
      value: "autoral",
    },
  ],

  religiosos: [
    {
      label: "Batizado",
      value: "batizado",
    },
    {
      label: "Casamento",
      value: "casamento",
    },
    {
      label: "Eucaristia",
      value: "eucaristia",
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  /* ========================================
     ENSAIOS + RELIGIOSOS + PROFISSIONAL
     ORDEM PRINCIPAL DO PORTFÓLIO
  ======================================== */

  {
    id: 1,
    src: "/images/ensaios/autoral/autoral1.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 3456,
    height: 5184,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 2,
    src: "/images/religiosos/casamento/casamento10.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1744,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 3,
    src: "/images/ensaios/ar-livre/arlivre1.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
  },

  {
    id: 4,
    src: "/images/profissional/profissional4.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1801,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 5,
    src: "/images/religiosos/batizado/batizado1.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },
  {
    id: 7,
    src: "/images/ensaios/aniversario/bolo13.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1896,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 8,
    src: "/images/religiosos/eucaristia/eucaristia4.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 9,
    src: "/images/ensaios/autoral/autoral2.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 3456,
    height: 5184,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 10,
    src: "/images/religiosos/casamento/casamento3.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 11,
    src: "/images/ensaios/ar-livre/arlivrecapa.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
    cover: true,
  },

  {
    id: 12,
    src: "/images/profissional/profissional7.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 13,
    src: "/images/religiosos/batizado/batizadocapa.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1573,
    category: "religiosos",
    collection: "batizado",
    cover: true,
  },
  {
    id: 15,
    src: "/images/ensaios/aniversario/bolo03.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 16,
    src: "/images/religiosos/eucaristia/eucaristia5.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 17,
    src: "/images/ensaios/autoral/autoral4.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 3456,
    height: 5184,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 18,
    src: "/images/religiosos/casamento/casamento2.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 19,
    src: "/images/ensaios/ar-livre/arlivre4.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
  },

  {
    id: 20,
    src: "/images/profissional/profissional9.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 21,
    src: "/images/religiosos/batizado/batizado12.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },

  {
    id: 23,
    src: "/images/ensaios/aniversario/bolo12.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 24,
    src: "/images/religiosos/eucaristia/eucaristia2.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 25,
    src: "/images/ensaios/autoral/autoral5.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 26,
    src: "/images/religiosos/casamento/casamento1.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 2043,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 27,
    src: "/images/ensaios/ar-livre/9-_mg_3683.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
  },

  {
    id: 28,
    src: "/images/profissional/profissional10.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 29,
    src: "/images/religiosos/batizado/batizado5.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },
  {
    id: 31,
    src: "/images/ensaios/aniversario/bolo14.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 32,
    src: "/images/ensaios/autoral/autoralcapa.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "autoral",
    cover: true,
  },

  {
    id: 33,
    src: "/images/religiosos/casamento/casamentocapa.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
    cover: true,
  },

  /* ========================================
     CASAMENTO — TODAS AS FOTOS
  ======================================== */

  {
    id: 34,
    src: "/images/religiosos/casamento/casamento4.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 35,
    src: "/images/religiosos/casamento/casamento5.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 36,
    src: "/images/religiosos/casamento/casamento6.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 37,
    src: "/images/religiosos/casamento/casamento7.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1844,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 38,
    src: "/images/religiosos/casamento/casamento8.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 39,
    src: "/images/religiosos/casamento/casamento9.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  /* ========================================
     EUCARISTIA — TODAS AS FOTOS
  ======================================== */

  {
    id: 40,
    src: "/images/religiosos/eucaristia/eucaristia3.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 41,
    src: "/images/religiosos/eucaristia/eucaristiacapa.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
    cover: true,
  },
];