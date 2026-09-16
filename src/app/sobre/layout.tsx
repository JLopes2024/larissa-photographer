import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sobre Larissa",

  description:
    "Conheça Larissa, fotógrafa paulista e formada em Jornalismo, e seu olhar sensível para pessoas, vínculos, encontros e histórias.",

  path: "/sobre",
});

export default function SobreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}