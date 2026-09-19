"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import FeaturedCollections from "@/components/portfolio/FeaturedCollections";
import PortfolioGrid, {
  type ActiveCategory,
  type ActiveCollection,
} from "@/components/portfolio/PortfolioGrid";
import PortfolioHighlights from "@/components/portfolio/PortfolioHighlights";

import type { PortfolioSelection } from "@/data/portfolio-featured";

import styles from "./PortfolioExperience.module.css";

export default function PortfolioExperience() {
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
    setActiveCategory(category);
    setActiveCollection("todos");
  }

  return (
    <>
      <PortfolioHighlights
        onSelect={handleSelection}
      />

      <FeaturedCollections
        onSelect={handleSelection}
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
                Navegue pelos diferentes
                trabalhos e encontre a
                fotografia que mais se
                aproxima do que você
                procura.
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
              setActiveCollection
            }
          />
        </div>
      </section>

      <section
        className={styles.closing}
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
                Conversar com a Larissa
              </span>

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}