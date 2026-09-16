import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.number} aria-hidden="true">
          404
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Página não encontrada
          </span>

          <h1 className={styles.title}>
            Essa história
            <br />
            <em>não está aqui.</em>
          </h1>

          <p className={styles.description}>
            O endereço pode ter mudado ou essa página não existe mais.
            Você pode voltar ao início ou continuar conhecendo o trabalho
            da Larissa.
          </p>

          <div className={styles.actions}>
            <Link
              href="/"
              className={styles.primaryAction}
            >
              <span>Voltar ao início</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/portfolio"
              className={styles.secondaryAction}
            >
              Ver portfólio
            </Link>
          </div>
        </div>

        <p className={styles.handwritten}>
          às vezes,
          <br />
          a gente se perde
        </p>
      </div>
    </main>
  );
}