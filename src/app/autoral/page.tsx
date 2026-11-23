import Image from "next/image";

import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Autoral",
  description:
    "Conheça os projetos autorais de Larissa Photographer e suas participações em festivais de fotografia.",
  path: "/autoral",
});

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

const projetos = [
  {
    id: "ana-flavia",
    titulo: "Ensaio com a Ana Flávia",
    paragrafos: [
      "", // Como surgiu a ideia do ensaio?
      "", // Como foi fotografar a Ana Flávia?
      "", // O que a Larissa quis mostrar com a série final?
    ],
  },
  {
    id: "projeto-integrador",
    titulo: "Projeto Integrador",
    paragrafos: [
      "", // Qual era o tema ou a pergunta que deu origem ao projeto?
      "", // Como a Larissa desenvolveu o trabalho e qual foi o resultado?
    ],
  },
];

const festivais = [
  {
    id: "fau-fest",
    titulo: "FAU FEST",
    ano: "", // Preencher o ano da participação.
    participacao: "", // Escrever como a Larissa participou.
    relato: "", // Contar a experiência nas palavras da Larissa.
  },
  {
    id: "tiradentes",
    titulo: "15º Festival de Fotografia de Tiradentes",
    ano: "2026",
    participacao: "",
    relato: "",
  },
];

export default function AutoralPage() {
  return (
    <>
      <main className={styles.page}>
        <header className={styles.intro}>
          <div className={styles.container}>
            <h1 className={styles.title}>Autoral</h1>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="titulo-projetos">
          <div className={styles.container}>
            <h2 id="titulo-projetos" className={styles.sectionTitle}>
              Projetos autorais
            </h2>

            {projetos.map((projeto) => (
              <article id={projeto.id} key={projeto.id} className={styles.entry}>
                <h3 className={styles.entryTitle}>{projeto.titulo}</h3>

                {projeto.paragrafos.some((texto) => texto.trim()) && (
                  <div className={styles.copy}>
                    {projeto.paragrafos.map((texto, indice) =>
                      texto.trim() ? <p key={indice}>{texto}</p> : null
                    )}
                  </div>
                )}

                {projeto.id === "ana-flavia" && (
                  <div className={styles.gallery}>
                    {fotosAnaFlavia.map((foto) => (
                      <Image
                        key={foto.src}
                        src={foto.src}
                        alt={foto.alt}
                        width={foto.width}
                        height={foto.height}
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="titulo-festivais">
          <div className={styles.container}>
            <h2 id="titulo-festivais" className={styles.sectionTitle}>
              Festivais
            </h2>

            {festivais.map((festival) => (
              <article key={festival.id} className={styles.entry}>
                <div>
                  {festival.ano && (
                    <p className={styles.year}>{festival.ano}</p>
                  )}

                  <h3 className={styles.entryTitle}>{festival.titulo}</h3>
                </div>

                {(festival.participacao || festival.relato) && (
                  <div className={styles.copy}>
                    {festival.participacao && (
                      <p className={styles.participation}>
                        {festival.participacao}
                      </p>
                    )}

                    {festival.relato && <p>{festival.relato}</p>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}