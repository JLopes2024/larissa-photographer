"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import FeaturedCollections from "@/components/portfolio/FeaturedCollections";

import PortfolioGrid, {
  type ActiveCategory,
  type ActiveCollection,
} from "@/components/portfolio/PortfolioGrid";

import PortfolioHighlights from "@/components/portfolio/PortfolioHighlights";

import type {
  PortfolioCategory,
  PortfolioCollection,
} from "@/data/portfolio";

import type { PortfolioSelection } from "@/data/portfolio-featured";

import styles from "./PortfolioExperience.module.css";

function isValidCategory(
  value: string | null
): value is PortfolioCategory {
  return (
    value === "ensaios" ||
    value === "profissional" ||
    value === "religiosos"
  );
}

function isValidCollection(
  value: string | null
): value is PortfolioCollection {
  return (
    value === "aniversario" ||
    value === "ar-livre" ||
    value === "autoral" ||
    value === "estudio" ||
    value === "profissional" ||
    value === "batizado" ||
    value === "casamento" ||
    value === "eucaristia"
  );
}

function collectionBelongsToCategory(
  category: PortfolioCategory,
  collection: PortfolioCollection
) {
  const collectionsByCategory: Record<
    PortfolioCategory,
    PortfolioCollection[]
  > = {
    ensaios: [
      "aniversario",
      "ar-livre",
      "autoral",
      "estudio",
    ],

    profissional: [
      "profissional",
    ],

    religiosos: [
      "batizado",
      "casamento",
      "eucaristia",
    ],
  };

  return collectionsByCategory[
    category
  ].includes(collection);
}

export default function PortfolioExperience() {
  const searchParams =
    useSearchParams();

  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<ActiveCategory>(
      "todos"
    );

  const [
    activeCollection,
    setActiveCollection,
  ] =
    useState<ActiveCollection>(
      "todos"
    );

  /*
    Lê diretamente a URL atual.

    Exemplos:

    ?categoria=ensaios

    ?categoria=religiosos
    &colecao=casamento
  */
  useEffect(() => {
    const category =
      searchParams.get(
        "categoria"
      );

    const collection =
      searchParams.get(
        "colecao"
      );

    if (
      !isValidCategory(category)
    ) {
      setActiveCategory(
        "todos"
      );

      setActiveCollection(
        "todos"
      );

      return;
    }

    setActiveCategory(
      category
    );

    if (
      isValidCollection(
        collection
      ) &&
      collectionBelongsToCategory(
        category,
        collection
      )
    ) {
      setActiveCollection(
        collection
      );
    } else {
      setActiveCollection(
        "todos"
      );
    }
  }, [searchParams]);

  /*
    Depois que os filtros foram
    processados, posiciona a tela
    na seção correta.
  */
  useEffect(() => {
    if (
      window.location.hash !==
      "#explore-portfolio"
    ) {
      return;
    }

    const timer =
      window.setTimeout(() => {
        const target =
          document.getElementById(
            "explore-portfolio"
          );

        if (!target) {
          return;
        }

        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

        target.scrollIntoView({
          behavior: reducedMotion
            ? "auto"
            : "smooth",

          block: "start",
        });
      }, 100);

    return () => {
      window.clearTimeout(
        timer
      );
    };
  }, [searchParams]);

  const scrollToPortfolio =
    useCallback(() => {
      window.requestAnimationFrame(
        () => {
          const target =
            document.getElementById(
              "explore-portfolio"
            );

          if (!target) {
            return;
          }

          const reducedMotion =
            window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;

          target.scrollIntoView({
            behavior: reducedMotion
              ? "auto"
              : "smooth",

            block: "start",
          });
        }
      );
    }, []);

  const handleSelection =
    useCallback(
      (
        selection: PortfolioSelection
      ) => {
        setActiveCategory(
          selection.category
        );

        setActiveCollection(
          selection.collection
        );

        scrollToPortfolio();
      },
      [scrollToPortfolio]
    );

  function handleCategoryChange(
    category: ActiveCategory
  ) {
    setActiveCategory(
      category
    );

    setActiveCollection(
      "todos"
    );
  }

  function handleCollectionChange(
    collection: ActiveCollection
  ) {
    setActiveCollection(
      collection
    );
  }

  return (
    <>
      <PortfolioHighlights
        onSelect={
          handleSelection
        }
      />

      <FeaturedCollections
        onSelect={
          handleSelection
        }
      />

      <section
        id="explore-portfolio"
        className={styles.explore}
      >
        <div
          className={
            styles.container
          }
        >
          <div
            className={
              styles.exploreHeader
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              Explore o portfólio
            </span>

            <div
              className={
                styles.heading
              }
            >
              <h2
                className={
                  styles.title
                }
              >
                Escolha uma
                <br />
                história.
              </h2>

              <p>
                Navegue pelos
                diferentes trabalhos
                e encontre a fotografia
                que mais se aproxima
                do que você procura.
              </p>
            </div>
          </div>

          <PortfolioGrid
            activeCategory={
              activeCategory
            }
            activeCollection={
              activeCollection
            }
            onCategoryChange={
              handleCategoryChange
            }
            onCollectionChange={
              handleCollectionChange
            }
          />
        </div>
      </section>

      <section
        className={
          styles.closing
        }
      >
        <div
          className={
            styles.closingInner
          }
        >
          <span
            className={
              styles.closingEyebrow
            }
          >
            Seu momento
          </span>

          <div
            className={
              styles.closingContent
            }
          >
            <h2>
              Vamos criar algo
              <br />
              que seja seu.
            </h2>

            <Link
              href="/contato"
              className={
                styles.closingLink
              }
            >
              <span>
                Conversar com a
                Larissa
              </span>

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}