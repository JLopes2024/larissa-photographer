import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.brandName}
              aria-label="Larissa Photographer — Início"
            >
              Larissa
              <span>Photographer</span>
            </Link>

            <p>
              Histórias, encontros e afetos
              <br />
              guardados em imagens.
            </p>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Navegação do rodapé"
          >
            <span className={styles.label}>
              Navegação
            </span>

            <div className={styles.links}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className={styles.contact}>
            <span className={styles.label}>
              Contato
            </span>

            <div className={styles.contactLinks}>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <a href={`mailto:${siteConfig.email}`}>
                E-mail
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>


        <div className={styles.bottom}>
          <p>
            © {year} {siteConfig.name}
          </p>

          <p>{siteConfig.location}</p>

          <p>
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}