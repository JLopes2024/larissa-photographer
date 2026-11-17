import { Suspense } from "react";

import Footer from "@/components/layout/Footer";
import PortfolioExperience from "@/components/portfolio/PortfolioExperience";

import styles from "./page.module.css";

export default function PortfolioPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              Portfólio
            </span>

            <div className={styles.introContent}>
              <h1 className={styles.title}>
                Histórias
                <br />
                em imagens
              </h1>

              <div className={styles.introText}>
                <p>
                  Momentos registrados com atenção e sensibilidade,
                  ultrapassando o tempo e o espaço.
                </p>

                <span
                  className={styles.line}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <PortfolioExperience />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}