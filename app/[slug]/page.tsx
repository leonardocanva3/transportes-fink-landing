import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Icon } from "../components/site-icon";
import {
  faqItems,
  faqSchema,
  getSeoPage,
  organizationSchema,
  seoPages,
  serviceSchema,
  whatsappUrl,
} from "../seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `/${page.slug}`,
      siteName: "Transportes Fink",
      title: page.metaTitle,
      description: page.description,
      images: [
        {
          url: "/images/hero-truck.png",
          width: 1536,
          height: 1024,
          alt: "Transporte rodoviário empresarial da Transportes Fink",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: ["/images/hero-truck.png"],
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = page.related
    .map((relatedSlug) => getSeoPage(relatedSlug))
    .filter((relatedPage): relatedPage is NonNullable<typeof relatedPage> => Boolean(relatedPage));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), serviceSchema(page), faqSchema()],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <section className="seo-hero">
          <Image
            src="/images/hero-truck.png"
            alt="Caminhão em rodovia representando transporte rodoviário para empresas"
            fill
            priority
            sizes="100vw"
            className="seo-hero-image"
          />
          <div className="seo-hero-overlay" />
          <div className="shell seo-hero-content">
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.h1}</h1>
            <p>{page.intro}</p>
            <div className="hero-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Solicitar cotação <Icon name="whatsapp" />
              </a>
              <Link href="/" className="btn btn-secondary">
                Voltar para a Transportes Fink
              </Link>
            </div>
          </div>
        </section>

        <article className="seo-article">
          <div className="shell seo-article-grid">
            <aside className="seo-sidebar" aria-label="Resumo da página">
              <span>Conteúdo para empresas</span>
              <p>
                Informações visíveis e úteis para apoiar decisões sobre transportadora para
                empresas, transporte rodoviário, frete empresarial e operação logística B2B.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com a Fink <Icon name="arrow" />
              </a>
            </aside>

            <div className="seo-copy">
              {page.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section>
                <h2>Critérios práticos para contratar melhor</h2>
                <p>
                  Antes de fechar uma operação, a empresa pode avaliar se a transportadora entende
                  o tipo de carga, a rota, o prazo desejado e as exigências de recebimento. Também é
                  recomendável observar a clareza da comunicação, a capacidade de organizar coleta
                  programada, o cuidado com documentação e a forma como o atendimento orienta a
                  cotação. Esses pontos ajudam a evitar uma contratação baseada apenas em preço.
                </p>
                <p>
                  Para gestores de logística, compradores e equipes de supply chain, a melhor
                  parceria é aquela que reduz incertezas. Transporte de cargas envolve riscos,
                  agendas, pessoas e compromissos comerciais. Por isso, a Transportes Fink posiciona
                  sua atuação para empresas que buscam entrega segura, pontualidade, transparência
                  e relacionamento profissional em cada etapa do frete empresarial.
                </p>
              </section>

              <section>
                <h2>Como solicitar uma cotação com mais precisão</h2>
                <p>
                  Ao entrar em contato pelo WhatsApp, informe origem, destino, tipo de mercadoria,
                  peso aproximado, quantidade de volumes, dimensões, prazo desejado e frequência do
                  transporte. Se houver exigência de agendamento, doca, nota fiscal, seguro,
                  rastreamento de cargas ou confirmação de entrega, inclua essas informações desde
                  o início. Quanto mais claro for o cenário, mais objetiva será a análise.
                </p>
                <p>
                  A cotação também pode considerar se a operação é pontual ou recorrente, se exige
                  carga fracionada ou carga fechada e se envolve transporte interestadual entre RS,
                  SC, PR e SP. Esse cuidado permite alinhar expectativa, prazo e responsabilidade
                  antes da coleta, protegendo a rotina da empresa e facilitando a gestão logística.
                </p>
              </section>

              <section className="seo-faq">
                <h2>Perguntas frequentes</h2>
                {faqItems.map((item) => (
                  <details className="info-accordion" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>
            </div>
          </div>
        </article>

        <section className="seo-related">
          <div className="shell">
            <span className="eyebrow">Páginas relacionadas</span>
            <div className="related-grid">
              {relatedPages.map((relatedPage) => (
                <Link href={`/${relatedPage.slug}`} className="glass-card related-card" key={relatedPage.slug}>
                  <strong>{relatedPage.title}</strong>
                  <span>{relatedPage.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-cta">
          <div className="shell seo-cta-inner">
            <h2>Precisa planejar uma operação de transporte empresarial?</h2>
            <p>
              Fale com a Transportes Fink e envie os dados da sua carga para uma análise objetiva
              da sua necessidade logística.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Solicitar cotação via WhatsApp <Icon name="whatsapp" />
            </a>
          </div>
        </section>
      </main>
      <Footer whatsappUrl={whatsappUrl} />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Solicitar cotação com a Transportes Fink pelo WhatsApp"
      >
        <Icon name="whatsapp" />
        <span>Cotação</span>
      </a>
    </>
  );
}
