import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Larissa Photographer — Início"
          >
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={220}
              height={86}
              className={styles.logoImage}
            />
          </Link>

          <div
            className={styles.links}
            aria-label="Contato"
          >
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <Link href="/contato">
              Contato
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {siteConfig.name}
          </p>

          <p>
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}