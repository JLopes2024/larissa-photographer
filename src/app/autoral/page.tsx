import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/seo";

import AnaFlaviaCarousel from "./AnaFlaviaCarousel";
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
    ano: "2026",
    participacao: "", // Como a Larissa participou do FAU FEST?
    relato: "", // Relato da Larissa sobre o festival.
  },
];

const premiacoes = [
  {
    id: "tiradentes",
    titulo: "15º Festival de Fotografia de Tiradentes",
    ano: "2026",
    participacao: "", // Nome do prêmio ou reconhecimento recebido.
    relato: "", // Relato sobre o trabalho premiado.
  },
];

const secoes = [
  { id: "festivais", titulo: "Festivais", itens: festivais },
  { id: "premiacoes", titulo: "Premiações", itens: premiacoes },
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
              <article
                id={projeto.id}
                key={projeto.id}
                className={styles.entry}
              >
                <h3 className={styles.entryTitle}>{projeto.titulo}</h3>

                {projeto.paragrafos.some((texto) => texto.trim()) && (
                  <div className={styles.copy}>
                    {projeto.paragrafos.map((texto, indice) =>
                      texto.trim() ? <p key={indice}>{texto}</p> : null
                    )}
                  </div>
                )}

                {projeto.id === "ana-flavia" && <AnaFlaviaCarousel />}
              </article>
            ))}
          </div>
        </section>

        {secoes.map((secao) => (
          <section
            key={secao.id}
            className={styles.section}
            aria-labelledby={`titulo-${secao.id}`}
          >
            <div className={styles.container}>
              {secao.itens.map((item, indice) => (
                <div key={item.id} className={styles.entry}>
                  <div>
                    {indice === 0 && (
                      <h2
                        id={`titulo-${secao.id}`}
                        className={`${styles.sectionTitle} ${styles.awardLabel}`}
                      >
                        {secao.titulo}
                      </h2>
                    )}

                    <h3 className={styles.entryTitle}>
                      {item.titulo}
                      {item.ano && (
                        <span className={styles.inlineYear}>
                          {"\u00A0"}({item.ano})
                        </span>
                      )}
                    </h3>
                  </div>

                  {(item.participacao || item.relato) && (
                    <div className={styles.copy}>
                      {item.participacao && (
                        <p className={styles.participation}>
                          {item.participacao}
                        </p>
                      )}

                      {item.relato && <p>{item.relato}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}