import Image from "next/image";
import Link from "next/link";

import {
  portfolioCategories,
  portfolioCollections,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioCollection,
} from "@/data/portfolio";

import styles from "./PortfolioGrid.module.css";

export type ActiveCategory = PortfolioCategory | "todos";
export type ActiveCollection = PortfolioCollection | "todos";

function galleryUrl(category: ActiveCategory, collection?: PortfolioCollection) {
  const params = new URLSearchParams();
  if (category !== "todos") params.set("categoria", category);
  if (collection) params.set("colecao", collection);
  const query = params.toString();
  return `/portfolio${query ? `?${query}` : ""}#explore-portfolio`;
}

const albums = portfolioCategories.flatMap(({ value }) => {
  if (value === "todos") return [];
  return (portfolioCollections[value] ?? []).map((collection) => {
    const photos = portfolioItems.filter((photo) => photo.collection === collection.value);
    return { ...collection, category: value, photos, cover: photos.find((photo) => photo.cover) ?? photos[0] };
  });
});

export default function PortfolioGrid({ activeCategory, activeCollection }: {
  activeCategory: ActiveCategory;
  activeCollection: ActiveCollection;
}) {
  const album = albums.find((item) => item.category === activeCategory && item.value === activeCollection);
  const visible = albums.filter((item) => activeCategory === "todos" || item.category === activeCategory);
  const categoryLabel = portfolioCategories.find((category) => category.value === activeCategory)?.label;

  return (
    <>
      <nav aria-label="Categorias do portfólio" className={styles.filters}>
        {portfolioCategories.map(({ label, value }) => (
          <Link key={value} href={galleryUrl(value)} aria-current={activeCategory === value ? "true" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      {album ? (
        <section aria-labelledby="album-title">
          <Link className={styles.back} href={galleryUrl(activeCategory)}>← Álbuns de {categoryLabel}</Link>
          <h3 id="album-title" className={styles.title}>{album.label}</h3>
          <p className={styles.count}>{album.photos.length} fotografias</p>
          <ol className={styles.photos}>
            {album.photos.map((photo) => (
              <li key={photo.id}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1350px) 50vw, 630px" />
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <ul className={styles.albums}>
          {visible.map(({ value, category, label, cover, photos }) => cover && (
            <li key={value}>
              <Link className={styles.card} href={galleryUrl(category, value)}>
                <div className={styles.cover}>
                  <Image src={cover.src} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1350px) 50vw, 630px" />
                </div>
                <div className={styles.caption}>
                  <h3 className={styles.title}>{label}</h3>
                  <span className={styles.count}>{photos.length} fotos <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
