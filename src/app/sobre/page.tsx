import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Larissa, fotógrafa paulista e formada em Jornalismo, e seu olhar sensível sobre pessoas, vínculos e histórias.",
};

const specialties = [
  {
    number: "01",
    label: "Ensaios",
  },
  {
    number: "02",
    label: "Famílias",
  },
  {
    number: "03",
    label: "Profissional",
  },
  {
    number: "04",
    label: "Eventos",
  },
];

export default function SobrePage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.about}>
          <div className={styles.container}>
            <div className={styles.visual}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/sobre/larissa.jpg"
                  alt="Larissa Photographer"
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 48vw"
                  className={styles.image}
                />
              </div>

              <p className={styles.handwritten}>
                mais que fotos,
                <br />
                pessoas.
              </p>
            </div>

            <div className={styles.content}>
              <span className={styles.eyebrow}>
                Sobre mim
              </span>

              <h1 className={styles.title}>
                Quem
                <br />
                sou eu?
              </h1>

              <div className={styles.text}>
                <p className={styles.lead}>
                  Sou a Larissa, fotógrafa paulista e
                  formada em Jornalismo.
                </p>

                <p>
                  Acredito no poder das imagens de guardar
                  histórias, conectar pessoas e transformar
                  momentos em memórias reais.
                </p>

                <p>
                  Meu olhar busca aquilo que acontece de verdade:
                  os afetos, os encontros e os pequenos detalhes
                  que fazem cada história ser única.
                </p>
              </div>

              <Link
                href="/portfolio"
                className={styles.cta}
              >
                <span>Conheça meu trabalho</span>
                <span aria-hidden="true">→</span>
              </Link>

              <div
                className={styles.specialties}
                aria-label="Áreas de atuação"
              >
                {specialties.map((item) => (
                  <div
                    key={item.number}
                    className={styles.specialty}
                  >
                    <span>{item.number}</span>

                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}