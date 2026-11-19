"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { navigation } from "@/data/navigation";

import MobileMenu from "./MobileMenu";

import styles from "./Header.module.css";
import backToTopStyles from "./BackToTop.module.css";

export default function Header() {
  const pathname = usePathname();
  const logoRef = useRef<HTMLAnchorElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    function updateButtonVisibility() {
      setShowBackToTop(window.scrollY >= window.innerHeight);
    }

    updateButtonVisibility();

    window.addEventListener("scroll", updateButtonVisibility, {
      passive: true,
    });
    window.addEventListener("resize", updateButtonVisibility);

    return () => {
      window.removeEventListener("scroll", updateButtonVisibility);
      window.removeEventListener("resize", updateButtonVisibility);
    };
  }, [pathname]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  function handleBackToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    logoRef.current?.focus({ preventScroll: true });

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  function isCurrentPage(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={`${styles.header} ${
          isHome ? styles.transparent : styles.light
        }`}
      >
        <div
          className={`${styles.container} ${
            isHome ? styles.homeContainer : ""
          }`}
        >
          <Link
            ref={logoRef}
            href="/"
            className={`${styles.logo} ${isHome ? styles.homeLogo : ""}`}
            aria-label="Larissa Photographer — página inicial"
          >
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={180}
              height={70}
              priority
              className={`${styles.logoImage} ${
                isHome ? styles.logoLight : ""
              }`}
            />
          </Link>

          <nav
            className={styles.navigation}
            aria-label="Navegação principal"
          >
            {navigation.map((item) => {
              const active = isCurrentPage(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${styles.navLink} ${
                    active ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={openMenu}
            aria-label="Abrir menu principal"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-dialog"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />

      {showBackToTop && !menuOpen && (
        <button
          type="button"
          className={backToTopStyles.button}
          onClick={handleBackToTop}
          aria-label="Voltar ao topo da página"
        >
          <span className={backToTopStyles.arrow} aria-hidden="true">
            ↑
          </span>
          
        </button>
      )}
    </>
  );
}