"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  portfolioHighlights,
  type PortfolioSelection,
} from "@/data/portfolio-featured";

import styles from "./PortfolioHighlights.module.css";

const AUTOPLAY_DELAY = 9000;

type PortfolioHighlightsProps = {
  onSelect: (
    selection: PortfolioSelection
  ) => void;
};

export default function PortfolioHighlights({
  onSelect,
}: PortfolioHighlightsProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const [pageVisible, setPageVisible] =
    useState(true);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  const total = portfolioHighlights.length;

  const active =
    portfolioHighlights[activeIndex];

  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === 0
        ? total - 1
        : current - 1
    );
  }, [total]);

  const next = useCallback(() => {
    setActiveIndex(
      (current) =>
        (current + 1) % total
    );
  }, [total]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function updateMotionPreference() {
      setReducedMotion(mediaQuery.matches);
    }

    updateMotionPreference();

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    function handleVisibility() {
      setPageVisible(!document.hidden);
    }

    handleVisibility();

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      !pageVisible ||
      reducedMotion ||
      total <= 1
    ) {
      return;
    }

    const timer = window.setTimeout(
      next,
      AUTOPLAY_DELAY
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    isPaused,
    pageVisible,
    reducedMotion,
    total,
    next,
  ]);

  return (
    <section
      className={styles.section}
      aria-roledescription="carousel"
      aria-label="Destaques do portfólio"
      onMouseEnter={() =>
        setIsPaused(true)
      }
      onMouseLeave={() =>
        setIsPaused(false)
      }
      onFocusCapture={() =>
        setIsPaused(true)
      }
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          Portfolio Highlights
        </span>

        <span
          className={styles.headerLine}
          aria-hidden="true"
        />
      </div>

      <div className={styles.stage}>
        <div className={styles.media}>
          {portfolioHighlights.map(
            (item, index) => {
              const isActive =
                index === activeIndex;

              return (
                <div
                  key={item.id}
                  className={`${styles.slide} ${
                    isActive
                      ? styles.activeSlide
                      : ""
                  }`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.src}
                    alt={
                      isActive
                        ? item.alt
                        : ""
                    }
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={
                      styles.image
                    }
                    style={{
                      objectPosition:
                        item.objectPosition,
                    }}
                  />
                </div>
              );
            }
          )}

          <div
            className={styles.overlay}
            aria-hidden="true"
          />

          <div
            key={active.id}
            className={
              styles.slideContent
            }
          >
            <span
              className={
                styles.slideNumber
              }
            >
              {active.number}
            </span>

            <h2
              className={
                styles.slideTitle
              }
            >
              {active.title}
            </h2>

            <p
              className={
                styles.slideDescription
              }
            >
              {active.description}
            </p>

            <button
              type="button"
              className={
                styles.exploreButton
              }
              onClick={() =>
                onSelect(
                  active.selection
                )
              }
            >
              <span>
                Explorar seleção
              </span>

              <span aria-hidden="true">
                ↘
              </span>
            </button>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={
              styles.controlButton
            }
            onClick={previous}
            aria-label="Fotografia anterior"
          >
            <span aria-hidden="true">
              ←
            </span>

            <span>Anterior</span>
          </button>

          <div
            className={
              styles.progress
            }
            aria-live="polite"
          >
            <span>
              {String(
                activeIndex + 1
              ).padStart(2, "0")}
            </span>

            <span
              className={
                styles.progressLine
              }
              aria-hidden="true"
            />

            <span>
              {String(total).padStart(
                2,
                "0"
              )}
            </span>
          </div>

          <button
            type="button"
            className={
              styles.controlButton
            }
            onClick={next}
            aria-label="Próxima fotografia"
          >
            <span>Próxima</span>

            <span aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}