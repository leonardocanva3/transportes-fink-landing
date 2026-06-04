import Image from "next/image";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Icon } from "./components/site-icon";

const whatsappUrl = "https://wa.me/5551995151674?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Transportes%20Fink%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o.";
const jsonLd = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: "Transportes Fink",
  description: "Transporte rodoviário de cargas com segurança, agilidade e confiabilidade.",
  url: "https://transportesfink.com.br", telephone: "+55 51 99515-1674",
  email: "transportadorafink@gmail.com",
  sameAs: ["https://www.instagram.com/transportesfink/"],
  areaServed: ["Rio Grande do Sul", "Santa Catarina", "Paraná", "São Paulo"],
  serviceType: "Transporte rodoviário de cargas",
  address: { "@type": "PostalAddress", addressRegion: "RS", addressCountry: "BR" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <section id="inicio" className="cinema-hero">
          <Image src="/images/hero-truck.png" alt="Caminhão da Transportes Fink em rodovia" fill priority sizes="100vw" className="media-cover hero-media" />
          <div className="hero-shade" />
          <div className="hero-center"><h1>Movemos o que<br />move o Brasil.</h1></div>
          <div className="hero-bottom">
            <p>Transporte rodoviário para empresas que não podem parar.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-link">Contatar <Icon name="arrow" /></a>
          </div>
          <a href="#visao" className="hero-scroll" aria-label="Continuar"><span>Descubra</span><i /></a>
        </section>

        <section id="visao" className="manifesto">
          <div className="shell manifesto-grid">
            <p className="section-tag">01 · Nossa visão</p>
            <div>
              <h2>Distâncias não<br />devem limitar<br /><em>resultados.</em></h2>
              <p className="manifesto-copy">Conectamos operações, pessoas e negócios com uma logística precisa, segura e profundamente humana.</p>
              <a href="#atuacao" className="text-link">Conheça nossa atuação <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section id="quem-somos" className="story-image">
          <Image src="/images/fleet-yard.png" alt="Frota da Transportes Fink no centro logístico" fill sizes="100vw" className="media-cover" />
          <div className="story-shade" />
          <div className="story-copy"><p className="section-tag section-tag-light">02 · Transportes Fink</p><h2>Uma operação<br />construída sobre<br />confiança.</h2><p>Atendimento próximo. Decisões rápidas. Compromisso em cada quilômetro.</p></div>
          <div className="story-index">F / 02</div>
        </section>

        <section id="servicos" className="principles">
          <div className="shell">
            <div className="principles-head"><p className="section-tag">03 · Nosso compromisso</p><p>Uma logística nacional começa<br />com padrões inegociáveis.</p></div>
            <div className="principle-list">
              <div><span>01</span><h3>Segurança</h3><p>Cobertura completa de seguros e cuidado do início ao fim.</p></div>
              <div><span>02</span><h3>Pontualidade</h3><p>Rotas planejadas para entregar previsibilidade à sua operação.</p></div>
              <div><span>03</span><h3>Proximidade</h3><p>Uma equipe presente, acessível e pronta para responder.</p></div>
              <div><span>04</span><h3>Performance</h3><p>Frota preparada e soluções desenhadas para cada demanda.</p></div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="route">
          <div className="route-media"><Image src="/images/truck-route.png" alt="Caminhão em rota pelo Sul e Sudeste do Brasil" fill sizes="(max-width: 800px) 100vw, 50vw" className="media-cover" /></div>
          <div className="route-copy">
            <p className="section-tag section-tag-light">04 · Área de atuação</p><h2>Do Sul a<br />São Paulo.</h2>
            <p className="route-intro">Uma conexão estratégica entre quatro dos maiores centros econômicos do país.</p>
            <div className="route-states"><span><b>RS</b> Rio Grande do Sul</span><span><b>SC</b> Santa Catarina</span><span><b>PR</b> Paraná</span><span><b>SP</b> São Paulo</span></div>
          </div>
        </section>

        <section id="frota" className="fleet-cinema">
          <Image src="/images/fleet-yard.png" alt="Frota moderna para transporte rodoviário" fill sizes="100vw" className="media-cover fleet-media" />
          <div className="fleet-shade" />
          <div className="fleet-title"><p className="section-tag section-tag-light">05 · Estrutura</p><h2>Pronta para<br /><em>ir além.</em></h2></div>
          <p className="fleet-note">Veículos modernos.<br />Operação eficiente.<br />Movimento contínuo.</p>
        </section>

        <section className="assurance">
          <div className="shell assurance-grid">
            <p className="section-tag">06 · Proteção</p><h2>Sua carga<br /><em>segura.</em></h2>
            <div className="assurance-copy"><p>Toda operação Transportes Fink conta com cobertura completa.</p><div><span>RCTR-C</span><small>Responsabilidade Civil do Transportador Rodoviário de Cargas</small></div><div><span>RCF-DC</span><small>Responsabilidade Civil Facultativa por Desaparecimento de Carga</small></div></div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="contact-watermark">
            <Image src="/images/logo-transportes-fink.png" alt="Transportes Fink" width={1400} height={585} />
          </div>
          <div className="shell contact-inner">
            <p className="section-tag section-tag-light">07 · Vamos conversar</p><h2>Sua próxima<br />entrega começa<br /><em>aqui.</em></h2>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-action"><span><Icon name="whatsapp" /></span><div><small>Resposta rápida pelo WhatsApp</small><strong>Contatar</strong></div><Icon name="arrow" /></a>
            <div className="contact-secondary">
              <a href="https://www.instagram.com/transportesfink/" target="_blank" rel="noopener noreferrer" className="instagram-cta"><Icon name="instagram" /> Instagram</a>
              <a href="mailto:transportadorafink@gmail.com">transportadorafink@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer whatsappUrl={whatsappUrl} />
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar com a Transportes Fink no WhatsApp"><Icon name="whatsapp" /><span>Contatar</span></a>
    </>
  );
}
