"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./TestimonialsCarousel.module.css";

const AUTOPLAY_DELAY = 6000;

const testimonials = [
  {
    id: 1,
    number: "01",
    text: "Lari, eu me senti tão confortável fazendo o ensaio com você. Me guiou sobre todas as poses, me ajudou por completo. Já indiquei para algumas amigas e com certeza farei outros ensaios com você!! ❤️",
  },
  {
    id: 2,
    number: "02",
    text: "Apesar do dia chuvoso e algumas outras situações, você com a sua luz, dedicação, amor, seu olhar genuíno e a presença do Espírito Santo em suas palavras, tornou tudo mais leve! Conseguiu extrair de mim e transmitir nas fotos minha essência, tudo o que eu sou, tudo o que eu precisava ver. Você é um presente para mim e para todos que têm a oportunidade de te conhecer e ter por perto. Você é luz no mundo! ❤️",
  },
  {
    id: 3,
    number: "03",
    text: "Obrigada pela sensibilidade em capturar o que eu realmente gostaria nessa nova fase. 🥹",
  },
];

export default function TestimonialsCarousel() {
  const viewportRef =
    useRef<HTMLDivElement>(null);

  const trackRef =
    useRef<HTMLDivElement>(null);

  const cardRefs =
    useRef<(HTMLElement | null)[]>([]);

  const scrollFrame =
    useRef<number | null>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const [pageVisible, setPageVisible] =
    useState(true);

  const [reducedMotion, setReducedMotion] =
    useState(false);

  const scrollToIndex = useCallback(
    (
      index: number,
      behavior: ScrollBehavior = "smooth"
    ) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const card = cardRefs.current[index];

      if (!viewport || !track || !card) {
        return;
      }

      const left =
        card.offsetLeft - track.offsetLeft;

      viewport.scrollTo({
        left,
        behavior,
      });
    },
    []
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function updatePreference() {
      setReducedMotion(
        mediaQuery.matches
      );
    }

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
    function handleVisibility() {
      setPageVisible(
        !document.hidden
      );
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
      paused ||
      !pageVisible ||
      reducedMotion
    ) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        const nextIndex =
          (activeIndex + 1) %
          testimonials.length;

        setActiveIndex(nextIndex);

        scrollToIndex(
          nextIndex,
          "smooth"
        );
      },
      AUTOPLAY_DELAY
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    paused,
    pageVisible,
    reducedMotion,
    scrollToIndex,
  ]);

  useEffect(() => {
    return () => {
      if (
        scrollFrame.current !== null
      ) {
        window.cancelAnimationFrame(
          scrollFrame.current
        );
      }
    };
  }, []);

  function handleScroll() {
    if (
      scrollFrame.current !== null
    ) {
      window.cancelAnimationFrame(
        scrollFrame.current
      );
    }

    scrollFrame.current =
      window.requestAnimationFrame(
        () => {
          const viewport =
            viewportRef.current;

          const track =
            trackRef.current;

          if (
            !viewport ||
            !track
          ) {
            return;
          }

          let nearestIndex = 0;

          let nearestDistance =
            Number.POSITIVE_INFINITY;

          cardRefs.current.forEach(
            (card, index) => {
              if (!card) {
                return;
              }

              const cardLeft =
                card.offsetLeft -
                track.offsetLeft;

              const distance =
                Math.abs(
                  viewport.scrollLeft -
                    cardLeft
                );

              if (
                distance <
                nearestDistance
              ) {
                nearestDistance =
                  distance;

                nearestIndex =
                  index;
              }
            }
          );

          setActiveIndex(
            nearestIndex
          );
        }
      );
  }

  function selectSlide(
    index: number
  ) {
    setActiveIndex(index);

    scrollToIndex(
      index,
      reducedMotion
        ? "auto"
        : "smooth"
    );
  }

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Depoimentos de clientes"
      onMouseEnter={() =>
        setPaused(true)
      }
      onMouseLeave={() =>
        setPaused(false)
      }
      onFocusCapture={() =>
        setPaused(true)
      }
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setPaused(false);
        }
      }}
    >
      <div className={styles.carouselTop}>
        <div className={styles.counter}>
          <span>
            {String(
              activeIndex + 1
            ).padStart(2, "0")}
          </span>

          <span
            className={
              styles.counterLine
            }
            aria-hidden="true"
          />

          <span>
            {String(
              testimonials.length
            ).padStart(2, "0")}
          </span>
        </div>

        <div className={styles.hint}>
          <span>
            Deslize para ver mais
          </span>

          <span aria-hidden="true">
            →
          </span>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={styles.viewport}
        onScroll={handleScroll}
      >
        <div
          ref={trackRef}
          className={styles.track}
        >
          {testimonials.map(
            (
              testimonial,
              index
            ) => {
              const isActive =
                activeIndex ===
                index;

              return (
                <blockquote
                  key={
                    testimonial.id
                  }
                  ref={(element) => {
                    cardRefs.current[
                      index
                    ] = element;
                  }}
                  className={`${styles.card} ${
                    isActive
                      ? styles.cardActive
                      : ""
                  }`}
                >
                  <span
                    className={
                      styles.quoteBg
                    }
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <div
                    className={
                      styles.cardHeader
                    }
                  >
                    <span
                      className={
                        styles.number
                      }
                    >
                      {
                        testimonial.number
                      }
                    </span>

                    <span
                      className={
                        styles.cardLabel
                      }
                    >
                      Depoimento
                    </span>
                  </div>

                  <p
                    className={
                      styles.text
                    }
                  >
                    “
                    {
                      testimonial.text
                    }
                    ”
                  </p>

                  <footer
                    className={
                      styles.author
                    }
                  >
                    Cliente Larissa
                    Photographer
                  </footer>
                </blockquote>
              );
            }
          )}
        </div>
      </div>

      <div className={styles.carouselBottom}>
        <div
          className={styles.pagination}
          aria-label="Selecionar depoimento"
        >
          {testimonials.map(
            (
              testimonial,
              index
            ) => {
              const isActive =
                activeIndex ===
                index;

              return (
                <button
                  key={
                    testimonial.id
                  }
                  type="button"
                  className={`${styles.dot} ${
                    isActive
                      ? styles.dotActive
                      : ""
                  }`}
                  aria-label={`Mostrar depoimento ${
                    index + 1
                  }`}
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                  onClick={() =>
                    selectSlide(
                      index
                    )
                  }
                >
                  <span />
                </button>
              );
            }
          )}
        </div>

        {!reducedMotion && (
          <div
            className={styles.progress}
            aria-hidden="true"
          >
            <span
              key={`${activeIndex}-${paused}`}
              className={`${styles.progressBar} ${
                paused
                  ? styles.progressPaused
                  : ""
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}