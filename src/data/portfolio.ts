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
  | "eucaristia"
  | "pw";

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
  { label: "Todos", value: "todos" },
  { label: "Ensaios", value: "ensaios" },
  { label: "Profissional", value: "profissional" },
  { label: "Religiosos", value: "religiosos" },
] as const;

export const portfolioCollections: Partial<
  Record<
    PortfolioCategory,
    readonly { label: string; value: PortfolioCollection }[]
  >
> = {
  ensaios: [
    { label: "Aniversário", value: "aniversario" },
    { label: "Ar Livre", value: "ar-livre" },
  ],
  religiosos: [
    { label: "Batizado", value: "batizado" },
    { label: "Casamento", value: "casamento" },
    { label: "Eucaristia", value: "eucaristia" },
    { label: "Pré-Wedding", value: "pw" },
  ],
};

// A galeria segue a ordem desta lista. Insira cada nova foto junto às
// demais do mesmo ensaio e use um ID que ainda não esteja cadastrado.
export const portfolioItems: PortfolioItem[] = [
  // Aniversário
  {
    id: 1,
    src: "/images/ensaios/aniversario/bolocapa.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario", cover: true,
  },
  {
    id: 4,
    src: "/images/ensaios/aniversario/bolo03.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 6,
    src: "/images/ensaios/aniversario/bolo05.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 7,
    src: "/images/ensaios/aniversario/bolo06.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 9,
    src: "/images/ensaios/aniversario/bolo10.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },

  {
    id: 2,
    src: "/images/ensaios/aniversario/bolo01.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 3,
    src: "/images/ensaios/aniversario/bolo02.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 5,
    src: "/images/ensaios/aniversario/bolo04.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 8,
    src: "/images/ensaios/aniversario/bolo07.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 10,
    src: "/images/ensaios/aniversario/bolo11.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },

  {
    id: 11,
    src: "/images/ensaios/aniversario/bolo12.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 12,
    src: "/images/ensaios/aniversario/bolo13.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1896,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 13,
    src: "/images/ensaios/aniversario/bolo14.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 14,
    src: "/images/ensaios/aniversario/bolo15.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },
  {
    id: 15,
    src: "/images/ensaios/aniversario/bolo16.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200, height: 1800,
    category: "ensaios", collection: "aniversario",
  },

  // Ar livre
  {
    id: 16,
    src: "/images/ensaios/ar-livre/arlivrecapa.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre", cover: true,
  },
  {
    id: 21,
    src: "/images/ensaios/ar-livre/arlivre4.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },
  {
    id: 22,
    src: "/images/ensaios/ar-livre/arlivre5.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },

  {
    id: 17,
    src: "/images/ensaios/ar-livre/9-_mg_3683.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },
  {
    id: 18,
    src: "/images/ensaios/ar-livre/arlivre1.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },

  {
    id: 19,
    src: "/images/ensaios/ar-livre/arlivre2.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },
  {
    id: 20,
    src: "/images/ensaios/ar-livre/arlivre3.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200, height: 1800,
    category: "ensaios", collection: "ar-livre",
  },

  // Profissional
  {
    id: 30,
    src: "/images/profissional/profissional1.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1801,
    category: "profissional", collection: "profissional",
  },
  {
    id: 32,
    src: "/images/profissional/profissional4.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1801,
    category: "profissional", collection: "profissional",
  },
  {
    id: 33,
    src: "/images/profissional/profissional5.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },
  {
    id: 38,
    src: "/images/profissional/profissional10.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },

  {
    id: 31,
    src: "/images/profissional/profissional2.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },
  {
    id: 34,
    src: "/images/profissional/profissional6.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },

  {
    id: 35,
    src: "/images/profissional/profissional7.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },
  {
    id: 36,
    src: "/images/profissional/profissional8.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },
  {
    id: 37,
    src: "/images/profissional/profissional9.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200, height: 1800,
    category: "profissional", collection: "profissional",
  },

  {
    id: 39,
    src: "/images/profissional/profissional13.jpg",
    alt: "Retrato fotográfico profissional",
    width: 2048, height: 1365,
    category: "profissional", collection: "profissional",
  },
  {
    id: 40,
    src: "/images/profissional/profissional14.jpg",
    alt: "Retrato fotográfico profissional",
    width: 2048, height: 1365,
    category: "profissional", collection: "profissional",
  },
  {
    id: 41,
    src: "/images/profissional/profissional15.jpg",
    alt: "Retrato fotográfico profissional",
    width: 2048, height: 1365,
    category: "profissional", collection: "profissional",
  },

  // Batizado
  {
    id: 42,
    src: "/images/religiosos/batizado/batizadocapa.jpg",
    alt: "Fotografia de batizado",
    width: 1365, height: 2048,
    category: "religiosos", collection: "batizado", cover: true,
  },
  {
    id: 43,
    src: "/images/religiosos/batizado/batizado1.jpg",
    alt: "Fotografia de batizado",
    width: 1200, height: 800,
    category: "religiosos", collection: "batizado",
  },
  {
    id: 44,
    src: "/images/religiosos/batizado/batizado2.jpg",
    alt: "Fotografia de batizado",
    width: 1200, height: 800,
    category: "religiosos", collection: "batizado",
  },
  {
    id: 45,
    src: "/images/religiosos/batizado/batizado3.jpg",
    alt: "Fotografia de batizado",
    width: 1200, height: 1573,
    category: "religiosos", collection: "batizado",
  },
  {
    id: 46,
    src: "/images/religiosos/batizado/batizado4.jpg",
    alt: "Fotografia de batizado",
    width: 2048, height: 1365,
    category: "religiosos", collection: "batizado",
  },
  {
    id: 47,
    src: "/images/religiosos/batizado/batizado5.jpg",
    alt: "Fotografia de batizado",
    width: 1365, height: 2048,
    category: "religiosos", collection: "batizado",
  },
  {
    id: 48,
    src: "/images/religiosos/batizado/batizado6.jpg",
    alt: "Fotografia de batizado",
    width: 2048, height: 1365,
    category: "religiosos", collection: "batizado",
  },

  // Casamento
  {
    id: 49,
    src: "/images/religiosos/casamento/casamentocapa.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento", cover: true,
  },
  {
    id: 53,
    src: "/images/religiosos/casamento/casamento4.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 54,
    src: "/images/religiosos/casamento/casamento5.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 56,
    src: "/images/religiosos/casamento/casamento7.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1844,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 57,
    src: "/images/religiosos/casamento/casamento8.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 58,
    src: "/images/religiosos/casamento/casamento9.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },

  {
    id: 50,
    src: "/images/religiosos/casamento/casamento1.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 2043,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 51,
    src: "/images/religiosos/casamento/casamento2.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 52,
    src: "/images/religiosos/casamento/casamento3.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 55,
    src: "/images/religiosos/casamento/casamento6.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1800,
    category: "religiosos", collection: "casamento",
  },
  {
    id: 59,
    src: "/images/religiosos/casamento/casamento10.jpg",
    alt: "Fotografia de casamento",
    width: 1200, height: 1744,
    category: "religiosos", collection: "casamento",
  },

  // Eucaristia
  {
    id: 60,
    src: "/images/religiosos/eucaristia/eucaristiacapa.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200, height: 1800,
    category: "religiosos", collection: "eucaristia", cover: true,
  },
  {
    id: 61,
    src: "/images/religiosos/eucaristia/eucaristia2.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200, height: 1800,
    category: "religiosos", collection: "eucaristia",
  },
  {
    id: 62,
    src: "/images/religiosos/eucaristia/eucaristia3.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200, height: 1800,
    category: "religiosos", collection: "eucaristia",
  },
  {
    id: 63,
    src: "/images/religiosos/eucaristia/eucaristia4.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200, height: 1800,
    category: "religiosos", collection: "eucaristia",
  },
  {
    id: 64,
    src: "/images/religiosos/eucaristia/eucaristia5.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200, height: 1800,
    category: "religiosos", collection: "eucaristia",
  },

  // Pré-wedding
  {
    id: 65,
    src: "/images/religiosos/pw/pw1.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    width: 1365, height: 2048,
    category: "religiosos", collection: "pw",
  },
  {
    id: 66,
    src: "/images/religiosos/pw/pw2.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    width: 1365, height: 2048,
    category: "religiosos", collection: "pw",
  },
  {
    id: 67,
    src: "/images/religiosos/pw/pw3.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    width: 1365, height: 2048,
    category: "religiosos", collection: "pw",
  },
  {
    id: 68,
    src: "/images/religiosos/pw/pw4.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    width: 1365, height: 2048,
    category: "religiosos", collection: "pw",
  },
  {
    id: 69,
    src: "/images/religiosos/pw/pw5.jpg",
    alt: "Ensaio fotográfico pré-wedding",
    width: 1365, height: 2048,
    category: "religiosos", collection: "pw",
  },
];