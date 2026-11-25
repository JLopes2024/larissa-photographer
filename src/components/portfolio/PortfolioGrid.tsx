"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  portfolioCategories,
  portfolioCollections,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioCollection,
} from "@/data/portfolio";

export type ActiveCategory = PortfolioCategory | "todos";
export type ActiveCollection = PortfolioCollection | "todos";

function galleryUrl(
  category: ActiveCategory,
  collection?: PortfolioCollection
) {
  const params = new URLSearchParams();

  if (category !== "todos") params.set("categoria", category);
  if (collection) params.set("colecao", collection);

  const query = params.toString();

  return `/portfolio${query ? `?${query}` : ""}#explore-portfolio`;
}

const albums = portfolioCategories.flatMap(({ value }) => {
  if (value === "todos") return [];

  const collections =
    value === "profissional"
      ? [{ label: "Profissional", value: "profissional" as const }]
      : portfolioCollections[value] ?? [];

  return collections.map((collection) => {
    const photos = portfolioItems
      .filter(
        (photo) =>
          photo.collection === collection.value &&
          photo.src !== "/images/religiosos/batizado/batizadocapa.jpg"
      )
      .map((photo) => {
        // Dimensões conferidas nas imagens do catálogo original.
        if (photo.src.endsWith("/batizado2.jpg")) {
          return { ...photo, width: 1200, height: 1573 };
        }

        if (photo.src.endsWith("/batizado3.jpg")) {
          return { ...photo, width: 1365, height: 2048 };
        }

        return photo;
      });

    if (value === "religiosos") {
      photos.sort(
        (a, b) =>
          Number(Boolean(b.cover)) - Number(Boolean(a.cover)) ||
          a.src.localeCompare(b.src, "pt-BR", { numeric: true })
      );
    }

    const rows = [];

    for (let index = 0; index < photos.length; index += 2) {
      rows.push(photos.slice(index, index + 2));
    }

    return {
      ...collection,
      category: value,
      rows,
      photos,
      cover: photos.find((photo) => photo.cover) ?? photos[0],
    };
  });
});

export default function PortfolioGrid({
  activeCategory,
  activeCollection,
  onCategoryChange,
}: {
  activeCategory: ActiveCategory;
  activeCollection: ActiveCollection;
  onCategoryChange?: (category: ActiveCategory) => void;
  onCollectionChange?: (collection: ActiveCollection) => void;
}) {
  const collection = useSearchParams().get("colecao") ?? activeCollection;

  const parentShowsBack =
    Boolean(onCategoryChange) && activeCollection !== "todos";

  const album = albums.find(
    (item) => item.category === activeCategory && item.value === collection
  );

  const visible = albums.filter(
    (item) => activeCategory === "todos" || item.category === activeCategory
  );

  const categoryLabel = portfolioCategories.find(
    (category) => category.value === activeCategory
  )?.label;

  return (
    <>
      <nav aria-label="Categorias do portfólio" className="portfolio-filters">
        {portfolioCategories.map(({ label, value }) => (
          <Link
            key={value}
            href={galleryUrl(value)}
            aria-current={activeCategory === value ? "true" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      {album ? (
        <section aria-labelledby="album-title">
          {!parentShowsBack && (
            <Link className="portfolio-back" href={galleryUrl(activeCategory)}>
              ← Álbuns de {categoryLabel}
            </Link>
          )}

          <h3 id="album-title" className="portfolio-title">
            {album.label}
          </h3>

          <p className="portfolio-count">{album.photos.length} fotografias</p>

          <div className="portfolio-photos">
            {album.rows.map((row) => (
              <div key={row[0].id} className="portfolio-photoRow">
                {row.map((photo) => (
                  <figure
                    key={photo.id}
                    style={{ flexGrow: photo.width / photo.height }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 700px) 100vw, (max-width: 1350px) 72vw, 920px"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <ul className="portfolio-albums">
          {visible.map(
            ({ value, category, label, cover, photos }) =>
              cover && (
                <li key={value}>
                  <Link
                    className="portfolio-card"
                    href={galleryUrl(category, value)}
                  >
                    <div className="portfolio-cover">
                      <Image
                        src={cover.src}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1350px) 50vw, 630px"
                      />
                    </div>

                    <div className="portfolio-caption">
                      <h3 className="portfolio-title">{label}</h3>
                      <span className="portfolio-count">
                        {photos.length} fotos <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
          )}
        </ul>
      )}

      <style jsx global>{`
        .portfolio-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0 1.4rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
        }

        .portfolio-filters a,
        .portfolio-back {
          display: inline-block;
          padding: 0.8rem 0;
          color: var(--color-muted);
        }

        .portfolio-filters a[aria-current],
        .portfolio-filters a:hover,
        .portfolio-back:hover {
          color: var(--color-primary);
          text-decoration: underline;
          text-underline-offset: 0.4em;
        }

        .portfolio-albums {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
          gap: clamp(1.25rem, 3vw, 3rem);
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .portfolio-card {
          display: block;
        }

        .portfolio-card:hover .portfolio-title {
          color: var(--color-primary);
        }

        .portfolio-cover {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--color-secondary);
        }

        .portfolio-cover img {
          object-fit: cover;
          object-position: center 38%;
        }

        .portfolio-caption {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .portfolio-title {
          font-family: var(--font-editorial), Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.05;
        }

        .portfolio-count {
          color: var(--color-muted);
          font-size: 0.85rem;
        }

        .portfolio-photos {
          --photo-gap: clamp(8px, 1.2vw, 18px);
          display: grid;
          gap: var(--photo-gap);
          margin-top: 1.5rem;
        }

        .portfolio-photoRow {
          display: flex;
          gap: var(--photo-gap);
        }

        .portfolio-photoRow figure {
          flex-basis: 0;
          min-width: 0;
          margin: 0;
        }

        .portfolio-photoRow figure:only-child {
          max-width: 70%;
          margin-inline: auto;
        }

        .portfolio-photos img {
          display: block;
          width: 100%;
          height: auto;
        }

        .portfolio-filters a:focus-visible,
        .portfolio-back:focus-visible,
        .portfolio-card:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 3px;
        }

        @media (max-width: 700px) {
          .portfolio-albums {
            grid-template-columns: 1fr;
          }

          .portfolio-photoRow {
            flex-direction: column;
          }

          .portfolio-photoRow figure {
            flex-basis: auto;
          }

          .portfolio-photoRow figure:only-child {
            max-width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}