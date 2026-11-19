import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";

import styles from "./page.module.css";

const principles = [
  {
    number: "01",
    title: "Naturalidade",
    text: "Menos poses prontas e mais espaço para que cada pessoa continue sendo ela mesma.",
  },
  {
    number: "02",
    title: "Presença",
    text: "Estar atenta ao que acontece entre os grandes momentos também faz parte da fotografia.",
  },
  {
    number: "03",
    title: "Sensibilidade",
    text: "Gestos, detalhes e relações ajudam a contar aquilo que uma imagem sozinha nem sempre explica.",
  },
  {
    number: "04",
    title: "Direção",
    text: "Quando necessário, pequenas orientações ajudam a trazer segurança sem tirar a espontaneidade.",
  },
];

export default function SobrePage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Sobre</span>

              <h1 className={styles.heroTitle}>
                Quem está
                <br />
                por trás
                <br />
                da câmera?
              </h1>

              <p className={styles.heroIntroduction}>
                A fotografia, para mim, começa muito antes do clique: nasce na
                atenção aos detalhes e no cuidado desde o primeiro contato com
                cada cliente. Acredito que um atendimento de excelência é parte
                essencial da experiência fotográfica e representa o primeiro
                cartão de visita da minha marca.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/sobre/larissa.jpg"
                  alt="Retrato da fotógrafa"
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 46vw"
                  className={styles.heroImage}
                />
              </div>

              <span className={styles.imageIndex} aria-hidden="true">
                01
              </span>
            </div>
          </div>
        </section>

        <section className={styles.story}>
          <div className={styles.container}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span>Um pouco sobre mim</span>
            </div>

            <div className={styles.storyContent}>
              <p className={styles.storyLead}>
                Sou a Larissa, fotógrafa paulista e formada em Jornalismo.
              </p>

              <div className={styles.storyText}>
                <p>
                  Acredito no poder que a fotografia tem de eternizar
                  histórias, aproximar pessoas e transformar momentos especiais
                  em memórias que permanecem vivas ao longo do tempo.
                </p>

                <p>
                  Meu olhar está voltado para aquilo que acontece de forma
                  genuína: os afetos, os encontros, os sorrisos espontâneos,
                  os pequenos gestos e os detalhes que tornam cada história
                  única. Mais do que registrar imagens, busco capturar a
                  essência de cada momento e tudo aquilo que, muitas vezes,
                  as palavras não conseguem expressar.
                </p>

                <p>
                  Minha maneira de contar histórias através da fotografia é
                  leve, espontânea e descontraída. Acredito que as fotografias
                  mais bonitas nascem justamente quando nos permitimos viver
                  o momento.
                </p>

                <p>
                  Em cada registro, busco um tratamento de imagem harmônico e
                  delicado, respeitando a atmosfera, as cores e as emoções
                  vividas. Afinal, meu propósito não é apenas entregar
                  fotografias bonitas, mas proporcionar uma experiência
                  especial e criar lembranças nas quais você possa se
                  reconhecer, se emocionar e reviver sua história sempre
                  que olhar para elas.
                </p>

                <Link href="/portfolio" className={styles.textLink}>
                  <span>Conheça meu trabalho</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approach}>
          <div className={styles.approachContainer}>
            <div className={styles.approachVisual}>
              <Image
                src="/images/brand/polaroid.jpg"
                alt="Fotógrafa segurando uma câmera instantânea"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
                className={styles.approachImage}
              />

              <div
                className={styles.approachImageOverlay}
                aria-hidden="true"
              />

              <div className={styles.approachVisualLabel}>
                <span>02</span>
                <span>Meu jeito de fotografar</span>
              </div>
            </div>

            <div className={styles.approachContent}>
              <span className={styles.approachEyebrow}>O olhar</span>

              <h2 className={styles.approachTitle}>
                Fotografar sem
                <br />
                interromper
                <br />
                o momento.
              </h2>

              <p className={styles.approachIntroduction}>
                Cada história pede um ritmo diferente. Meu trabalho é observar,
                perceber quando dirigir e saber quando simplesmente deixar
                acontecer.
              </p>

              <div className={styles.principles}>
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className={styles.principle}
                  >
                    <span className={styles.principleNumber}>
                      {principle.number}
                    </span>

                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}