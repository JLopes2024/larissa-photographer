import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça as experiências fotográficas oferecidas pela Larissa Photographer: ensaios, casais, aniversários, fotografia profissional, eventos, cerimônias religiosas e cobertura com Polaroid.",
};

const services = [
  {
    number: "01",
    title: "Experiência fotográfica individual",
    description:
      "Um ensaio pensado para registrar sua essência, sua história e tudo aquilo que faz você ser única.",
  },
  {
    number: "02",
    title: "Experiência fotográfica de casal",
    description:
      "Um registro leve e verdadeiro da conexão, do carinho e da história construída entre vocês.",
  },
  {
    number: "03",
    title: "Experiência fotográfica de aniversário",
    description:
      "Para celebrar novos ciclos com imagens espontâneas, sensíveis e cheias de significado.",
  },
  {
    number: "04",
    title: "Posicionamento de imagem ou profissional",
    description:
      "Retratos para fortalecer sua imagem profissional, sua presença e a identidade da sua marca.",
  },
  {
    number: "05",
    title: "Cobertura fotográfica de eventos",
    description:
      "Registros atentos e espontâneos para preservar encontros, celebrações e momentos importantes.",
  },
  {
    number: "06",
    title: "Eventos religiosos",
    description:
      "Batizados, casamentos, eucaristias e celebrações registradas com respeito, delicadeza e sensibilidade.",
  },
];

const faqs = [
  {
    question:
      "As fotos da Polaroid são reveladas na hora?",
    answer:
      "Sim. A fotografia é impressa no momento e a imagem aparece gradualmente nos minutos seguintes ao registro.",
  },
  {
    question:
      "Como os convidados participam?",
    answer:
      "A experiência pode ser integrada ao evento para que os convidados sejam fotografados e levem consigo uma lembrança física daquele momento.",
  },
  {
    question:
      "O álbum pode seguir a identidade do evento?",
    answer:
      "Sim. A apresentação pode ser planejada para conversar com a estética e a identidade visual da celebração.",
  },
  {
    question:
      "Como funciona a reserva?",
    answer:
      "A data é reservada após o alinhamento dos detalhes do evento e a confirmação das condições combinadas para a contratação.",
  },
  {
    question:
      "Quais são as formas de pagamento?",
    answer:
      "As condições e formas de pagamento são informadas no orçamento, de acordo com o serviço e a cobertura escolhida.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              Serviços
            </span>

            <div className={styles.heroHeading}>
              <h1 className={styles.title}>
                Experiências
                <br />
                <em>fotográficas</em>
              </h1>

              <div className={styles.heroText}>
                <p>
                  Mais do que fotografar, quero criar uma
                  experiência que faça sentido para a sua história.
                </p>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.heroCta}
                >
                  <span>Solicitar orçamento</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionLabel}>
                O que eu fotografo
              </span>

              <h2>
                Histórias diferentes,
                <br />
                o mesmo cuidado.
              </h2>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <article
                  key={service.number}
                  className={styles.service}
                >
                  <span className={styles.serviceNumber}>
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.polaroidSection}>
          <div className={styles.container}>
            <div className={styles.polaroidVisual}>
              <div className={styles.polaroidImageWrapper}>
                <Image
                  src="/images/brand/polaroid.jpg"
                  alt="Cobertura fotográfica com Polaroid"
                  fill
                  sizes="(max-width: 700px) 100vw, 40vw"
                  className={styles.polaroidImage}
                />
              </div>
            </div>

            <div className={styles.polaroidContent}>
              <span className={styles.sectionLabel}>
                Experiência especial
              </span>

              <h2>
                Cobertura fotográfica
                <br />
                com <em>Polaroid</em>
              </h2>

              <p className={styles.polaroidLead}>
                Além dos registros digitais, seus convidados
                podem levar uma fotografia impressa como
                lembrança daquele momento.
              </p>

              <div className={styles.polaroidText}>
                <p>
                  A proposta transforma a fotografia em parte
                  da experiência do evento: a imagem é feita,
                  impressa e entregue ali mesmo.
                </p>

                <p>
                  É uma opção especialmente interessante para
                  casamentos, aniversários, eventos corporativos
                  e celebrações que buscam uma lembrança afetiva
                  e física.
                </p>
              </div>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryCta}
              >
                <span>
                  Quero solicitar meu orçamento
                </span>

                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqHeading}>
              <span className={styles.sectionLabel}>
                Dúvidas frequentes
              </span>

              <h2>
                Antes de
                <br />
                fotografarmos.
              </h2>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className={styles.faqItem}
                  open={index === 0}
                >
                  <summary>
                    <span>{faq.question}</span>

                    <span
                      className={styles.faqIcon}
                      aria-hidden="true"
                    />
                  </summary>

                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <span className={styles.sectionLabel}>
              Vamos conversar?
            </span>

            <h2>
              Sua história merece
              <br />
              ser <em>lembrada.</em>
            </h2>

            <p>
              Me conte sobre o que você está planejando e vamos
              pensar juntas na melhor forma de registrar esse momento.
            </p>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className={styles.finalButton}
            >
              <span>
                Quero solicitar meu orçamento
              </span>

              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}