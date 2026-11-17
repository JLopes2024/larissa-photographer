"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import PortfolioGrid, {
  type ActiveCategory,
  type ActiveCollection,
} from "@/components/portfolio/PortfolioGrid";

import type {
  PortfolioCategory,
  PortfolioCollection,
} from "@/data/portfolio";

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
    ensaios: ["aniversario", "ar-livre", "autoral"],
    profissional: ["profissional"],
    religiosos: ["batizado", "casamento", "eucaristia"],
  };

  return collectionsByCategory[category].includes(collection);
}

export default function PortfolioExperience() {
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("todos");

  const [activeCollection, setActiveCollection] =
    useState<ActiveCollection>("todos");

  useEffect(() => {
    const category = searchParams.get("categoria");
    const collection = searchParams.get("colecao");

    if (!isValidCategory(category)) {
      setActiveCategory("todos");
      setActiveCollection("todos");
      return;
    }

    setActiveCategory(category);

    if (
      isValidCollection(collection) &&
      collectionBelongsToCategory(category, collection)
    ) {
      setActiveCollection(collection);
    } else {
      setActiveCollection("todos");
    }
  }, [searchParams]);

  useEffect(() => {
    if (window.location.hash !== "#explore-portfolio") {
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.getElementById("explore-portfolio");

      if (!target) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [searchParams]);

  function handleCategoryChange(category: ActiveCategory) {
    setActiveCategory(category);
    setActiveCollection("todos");
  }

  function handleCollectionChange(collection: ActiveCollection) {
    setActiveCollection(collection);
  }

  return (
    <>
      <section id="explore-portfolio" className={styles.explore}>
        <div className={styles.container}>
          <div className={styles.exploreHeader}>
            <span className={styles.eyebrow}>Explore o portfólio</span>

            <div className={styles.heading}>
              <h2 className={styles.title}>
                Escolha uma
                <br />
                história.
              </h2>

              <p>
                Navegue pelos diferentes trabalhos e encontre a fotografia
                que mais se aproxima do que você procura.
              </p>
            </div>
          </div>

          <PortfolioGrid
            activeCategory={activeCategory}
            activeCollection={activeCollection}
            onCategoryChange={handleCategoryChange}
            onCollectionChange={handleCollectionChange}
          />
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <span className={styles.closingEyebrow}>Seu momento</span>

          <div className={styles.closingContent}>
            <h2>
              Vamos criar algo
              <br />
              que seja seu.
            </h2>

            <Link href="/contato" className={styles.closingLink}>
              <span>Conversar com a Larissa</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}