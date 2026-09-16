export type PortfolioCategory =
  | "ensaios"
  | "familias"
  | "profissional"
  | "religiosos";

export type PortfolioCollection =
  | "aniversario"
  | "ar-livre"
  | "autoral"
  | "estudio"
  | "aniversario-infantil"
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
    label: "Todos",
    value: "todos",
  },
  {
    label: "Ensaios",
    value: "ensaios",
  },
  {
    label: "Famílias",
    value: "familias",
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

export const portfolioItems: PortfolioItem[] = [
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
    src: "/images/familias/aniversario-infantil/aniversarioinfantil1.jpg",
    alt: "Fotografia de aniversário infantil",
    width: 1200,
    height: 928,
    category: "familias",
    collection: "aniversario-infantil",
  },

  {
    id: 6,
    src: "/images/religiosos/batizado/batizado1.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },

  {
    id: 7,
    src: "/images/ensaios/estudio/estudio1.jpg",
    alt: "Ensaio fotográfico em estúdio",
    width: 1200,
    height: 1662,
    category: "ensaios",
    collection: "estudio",
  },

  {
    id: 8,
    src: "/images/ensaios/aniversario/bolo13.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1896,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 9,
    src: "/images/religiosos/eucaristia/eucaristia4.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 10,
    src: "/images/ensaios/autoral/autoral2.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 3456,
    height: 5184,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 11,
    src: "/images/religiosos/casamento/casamento3.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 12,
    src: "/images/ensaios/ar-livre/arlivrecapa.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
    cover: true,
  },

  {
    id: 13,
    src: "/images/profissional/profissional7.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 14,
    src: "/images/familias/aniversario-infantil/aniversarioinfantilcapa.jpg",
    alt: "Fotografia de aniversário infantil",
    width: 1200,
    height: 1057,
    category: "familias",
    collection: "aniversario-infantil",
    cover: true,
  },

  {
    id: 15,
    src: "/images/religiosos/batizado/batizadocapa.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1573,
    category: "religiosos",
    collection: "batizado",
    cover: true,
  },

  {
    id: 16,
    src: "/images/ensaios/estudio/studio03.jpg",
    alt: "Ensaio fotográfico em estúdio",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "estudio",
  },

  {
    id: 17,
    src: "/images/ensaios/aniversario/bolo03.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 18,
    src: "/images/religiosos/eucaristia/eucaristia5.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 19,
    src: "/images/ensaios/autoral/autoral4.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 3456,
    height: 5184,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 20,
    src: "/images/religiosos/casamento/casamento2.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 21,
    src: "/images/ensaios/ar-livre/arlivre4.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
  },

  {
    id: 22,
    src: "/images/profissional/profissional9.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 23,
    src: "/images/familias/aniversario-infantil/aniversarioinfantil3.jpg",
    alt: "Fotografia de aniversário infantil",
    width: 1200,
    height: 1800,
    category: "familias",
    collection: "aniversario-infantil",
  },

  {
    id: 24,
    src: "/images/religiosos/batizado/batizado12.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },

  {
    id: 25,
    src: "/images/ensaios/estudio/studio06.jpg",
    alt: "Ensaio fotográfico em estúdio",
    width: 1200,
    height: 1709,
    category: "ensaios",
    collection: "estudio",
  },

  {
    id: 26,
    src: "/images/ensaios/aniversario/bolo12.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 27,
    src: "/images/religiosos/eucaristia/eucaristia2.jpg",
    alt: "Fotografia de primeira eucaristia",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "eucaristia",
  },

  {
    id: 28,
    src: "/images/ensaios/autoral/autoral5.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "autoral",
  },

  {
    id: 29,
    src: "/images/religiosos/casamento/casamento1.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 2043,
    category: "religiosos",
    collection: "casamento",
  },

  {
    id: 30,
    src: "/images/ensaios/ar-livre/9-_mg_3683.jpg",
    alt: "Ensaio fotográfico ao ar livre",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "ar-livre",
  },

  {
    id: 31,
    src: "/images/profissional/profissional10.jpg",
    alt: "Retrato fotográfico profissional",
    width: 1200,
    height: 1800,
    category: "profissional",
    collection: "profissional",
  },

  {
    id: 32,
    src: "/images/religiosos/batizado/batizado5.jpg",
    alt: "Fotografia de batizado",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "batizado",
  },

  {
    id: 33,
    src: "/images/ensaios/estudio/studio08.jpg",
    alt: "Ensaio fotográfico em estúdio",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "estudio",
  },

  {
    id: 34,
    src: "/images/ensaios/aniversario/bolo14.jpg",
    alt: "Ensaio fotográfico de aniversário",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "aniversario",
  },

  {
    id: 35,
    src: "/images/ensaios/autoral/autoralcapa.jpg",
    alt: "Ensaio fotográfico autoral",
    width: 1200,
    height: 1800,
    category: "ensaios",
    collection: "autoral",
    cover: true,
  },

  {
    id: 36,
    src: "/images/religiosos/casamento/casamentocapa.jpg",
    alt: "Fotografia de casamento",
    width: 1200,
    height: 1800,
    category: "religiosos",
    collection: "casamento",
    cover: true,
  },
];