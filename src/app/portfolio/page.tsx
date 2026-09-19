import Footer from "@/components/layout/Footer";
import PortfolioExperience from "@/components/portfolio/PortfolioExperience";

import styles from "./page.module.css";

export default function PortfolioPage() {
  return (
    <>
      <main className={styles.page}>
        <section
          className={styles.intro}
        >
          <div
            className={
              styles.container
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              Portfólio
            </span>

            <div
              className={
                styles.introContent
              }
            >
              <h1
                className={
                  styles.title
                }
              >
                Histórias
                <br />
                em imagens
              </h1>

              <div
                className={
                  styles.introText
                }
              >
                <p>
                  Pessoas, encontros,
                  gestos e celebrações
                  registrados com
                  atenção ao que
                  acontece de verdade.
                </p>

                <span
                  className={
                    styles.line
                  }
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        <PortfolioExperience />
      </main>

      <Footer />
    </>
  );
}