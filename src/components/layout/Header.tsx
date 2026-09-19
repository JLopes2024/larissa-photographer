"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  useCallback,
  useState,
} from "react";

import { navigation } from "@/data/navigation";

import MobileMenu from "./MobileMenu";

import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const isHome = pathname === "/";

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

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
    <>
      <header
        className={`${styles.header} ${
          isHome
            ? styles.transparent
            : styles.light
        }`}
      >
        <div
          className={`${styles.container} ${
            isHome
              ? styles.homeContainer
              : ""
          }`}
        >
          <Link
            href="/"
            className={`${styles.logo} ${
              isHome
                ? styles.homeLogo
                : ""
            }`}
            aria-label="Larissa Photographer — página inicial"
          >
            <Image
              src="/images/brand/logo.png"
              alt=""
              width={180}
              height={70}
              priority
              className={`${styles.logoImage} ${
                isHome
                  ? styles.logoLight
                  : ""
              }`}
            />
          </Link>

          <nav
            className={
              styles.navigation
            }
            aria-label="Navegação principal"
          >
            {navigation.map(
              (item) => {
                const active =
                  isCurrentPage(
                    item.href
                  );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
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
                    {item.label}
                  </Link>
                );
              }
            )}
          </nav>

          <button
            type="button"
            className={
              styles.menuButton
            }
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

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
      />
    </>
  );
}