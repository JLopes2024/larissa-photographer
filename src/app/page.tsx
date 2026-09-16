import HomeHero from "@/components/home/HomeHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Fotografia autoral em São Paulo",

  description:
    "Fotografia sensível para guardar histórias, encontros, afetos e momentos que merecem permanecer.",

  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HomeHero />
    </main>
  );
}