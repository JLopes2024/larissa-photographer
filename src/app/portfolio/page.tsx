import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça o portfólio fotográfico de Larissa Photographer: ensaios, famílias, fotografia profissional e celebrações.",
};

export default function PortfolioPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              Portfólio
            </span>

            <div className={styles.heading}>
              <h1 className={styles.title}>
                Histórias
                <br />
                em imagens
              </h1>

              <div className={styles.headingText}>
                <p>
                  Pessoas, encontros, afetos e tudo aquilo
                  que faz a vida ser única.
                </p>

                <span
                  className={styles.line}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className={styles.featured}>
              <Image
                src="/images/ensaios/ar-livre/arlivrecapa.jpg"
                alt="Ensaio fotográfico ao ar livre por Larissa Photographer"
                fill
                priority
                sizes="(max-width: 700px) 100vw, 480px"
                className={styles.featuredImage}
              />

              <p className={styles.handwritten}>
                vida
                <br />
                em imagens
              </p>
            </div>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <div className={styles.galleryHeading}>
              <span>Portfólio</span>

              <p>
                Um pouco do que já passou
                <br />
                pelas minhas lentes.
              </p>
            </div>

            <PortfolioGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}