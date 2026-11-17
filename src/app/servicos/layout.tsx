import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Serviços de fotografia",
  description:
    "Ensaios individuais e de casal, aniversários, retratos profissionais, cerimônias religiosas e fotografia instantânea com Polaroid para eventos em São Paulo.",
  path: "/servicos",
});

export default function ServicosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}