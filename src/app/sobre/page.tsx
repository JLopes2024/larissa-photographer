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

const testimonials = [
  {
    number: "01",
    text: "Lari, eu me senti tão confortável fazendo o ensaio com você. Me guiou sobre todas as poses, me ajudou por completo. Já indiquei para algumas amigas e com certeza farei outros ensaios com você!! ❤️",
  },
  {
    number: "02",
    text: "Apesar do dia chuvoso e algumas outras situações, você com a sua luz, dedicação, amor, seu olhar genuíno e a presença do Espírito Santo em suas palavras, tornou tudo mais leve! Conseguiu extrair de mim e transmitir nas fotos minha essência, tudo o que eu sou, tudo o que eu precisava ver. Você é um presente para mim e para todos que têm a oportunidade de te conhecer e ter por perto. Você é luz no mundo! ❤️",
  },
  {
    number: "03",
    text: "Obrigada pela sensibilidade em capturar o que eu realmente gostaria nessa nova fase. 🥹",
  },
];

export default function SobrePage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Sobre
              </span>

              <h1 className={styles.heroTitle}>
                Quem está
                <br />
                por trás
                <br />
                da câmera.
              </h1>

              <p className={styles.heroIntroduction}>
                Fotografia, para mim, começa antes do clique:
                começa na atenção, no encontro e naquilo que
                acontece quando as pessoas podem simplesmente
                estar presentes.
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

              <span
                className={styles.imageIndex}
                aria-hidden="true"
              >
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
                Sou a Larissa, fotógrafa paulista e formada em
                Jornalismo.
              </p>

              <div className={styles.storyText}>
                <p>
                  Acredito no poder das imagens de guardar
                  histórias, aproximar pessoas e transformar
                  momentos em memórias que continuam presentes
                  com o passar do tempo.
                </p>

                <p>
                  Meu olhar procura aquilo que acontece de
                  verdade: os afetos, os encontros, os pequenos
                  gestos e os detalhes que tornam cada história
                  diferente de todas as outras.
                </p>

                <Link
                  href="/portfolio"
                  className={styles.textLink}
                >
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
              <span className={styles.approachEyebrow}>
                O olhar
              </span>

              <h2 className={styles.approachTitle}>
                Fotografar sem
                <br />
                interromper
                <br />
                o momento.
              </h2>

              <p className={styles.approachIntroduction}>
                Cada história pede um ritmo diferente. Meu
                trabalho é observar, perceber quando dirigir e
                saber quando simplesmente deixar acontecer.
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

        <div className={styles.testimonials}>
  {testimonials.map((testimonial) => (
    <blockquote
      key={testimonial.number}
      className={styles.testimonial}
    >
      <div className={styles.testimonialTop}>
        <span className={styles.testimonialNumber}>
          {testimonial.number}
        </span>

        <span
          className={styles.quoteMark}
          aria-hidden="true"
        >
          “
        </span>
      </div>

      <p>{testimonial.text}</p>

      <footer className={styles.testimonialFooter}>
        Cliente Larissa Photographer
      </footer>
    </blockquote>
  ))}
</div>

        <section className={styles.closing}>
          <div className={styles.closingContainer}>
            <span className={styles.closingEyebrow}>
              Vamos conversar
            </span>

            <div className={styles.closingContent}>
              <h2 className={styles.closingTitle}>
                Uma boa fotografia
                <br />
                começa antes
                <br />
                do clique.
              </h2>

              <div className={styles.closingAction}>
                <p>
                  Se você se identifica com esse jeito de
                  fotografar, quero conhecer a sua história.
                </p>

                <Link
                  href="/contato"
                  className={styles.closingLink}
                >
                  <span>Conversar com  Larissa</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}