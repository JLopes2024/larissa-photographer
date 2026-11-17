import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Autoral",
  description:
    "Conheça os projetos autorais de Larissa Photographer e suas participações em festivais de fotografia.",
  path: "/autoral",
});

const projetos = [
  {
    id: "ana-flavia",
    titulo: "Ensaio com Ana Flávia",
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
    ano: "", // FAU FEST: preencher o ano da participação.
    participacao: "", // FAU FEST: escrever como a Larissa participou.
    relato: "", // FAU FEST: contar a experiência nas palavras da Larissa.
  },
  {
    id: "tiradentes",
    titulo: "15º Festival de Fotografia de Tiradentes",
    ano: "2026",
    participacao: "", // Preencher com o tipo de participação.
    relato: "", // Incluir o relato da Larissa sobre o festival.
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
              <article key={projeto.id} className={styles.entry}>
                <h3 className={styles.entryTitle}>{projeto.titulo}</h3>

                {projeto.paragrafos.some((texto) => texto.trim()) && (
                  <div className={styles.copy}>
                    {projeto.paragrafos.map((texto, indice) =>
                      texto.trim() ? <p key={indice}>{texto}</p> : null
                    )}
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