import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Larissa Photographer para conversar sobre ensaios, eventos, famílias e fotografia profissional em São Paulo.",
};

export default function ContatoPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <span className={styles.eyebrow}>
                Contato
              </span>

              <h1 className={styles.title}>
                Vamos
                <br />
                <em>conversar?</em>
              </h1>

              <p className={styles.description}>
                Conte-me sobre seu momento.
                <br />
                Será um prazer fazer parte dele.
              </p>
            </div>

            <div className={styles.details}>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className={styles.contactItem}
              >
                <div>
                  <span className={styles.label}>
                    WhatsApp
                  </span>

                  <p className={styles.value}>
                    {siteConfig.whatsapp.display}
                  </p>
                </div>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className={styles.contactItem}
              >
                <div>
                  <span className={styles.label}>
                    E-mail
                  </span>

                  <p className={styles.value}>
                    {siteConfig.email}
                  </p>
                </div>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer"
                className={styles.contactItem}
              >
                <div>
                  <span className={styles.label}>
                    Instagram
                  </span>

                  <p className={styles.value}>
                    {siteConfig.instagram.username}
                  </p>
                </div>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

              <div className={styles.contactItem}>
                <div>
                  <span className={styles.label}>
                    Localização
                  </span>

                  <p className={styles.value}>
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}