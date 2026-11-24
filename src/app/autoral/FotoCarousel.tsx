"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

type Foto = {
  src: string;
  alt: string;
};

type FotoCarouselProps = {
  titulo: string;
  fotos: Foto[];
  formato: "vertical" | "horizontal";
};

const INTERVALO_MS = 6000;
const CONSULTA_MOVIMENTO = "(prefers-reduced-motion: reduce)";

function observarPreferenciaDeMovimento(atualizar: () => void) {
  const consulta = window.matchMedia(CONSULTA_MOVIMENTO);

  consulta.addEventListener("change", atualizar);

  return () => consulta.removeEventListener("change", atualizar);
}

function prefereMovimentoReduzido() {
  return window.matchMedia(CONSULTA_MOVIMENTO).matches;
}

export default function FotoCarousel({
  titulo,
  fotos,
  formato,
}: FotoCarouselProps) {
  const [indice, definirIndice] = useState(0);
  const [reproducaoManual, definirReproducaoManual] = useState<boolean | null>(
    null
  );

  const movimentoReduzido = useSyncExternalStore(
    observarPreferenciaDeMovimento,
    prefereMovimentoReduzido,
    () => true
  );

  const total = fotos.length;
  const reproduzindo = reproducaoManual ?? !movimentoReduzido;

  useEffect(() => {
    if (!reproduzindo || total < 2) return;

    const temporizador = window.setInterval(() => {
      if (!document.hidden) {
        definirIndice((atual) => (atual + 1) % total);
      }
    }, INTERVALO_MS);

    return () => window.clearInterval(temporizador);
  }, [reproduzindo, total]);

  if (total === 0) return null;

  const indiceAtual = indice % total;
  const foto = fotos[indiceAtual];

  function navegar(passo: number) {
    definirReproducaoManual(false);
    definirIndice((atual) => (atual + passo + total) % total);
  }

  return (
    <section
      className="carousel"
      data-formato={formato}
      aria-label={`Fotografias do ${titulo}`}
      aria-roledescription="carrossel"
    >
      <div className="quadro">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          sizes={
            formato === "vertical"
              ? "(max-width: 480px) 100vw, 480px"
              : "(max-width: 700px) 100vw, (max-width: 1280px) 50vw, 640px"
          }
          style={{ objectFit: "contain" }}
        />
      </div>

      {total > 1 && (
        <div className="controles">
          <button
            type="button"
            className="reproducao"
            onClick={() => definirReproducaoManual(!reproduzindo)}
          >
            {reproduzindo ? "Pausar" : "Reproduzir"}
          </button>

          <div className="navegacao">
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => navegar(-1)}
            >
              ←
            </button>

            <span aria-live={reproduzindo ? "off" : "polite"} aria-atomic="true">
              {indiceAtual + 1} de {total}
            </span>

            <button
              type="button"
              aria-label="Próxima foto"
              onClick={() => navegar(1)}
            >
              →
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .carousel {
          grid-column: 2;
          justify-self: start;
          width: min(100%, 480px);
          min-width: 0;
        }

        .carousel[data-formato="horizontal"] {
          width: min(100%, 640px);
        }

        .quadro {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
        }

        .carousel[data-formato="horizontal"] .quadro {
          aspect-ratio: 3 / 2;
        }

        .controles,
        .navegacao {
          display: flex;
          align-items: center;
        }

        .controles {
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          padding-top: 4px;
          border-top: 1px solid var(--color-border);
        }

        .navegacao {
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

        .reproducao {
          color: var(--color-primary);
          font-size: 0.69rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .navegacao button {
          font-size: 1.25rem;
        }

        .navegacao span {
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