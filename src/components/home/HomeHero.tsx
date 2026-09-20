"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  useEffect,
  useState,
} from "react";

import styles from "./HomeHero.module.css";

const AUTOPLAY_DELAY = 6000;

const slides = [
  {
    src: "/images/home/hero.png",
    desktopPosition: "50% 44%",
    mobilePosition: "52% 50%",
  },
  {
    src: "/images/home/hero1.jpg",
    desktopPosition: "50% 34%",
    mobilePosition: "50% 50%",
  },
  {
    src: "/images/home/hero2.jpg",
    desktopPosition: "50% 48%",
    mobilePosition: "50% 50%",
  },
  {
    src: "/images/home/hero3.jpg",
    desktopPosition: "50% 34%",
    mobilePosition: "50% 50%",
  },
  {
    src: "/images/home/hero4.jpg",
    desktopPosition: "50% 34%",
    mobilePosition: "50% 50%",
  },
   {
    src: "/images/home/hero5.jpg",
    desktopPosition: "50% 34%",
    mobilePosition: "50% 50%",
  },
] as const;

export default function HomeHero() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener(
      "change",
      updatePreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePreference
      );
    };
  }, []);

  useEffect(() => {
    if (
      reducedMotion ||
      slides.length <= 1
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % slides.length
      );
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, reducedMotion]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Destaques fotográficos de Larissa Photographer"
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => {
          const active =
            index === activeIndex;

          const slideStyle = {
            "--desktop-position":
              slide.desktopPosition,
            "--mobile-position":
              slide.mobilePosition,
          } as CSSProperties;

          return (
            <div
              key={slide.src}
              className={`${styles.slide} ${
                active
                  ? styles.activeSlide
                  : ""
              }`}
              style={slideStyle}
              aria-hidden={!active}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={
                  styles.background
                }
              />
            </div>
          );
        })}
      </div>

      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Fotos que
            <br />
            guardam
            <br />
            o agora.
          </h1>

          <p className={styles.categories}>
            Ensaios Femininos
            <span>·</span>
            Casamentos Intimistas
            <span>·</span>
            Eventos Religiosos
            <span>·</span>
            Profissional
          </p>

          <Link
            href="/portfolio"
            className={styles.cta}
          >
            <span>
              Conheça meu trabalho
            </span>

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      <div
        className={styles.pagination}
        aria-label="Selecionar fotografia"
      >
        {slides.map((slide, index) => {
          const active =
            index === activeIndex;

          return (
            <button
              key={slide.src}
              type="button"
              className={`${styles.paginationButton} ${
                active
                  ? styles.paginationActive
                  : ""
              }`}
              aria-label={`Fotografia ${
                index + 1
              } de ${slides.length}`}
              aria-current={
                active
                  ? "true"
                  : undefined
              }
              onClick={() =>
                setActiveIndex(index)
              }
            >
              <span aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </section>
  );
}