"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const fotosAnaFlavia = [
  {
    src: "/images/ensaios/autoral/autoralcapa.jpg",
    alt: "Retrato de Ana Flávia com blusa branca",
    width: 1200,
    height: 1800,
  },
  {
    src: "/images/ensaios/autoral/autoral1.jpg",
    alt: "Ana Flávia de jaqueta jeans junto a um poste",
    width: 3456,
    height: 5184,
  },
  {
    src: "/images/ensaios/autoral/autoral2.jpg",
    alt: "Ana Flávia com os braços cruzados diante de uma fachada",
    width: 3456,
    height: 5184,
  },
  {
    src: "/images/ensaios/autoral/autoral3.jpg",
    alt: "Ana Flávia de vestido branco ao lado de um poste",
    width: 3456,
    height: 5184,
  },
  {
    src: "/images/ensaios/autoral/autoral4.jpg",
    alt: "Retrato de Ana Flávia em frente a uma porta escura",
    width: 3456,
    height: 5184,
  },
  {
    src: "/images/ensaios/autoral/autoral5.jpg",
    alt: "Ana Flávia de perfil com prédios ao fundo",
    width: 1200,
    height: 1800,
  },
  {
    src: "/images/ensaios/autoral/autoral6.jpg",
    alt: "Ana Flávia diante de uma entrada em arco",
    width: 1200,
    height: 1800,
  },
];

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeMotion(notify: () => void) {
  const media = window.matchMedia(motionQuery);

  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
}

export default function AnaFlaviaCarousel() {
  const [index, setIndex] = useState(0);
  const [manualPlay, setManualPlay] = useState<boolean | null>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true
  );

  const playing = manualPlay ?? !reducedMotion;
  const total = fotosAnaFlavia.length;
  const foto = fotosAnaFlavia[index];

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % total);
      }
    }, 6000);

    return () => window.clearInterval(timer);
  }, [playing, total]);

  function move(step: number) {
    setManualPlay(false);
    setIndex((current) => (current + step + total) % total);
  }

  return (
    <section
      className="carousel"
      aria-label="Fotos do ensaio com a Ana Flávia"
    >
      <Image
        src={foto.src}
        alt={foto.alt}
        width={foto.width}
        height={foto.height}
        sizes="(max-width: 480px) 100vw, 480px"
        style={{ display: "block", width: "100%", height: "auto" }}
      />

      <div className="controls">
        <button type="button" onClick={() => setManualPlay(!playing)}>
          {playing ? "Pausar" : "Reproduzir"}
        </button>

        <div className="navigation">
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => move(-1)}
          >
            ←
          </button>

          <span aria-live={playing ? "off" : "polite"} aria-atomic="true">
            {index + 1} de {total}
          </span>

          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => move(1)}
          >
            →
          </button>
        </div>
      </div>

      <style jsx>{`
  .carousel {
    grid-column: 2;
    width: min(100%, 480px);
    min-width: 0;
    justify-self: start;
  }

  .controls,
  .navigation {
    display: flex;
    align-items: center;
  }

  .controls {
    justify-content: space-between;
    gap: 12px;
    margin-top: 12px;
    padding-top: 4px;
    border-top: 1px solid var(--color-border);
  }

  .navigation {
    gap: 4px;
  }

  button {
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--color-text);
    font: inherit;
    cursor: pointer;
  }

  .controls > button {
    color: var(--color-primary);
    font-size: 0.69rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .navigation button {
    font-size: 1.25rem;
  }

  .navigation span {
    min-width: 5ch;
    color: var(--color-muted);
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
    text-align: center;
    white-space: nowrap;
  }

  button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (hover: hover) {
    button:hover {
      color: var(--color-primary);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  @media (max-width: 700px) {
    .carousel {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
`}</style>
    </section>
  );
}