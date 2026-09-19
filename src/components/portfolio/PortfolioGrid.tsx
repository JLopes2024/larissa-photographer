"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  portfolioCategories,
  portfolioCollections,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioCollection,
} from "@/data/portfolio";

import styles from "./PortfolioGrid.module.css";

type ActiveCategory =
  | "todos"
  | PortfolioCategory;

type ActiveCollection =
  | "todos"
  | PortfolioCollection;

const INITIAL_ITEMS = 12;
const ITEMS_PER_LOAD = 12;

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("todos");

  const [activeCollection, setActiveCollection] =
    useState<ActiveCollection>("todos");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_ITEMS);

  const [failedImages, setFailedImages] =
    useState<number[]>([]);

  const currentCollections =
    activeCategory === "todos"
      ? []
      : portfolioCollections[activeCategory] ?? [];

  const filteredItems = useMemo(() => {
    let items = portfolioItems.filter(
      (item) => !failedImages.includes(item.id)
    );

    if (activeCategory !== "todos") {
      items = items.filter(
        (item) =>
          item.category === activeCategory
      );
    }

    if (activeCollection !== "todos") {
      items = items.filter(
        (item) =>
          item.collection === activeCollection
      );
    }

    return items;
  }, [
    activeCategory,
    activeCollection,
    failedImages,
  ]);

  const visibleItems =
    filteredItems.slice(0, visibleCount);

  const hasMore =
    visibleCount < filteredItems.length;

  function handleCategoryChange(
    category: ActiveCategory
  ) {
    setActiveCategory(category);

    // Sempre volta para "Todos"
    // ao trocar a categoria principal.
    setActiveCollection("todos");

    setVisibleCount(INITIAL_ITEMS);
  }

  function handleCollectionChange(
    collection: ActiveCollection
  ) {
    setActiveCollection(collection);

    setVisibleCount(INITIAL_ITEMS);
  }

  function handleLoadMore() {
    setVisibleCount((current) =>
      Math.min(
        current + ITEMS_PER_LOAD,
        filteredItems.length
      )
    );
  }

  function handleImageError(id: number) {
    setFailedImages((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterArea}>
        {/* CATEGORIAS PRINCIPAIS */}
        <div
          className={styles.filters}
          aria-label="Filtrar portfólio por categoria"
        >
          {portfolioCategories.map(
            (category) => {
              const isActive =
                activeCategory ===
                category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  className={`${styles.filterButton} ${
                    isActive
                      ? styles.active
                      : ""
                  }`}
                  aria-pressed={isActive}
                  onClick={() =>
                    handleCategoryChange(
                      category.value
                    )
                  }
                >
                  {category.label}
                </button>
              );
            }
          )}
        </div>

        {/* SUBCATEGORIAS */}
        {currentCollections.length > 0 && (
          <div
            className={styles.subfilters}
            aria-label={`Filtrar ${
              activeCategory === "ensaios"
                ? "ensaios"
                : "religiosos"
            } por tipo`}
          >
            <button
              type="button"
              className={`${styles.subfilterButton} ${
                activeCollection === "todos"
                  ? styles.subfilterActive
                  : ""
              }`}
              aria-pressed={
                activeCollection === "todos"
              }
              onClick={() =>
                handleCollectionChange("todos")
              }
            >
              Todos
            </button>

            {currentCollections.map(
              (collection) => {
                const isActive =
                  activeCollection ===
                  collection.value;

                return (
                  <button
                    key={collection.value}
                    type="button"
                    className={`${styles.subfilterButton} ${
                      isActive
                        ? styles.subfilterActive
                        : ""
                    }`}
                    aria-pressed={isActive}
                    onClick={() =>
                      handleCollectionChange(
                        collection.value
                      )
                    }
                  >
                    {collection.label}
                  </button>
                );
              }
            )}
          </div>
        )}
      </div>

      {/* GALERIA */}
      {visibleItems.length > 0 ? (
        <div className={styles.grid}>
          {visibleItems.map((item) => (
            <figure
              key={item.id}
              className={styles.item}
            >
              <div
                className={
                  styles.imageWrapper
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="
                    (max-width: 700px) 50vw,
                    (max-width: 1000px) 50vw,
                    33vw
                  "
                  className={styles.image}
                  onError={() =>
                    handleImageError(
                      item.id
                    )
                  }
                />
              </div>
            </figure>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>
            Nenhuma fotografia disponível
            nesta categoria.
          </p>
        </div>
      )}

      {/* VER MAIS */}
      {hasMore && (
        <div
          className={
            styles.loadMoreWrapper
          }
        >
          <button
            type="button"
            className={styles.loadMore}
            onClick={handleLoadMore}
          >
            <span>
              Ver mais fotografias
            </span>

            <span aria-hidden="true">
              ↓
            </span>
          </button>
        </div>
      )}
    </div>
  );
}