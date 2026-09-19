import type {
  Metadata,
  Viewport,
} from "next";

import {
  Allura,
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9A5842",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default:
      "Larissa Photographer | Fotografia em São Paulo",
    template: "%s | Larissa Photographer",
  },

  description: siteConfig.description,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  category: "photography",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/images/brand/logo-icon.png",
        type: "image/png",
      },
    ],

    shortcut: [
      {
        url: "/images/brand/logo-icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/images/brand/logo-icon.png",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",

      "@id": `${siteConfig.url}/#website`,

      url: siteConfig.url,

      name: siteConfig.name,

      description: siteConfig.description,

      inLanguage: siteConfig.language,
    },

    {
      "@type": "ProfessionalService",

      "@id": `${siteConfig.url}/#business`,

      name: siteConfig.name,

      url: siteConfig.url,

      description: siteConfig.description,

      image: `${siteConfig.url}/opengraph-image`,

      email: siteConfig.email,

      telephone: `+${siteConfig.whatsapp.number}`,

      areaServed: {
        "@type": "City",
        name: "São Paulo",
      },

      sameAs: [
        siteConfig.instagram.url,
      ],

      serviceType: [
        "Ensaio fotográfico individual",
        "Ensaio fotográfico de casal",
        "Fotografia de aniversário",
        "Fotografia profissional",
        "Cobertura fotográfica de eventos",
        "Fotografia de eventos religiosos",
        "Cobertura fotográfica com Polaroid",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${cormorant.variable} ${allura.variable}`}
      >
        <a
          href="#main-content"
          className="skip-link"
        >
          Pular para o conteúdo
        </a>

        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ).replace(/</g, "\\u003c"),
          }}
        />

        <Header />

        <div
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </div>
      </body>
    </html>
  );
}