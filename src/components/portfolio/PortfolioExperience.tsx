"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import PortfolioGrid, {
  type ActiveCategory,
  type ActiveCollection,
} from "@/components/portfolio/PortfolioGrid";

import {
  portfolioCategories,
  portfolioCollections,
} from "@/data/portfolio";

import styles from "./PortfolioExperience.module.css";
import gridStyles from "./PortfolioGrid.module.css";

const GALLERY_ID = "explore-portfolio";

function updateFilterUrl(
  category: ActiveCategory,
  collection: ActiveCollection
) {
  const url = new URL(window.location.href);

  if (category === "todos") {
    url.searchParams.delete("categoria");
  } else {
    url.searchParams.set("categoria", category);
  }

  if (category === "todos" || collection === "todos") {
    url.searchParams.delete("colecao");
  } else {
    url.searchParams.set("colecao", collection);
  }

  url.hash = GALLERY_ID;

  if (url.href !== window.location.href) {
    window.history.pushState(null, "", url.href);
  }
}

export default function PortfolioExperience() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("categoria");
  const collectionParam = searchParams.get("colecao");

  const selectedCategory = portfolioCategories.find(
    (category) => category.value === categoryParam
  );

  const activeCategory = selectedCategory?.value ?? "todos";

  const activeCollection =
    activeCategory === "todos"
      ? "todos"
      : portfolioCollections[activeCategory]?.find(
          (collection) => collection.value === collectionParam
        )?.value ?? "todos";

  useEffect(() => {
    if (window.location.hash === `#${GALLERY_ID}`) {
      document.getElementById(GALLERY_ID)?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    }
  }, []);

  function handleCategoryChange(category: ActiveCategory) {
    updateFilterUrl(category, "todos");
  }

  function handleCollectionChange(collection: ActiveCollection) {
    updateFilterUrl(activeCategory, collection);
  }

  function handleBack() {
    const parentCategory =
      activeCollection === "todos" ? "todos" : activeCategory;

    updateFilterUrl(parentCategory, "todos");
  }

  return (
    <>
      <section id={GALLERY_ID} className={styles.explore}>
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

          {activeCategory !== "todos" && (
            <button
              type="button"
              className={gridStyles.subfilterButton}
              onClick={handleBack}
            >
              <span aria-hidden="true">← </span>
              {activeCollection === "todos"
                ? "Voltar para todo o portfólio"
                : `Voltar para ${selectedCategory?.label}`}
            </button>
          )}

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