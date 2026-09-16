const whatsappMessage =
  "Olá, Larissa! Vim pelo seu site e gostaria de solicitar um orçamento.";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Larissa Photographer",

  shortName: "Larissa",

  url: siteUrl,

  locale: "pt_BR",

  language: "pt-BR",

  description:
    "Fotografia sensível e autoral em São Paulo para ensaios, famílias, eventos, celebrações e posicionamento profissional.",

  location: "São Paulo — SP",

  areaServed: "São Paulo, SP, Brasil",

  email: "lariap.contato@gmail.com",

  whatsapp: {
    number: "5511946951394",
    display: "+55 11 94695-1394",
    url: `https://wa.me/5511946951394?text=${encodeURIComponent(
      whatsappMessage
    )}`,
  },

  instagram: {
    username: "@larissaphotographer",
    url: "https://www.instagram.com/larissaphotographer/",
  },
} as const;