import Image from "next/image";
import Link from "next/link";

import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/home/hero.jpg"
        alt="Ensaio fotográfico por Larissa Photographer"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Fotografia autoral
          </p>

          <h1 className={styles.title}>
            Fotos que
            <br />
            guardam
            <br />
            o agora.
          </h1>

          <p className={styles.categories}>
            Ensaios
            <span>·</span>
            Famílias
            <span>·</span>
            Eventos
          </p>

          <Link
            href="/portfolio"
            className={styles.cta}
          >
            <span>Conheça meu trabalho</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}