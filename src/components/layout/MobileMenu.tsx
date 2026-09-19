"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const CLOSE_DURATION = 280;

const FOCUSABLE_ELEMENTS = `
  a[href],
  button:not([disabled]),
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"])
`;

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  const dialogRef =
    useRef<HTMLDivElement>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const previouslyFocusedElement =
    useRef<HTMLElement | null>(null);

  const [shouldRender, setShouldRender] =
    useState(open);

  const [isClosing, setIsClosing] =
    useState(false);

  /*
    Mantém o componente montado durante
    a animação de fechamento.
  */
  useEffect(() => {
    let timeout:
      | ReturnType<typeof setTimeout>
      | undefined;

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

  /*
    Bloqueia scroll, salva o elemento
    que abriu o menu e devolve o foco
    quando o menu fecha.
  */
  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    previouslyFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const focusTimeout =
      window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 30);

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        event.preventDefault();

        onClose();

        return;
      }

      if (
        event.key !== "Tab" ||
        !dialogRef.current
      ) {
        return;
      }

      const focusableElements =
        Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            FOCUSABLE_ELEMENTS
          )
        ).filter(
          (element) =>
            !element.hasAttribute(
              "disabled"
            )
        );

      if (
        focusableElements.length === 0
      ) {
        event.preventDefault();

        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();

        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();

        firstElement.focus();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(
        focusTimeout
      );

      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previouslyFocusedElement.current?.focus();
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) {
    return null;
  }

  function isCurrentPage(
    href: string
  ) {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(
        `${href}/`
      )
    );
  }

  return (
    <div
      ref={dialogRef}
      id="mobile-menu-dialog"
      className={`${styles.overlay} ${
        isClosing
          ? styles.closing
          : ""
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
            aria-label="Larissa Photographer — página inicial"
          >
            Larissa

            <span>
              Photographer
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            className={
              styles.closeButton
            }
            onClick={onClose}
            aria-label="Fechar menu principal"
          >
            <span
              aria-hidden="true"
            />

            <span
              aria-hidden="true"
            />
          </button>
        </div>

        <nav
          className={
            styles.navigation
          }
          aria-label="Navegação principal"
        >
          {navigation.map(
            (item, index) => {
              const active =
                isCurrentPage(
                  item.href
                );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  className={`${styles.navLink} ${
                    active
                      ? styles.active
                      : ""
                  }`}
                >
                  <span
                    className={
                      styles.number
                    }
                    aria-hidden="true"
                  >
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </Link>
              );
            }
          )}
        </nav>

        <div
          className={
            styles.bottom
          }
        >
          <div
            className={
              styles.socials
            }
          >
            <a
              href={
                siteConfig
                  .instagram.url
              }
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Larissa Photographer — abre em nova guia"
            >
              Instagram ↗
            </a>

            <a
              href={
                siteConfig
                  .whatsapp.url
              }
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Larissa Photographer — abre em nova guia"
            >
              WhatsApp ↗
            </a>
          </div>

          <p
            className={
              styles.quote
            }
          >
            Fotografar é guardar
            <br />
            o que o tempo não pode
            levar.
          </p>
        </div>
      </div>
    </div>
  );
}