import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/seo";

export const metadata =
  createPageMetadata({
    title:
      "Portfólio de fotografia",

    description:
      "Conheça o portfólio de Larissa Photographer com ensaios femininos, fotografia profissional, casamentos, batizados e celebrações religiosas em São Paulo.",

    path: "/portfolio",
  });

export default function PortfolioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}