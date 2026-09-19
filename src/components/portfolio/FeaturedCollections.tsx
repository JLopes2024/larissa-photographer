"use client";

import Image from "next/image";

import {
  featuredCollections,
  type PortfolioSelection,
} from "@/data/portfolio-featured";

import styles from "./FeaturedCollections.module.css";

type FeaturedCollectionsProps = {
  onSelect: (
    selection: PortfolioSelection
  ) => void;
};

const layoutClasses = {
  leftTall: styles.leftTall,
  rightWide: styles.rightWide,
  leftWide: styles.leftWide,
  rightTall: styles.rightTall,
} as const;

export default function FeaturedCollections({
  onSelect,
}: FeaturedCollectionsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>
          Trabalhos em destaque
        </span>

        <h2 className={styles.title}>
          Algumas histórias
          <br />
          pedem mais espaço.
        </h2>
      </div>

      <div className={styles.composition}>
        {featuredCollections.map(
          (item) => (
            <article
              key={item.id}
              className={`${styles.item} ${
                layoutClasses[item.layout]
              }`}
            >
              <button
                type="button"
                className={
                  styles.collectionButton
                }
                onClick={() =>
                  onSelect(item.selection)
                }
                aria-label={`Explorar ${item.title}`}
              >
                <div
                  className={
                    styles.imageWrapper
                  }
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="
                      (max-width: 700px) 100vw,
                      (max-width: 1100px) 70vw,
                      55vw
                    "
                    className={
                      styles.image
                    }
                    style={{
                      objectPosition:
                        item.objectPosition,
                    }}
                  />
                </div>

                <div
                  className={
                    styles.information
                  }
                >
                  <span
                    className={
                      styles.number
                    }
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3
                      className={
                        styles.itemTitle
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className={
                        styles.description
                      }
                    >
                      {item.description}
                    </p>
                  </div>

                  <span
                    className={
                      styles.arrow
                    }
                    aria-hidden="true"
                  >
                    ↘
                  </span>
                </div>
              </button>
            </article>
          )
        )}
      </div>
    </section>
  );
}