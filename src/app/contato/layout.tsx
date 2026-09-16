import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contato e orçamento",

  description:
    "Entre em contato com Larissa Photographer para conversar sobre ensaios, eventos, fotografia profissional e solicitar um orçamento em São Paulo.",

  path: "/contato",
});

export default function ContatoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}