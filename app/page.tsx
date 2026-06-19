import Image from "next/image";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Icon } from "./components/site-icon";
import { faqItems, faqSchema, seoPages, whatsappUrl } from "./seo-pages";

const heroDifferentials = [
  { icon: "clock", title: "Pontualidade", text: "Entregas no prazo que o seu negócio precisa." },
  { icon: "shield", title: "Segurança", text: "Sua carga protegida do início ao fim." },
  { icon: "settings", title: "Agilidade", text: "Processos inteligentes para mais eficiência." },
  { icon: "users", title: "Atendimento", text: "Relacionamento próximo e transparente." },
] as const;

const audiences = [
  "Indústrias",
  "Distribuidores",
  "Empresas",
  "Centros de distribuição",
  "Gerentes de logística",
  "Operações B2B",
];

const technologyCards = [
  { icon: "map", title: "Informações em tempo real", text: "Mais transparência e confiança." },
  { icon: "settings", title: "Processos otimizados", text: "Mais eficiência em cada etapa da operação." },
  { icon: "route", title: "Gestão inteligente", text: "Decisões mais rápidas, claras e precisas." },
  {
    icon: "users",
    title: "Foco no cliente",
    text: "Atendimento próximo e soluções que conectam o seu negócio ao destino.",
  },
] as const;

const processSteps = [
  "Solicitação",
  "Análise da operação",
  "Coleta",
  "Transporte acompanhado",
  "Entrega",
  "Confirmação",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  name: "Transportes Fink",
  description:
    "Transporte rodoviário para empresas com segurança, agilidade, compromisso e atuação no Sul e Sudeste do Brasil.",
  url: "https://transportesfink.com.br",
  telephone: "+55 51 99515-1674",
  email: "transportadorafink@gmail.com",
  sameAs: ["https://www.instagram.com/transportesfink/"],
  areaServed: ["Rio Grande do Sul", "Santa Catarina", "Paraná", "São Paulo"],
  serviceType: "Transporte rodoviário de cargas para empresas",
  address: { "@type": "PostalAddress", addressRegion: "RS", addressCountry: "BR" },
};

