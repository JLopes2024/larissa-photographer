"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const CLOSE_DURATION = 280;

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  const [shouldRender, setShouldRender] =
    useState(open);

  const [isClosing, setIsClosing] =
    useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (open) {
      setShouldRender(true);
      setIsClosing(false);

      return;
    }

    if (shouldRender) {
      setIsClosing(true);

      timeout = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, CLOSE_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [open, shouldRender]);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${
        isClosing ? styles.closing : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal"
    >
      <div className={styles.inner}>
        <div className={styles.top}>
          <Link
            href="/"
            className={styles.brand}
            onClick={onClose}
          >
            Larissa
            <span>Photographer</span>
          </Link>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          className={styles.navigation}
          aria-label="Navegação principal"
        >
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`${styles.navLink} ${
                  isActive
                    ? styles.active
                    : ""
                }`}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>

          <p className={styles.quote}>
            Fotografar é guardar
            <br />
            o que o tempo não pode levar.
          </p>
        </div>
      </div>
    </div>
  );
}