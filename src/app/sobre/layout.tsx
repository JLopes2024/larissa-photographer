import type { ReactNode } from "react";

import { createPageMetadata } from "@/lib/seo";

export const metadata =
  createPageMetadata({
    title: "Sobre Larissa",

    description:
      "Conheça Larissa, fotógrafa paulista formada em Jornalismo, seu olhar sobre pessoas, encontros e histórias e sua forma sensível e natural de fotografar.",

    path: "/sobre",
  });

export default function SobreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}