const businessInfo = [
  {
    title: "Transporte rodoviário para empresas",
    text:
      "A Transportes Fink atende empresas que precisam de transporte de cargas com planejamento, comunicação e compromisso. A operação é indicada para indústrias, distribuidores, centros de distribuição e equipes de logística que buscam um parceiro logístico B2B para rotas no Sul e Sudeste.",
  },
  {
    title: "Rotas e atuação",
    text:
      "O foco de atuação está em Rio Grande do Sul, Santa Catarina, Paraná e São Paulo. Esse corredor conecta polos industriais, fornecedores, centros de distribuição e clientes empresariais que dependem de transporte interestadual com entrega segura e pontualidade.",
  },
  {
    title: "Carga fracionada e carga fechada",
    text:
      "Cada operação pode exigir uma solução diferente. A carga fracionada pode atender volumes menores e embarques recorrentes, enquanto a carga fechada pode ser indicada para demandas com maior volume, prazo específico ou necessidade de controle dedicado.",
  },
  {
    title: "Como preparar uma cotação",
    text:
      "Para solicitar um frete empresarial, informe origem, destino, tipo de carga, peso, volume, prazo desejado, frequência de embarque e condições de coleta ou entrega. Esses dados ajudam a construir uma proposta mais precisa e alinhada à operação logística.",
  },
] as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()).replace(/</g, "\\u003c") }}
      />
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <section id="inicio" className="hero">
          <Image
            src="/images/hero-truck.png"
            alt="Caminhão em rodovia ao pôr do sol representando transporte rodoviário empresarial da Transportes Fink"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-aurora" />
          <div className="shell hero-grid">
            <div className="hero-content reveal">
              <span className="eyebrow">Logística rodoviária B2B</span>
              <h1>Movemos o que move o <em>Brasil.</em></h1>
              <p>
                Transporte rodoviário para empresas que não podem parar. Do Rio Grande do Sul a
                São Paulo, com segurança, agilidade e compromisso.
              </p>
              <div className="hero-actions">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Solicitar cotação <Icon name="arrow" />
                </a>
                <a href="#quem-somos" className="btn btn-secondary">Conheça a Fink</a>
              </div>
            </div>
            <div className="hero-panel reveal reveal-delay" aria-label="Resumo operacional">
              <div><span>Atuação estratégica</span><strong>RS - SC - PR - SP</strong></div>
              <div><span>Operação</span><strong>Empresas e cargas B2B</strong></div>
            </div>
          </div>
          <div className="shell hero-differentials">
            {heroDifferentials.map((item) => (
              <article className="mini-card" key={item.title}>
                <Icon name={item.icon} />
                <div><h2>{item.title}</h2><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="visao" className="section intro-section">
          <div className="shell split-grid">
            <div className="section-kicker reveal">Visão operacional</div>
            <div className="reveal reveal-delay">
              <h2>Logística com inteligência, compromisso e presença.</h2>
              <p className="lead">
                A Transportes Fink atende empresas que precisam de uma operação logística
                confiável, ágil e bem acompanhada. Mais do que transportar cargas, entregamos
                previsibilidade, segurança e tranquilidade para cada etapa da sua operação.
              </p>
            </div>
          </div>
        </section>

        <section id="quem-somos" className="section audience-section">
          <div className="shell section-head reveal">
            <span className="eyebrow">A Fink</span>
            <h2>Feita para empresas que exigem mais da logística.</h2>
          </div>
          <div className="shell audience-grid">
            {audiences.map((audience) => (
              <article className="glass-card audience-card reveal" key={audience}>
                <Icon name="check" />
                <h3>{audience}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="compromisso" className="section assurance-section">
          <div className="shell assurance-layout">
            <div className="assurance-media reveal">
              <Image
                src="/images/fleet-yard.png"
                alt="Frota da Transportes Fink pronta para operações empresariais"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="media-cover"
              />
            </div>
            <div className="assurance-copy reveal reveal-delay">
              <span className="eyebrow">Compromisso</span>
              <h2>Segurança, pontualidade e acompanhamento de ponta a ponta.</h2>
              <p>
                Atendimento próximo, decisões rápidas e rotas planejadas para dar previsibilidade
                à sua operação. A carga viaja com cobertura, cuidado e responsabilidade do primeiro
                contato até a confirmação.
              </p>
              <div className="insurance-list">
                <div><strong>RCTR-C</strong><span>Responsabilidade Civil do Transportador Rodoviário de Cargas</span></div>
                <div><strong>RCF-DC</strong><span>Responsabilidade Civil Facultativa por Desaparecimento de Carga</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="tecnologia" className="section technology-section">
          <div className="shell section-head reveal">
            <span className="eyebrow">Tecnologia e gestão</span>
            <h2>Mais controle, mais transparência, mais eficiência.</h2>
            <p>
              Com novo site e novo sistema de gestão, a Transportes Fink evolui para oferecer uma
              experiência ainda mais clara, moderna e eficiente aos seus clientes e parceiros.
            </p>
          </div>
          <div className="shell technology-grid">
            {technologyCards.map((item) => (
              <article className="glass-card tech-card reveal" key={item.title}>
                <span className="icon-box"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="atuacao" className="route-section">
          <div className="route-image reveal">
            <Image
              src="/images/truck-route.png"
              alt="Caminhão em rota conectando empresas do Sul ao Sudeste"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="media-cover"
            />
          </div>
          <div className="route-content reveal reveal-delay">
            <span className="eyebrow">Atuação</span>
            <h2>Do Sul ao Sudeste, conectando empresas ao destino certo.</h2>
            <p>Operações rodoviárias com foco em Rio Grande do Sul, Santa Catarina, Paraná e São Paulo.</p>
            <div className="states-grid" aria-label="Estados atendidos">
              {["RS", "SC", "PR", "SP"].map((state) => <span key={state}>{state}</span>)}
            </div>
          </div>
        </section>

        <section id="frota" className="section process-section">
          <div className="shell process-layout">
            <div className="section-head reveal">
              <span className="eyebrow">Frota e processo</span>
              <h2>Uma operação clara do primeiro contato até a entrega.</h2>
            </div>
            <div className="process-list">
              {processSteps.map((step, index) => (
                <article className="process-step reveal" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="final-cta">
          <Image
            src="/images/hero-truck.png"
            alt="Rodovia ao pôr do sol com caminhão em operação logística"
            fill
            sizes="100vw"
            className="final-cta-image"
          />
          <div className="final-cta-overlay" />
          <div className="shell final-cta-content reveal">
            <span className="eyebrow">Contatar</span>
            <h2>Sua empresa precisa de uma transportadora parceira?</h2>
            <p>Fale com a Transportes Fink e solicite uma cotação para sua operação logística.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Solicitar cotação via WhatsApp <Icon name="whatsapp" />
            </a>
          </div>
        </section>

        <section className="seo-info-section" aria-labelledby="informacoes-empresas">
          <div className="shell seo-info-layout">
            <div className="seo-info-head">
              <span className="eyebrow">Informações para empresas</span>
              <h2 id="informacoes-empresas">Conteúdo útil para planejar transporte e frete empresarial.</h2>
              <p>
                Uma área discreta, visível e objetiva para apoiar gestores de logística,
                compradores, indústrias e distribuidores na avaliação de uma operação de transporte.
              </p>
            </div>
            <div className="accordion-list">
              {businessInfo.map((item, index) => (
                <details className="info-accordion" key={item.title} open={index === 0}>
                  <summary>{item.title}</summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="shell faq-layout">
            <div className="seo-info-head compact">
              <span className="eyebrow">FAQ</span>
              <h2>Perguntas frequentes</h2>
            </div>
            <div className="accordion-list">
              {faqItems.map((item) => (
                <details className="info-accordion" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="shell discreet-links" aria-label="Páginas informativas sobre transporte empresarial">
            {seoPages.map((page) => (
              <a href={`/${page.slug}`} key={page.slug}>
                {page.title}
              </a>
            ))}
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
