export const whatsappUrl =
  "https://wa.me/5551995151674?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Transportes%20Fink%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o.";

export const baseUrl = "https://transportesfink.com.br";

export const faqItems = [
  {
    question: "Como funciona o transporte rodoviário para empresas?",
    answer:
      "O transporte rodoviário para empresas começa com o entendimento da operação, do tipo de carga, dos prazos e dos pontos de coleta e entrega. Depois disso, a transportadora define a melhor forma de atendimento, podendo envolver coleta programada, carga fracionada, carga fechada, acompanhamento do trajeto e confirmação da entrega.",
  },
  {
    question: "A Transportes Fink atende quais estados?",
    answer:
      "A Transportes Fink atua com foco em Rio Grande do Sul, Santa Catarina, Paraná e São Paulo, conectando empresas do Sul ao Sudeste por meio de uma operação rodoviária planejada para segurança, pontualidade e previsibilidade.",
  },
  {
    question: "A empresa realiza transporte para indústrias e distribuidores?",
    answer:
      "Sim. A operação é voltada para empresas, indústrias, distribuidores, centros de distribuição e gestores de logística que precisam de um parceiro logístico B2B para transporte de cargas, frete empresarial e acompanhamento profissional.",
  },
  {
    question: "Como solicitar uma cotação de frete?",
    answer:
      "A cotação pode ser solicitada pelo WhatsApp da Transportes Fink. Para agilizar o atendimento, é importante informar origem, destino, tipo de carga, volume aproximado, peso, prazo desejado e se a operação exige coleta programada, carga fracionada ou carga fechada.",
  },
  {
    question: "Quais diferenciais uma empresa deve buscar em uma transportadora?",
    answer:
      "Uma empresa deve avaliar segurança, pontualidade, comunicação, transparência, experiência em transporte interestadual, capacidade de gestão logística, clareza na cotação e atendimento próximo. Mais do que preço, a transportadora precisa reduzir risco e gerar previsibilidade para a operação.",
  },
] as const;

type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string[] }[];
  related: string[];
};

const sharedOperationalSection = {
  title: "Como avaliar a operação antes da cotação",
  body: [
    "Uma cotação de frete empresarial fica mais precisa quando a empresa descreve a operação com clareza. Origem, destino, tipo de mercadoria, peso, volume, dimensões, frequência de embarque, janela de coleta, prazo de entrega e restrições no recebimento ajudam a transportadora a entender o risco e a estruturar a melhor alternativa. Esse cuidado evita estimativas genéricas e favorece uma proposta conectada à realidade do negócio.",
    "Para indústrias, distribuidores e centros de distribuição, também é importante observar se a carga exige carregamento assistido, documentação específica, agendamento em docas, separação por pedido ou entrega em múltiplos pontos. Esses fatores influenciam a escolha entre carga fracionada, carga fechada, coleta programada ou uma operação recorrente. Quanto melhor o diagnóstico inicial, maior a previsibilidade na execução.",
  ],
};

const sharedDifferentialsSection = {
  title: "Diferenciais que importam para empresas",
  body: [
    "Empresas que contratam transporte rodoviário não buscam apenas um veículo disponível. Elas precisam de um parceiro logístico B2B capaz de cumprir prazos, proteger a carga, manter comunicação clara e agir com responsabilidade quando a rotina muda. Pontualidade, entrega segura, transparência e atendimento próximo são diferenciais que impactam diretamente estoque, produção, relacionamento comercial e satisfação do cliente final.",
    "Outro ponto relevante é a gestão logística. Uma transportadora para empresas deve organizar informações, acompanhar rotas, alinhar expectativas e responder de forma objetiva. Rastreamento de cargas, confirmação de entrega e clareza no fluxo reduzem incertezas para compradores, gestores de logística e equipes de supply chain. A Transportes Fink trabalha esse posicionamento com foco em operação profissional e compromisso de longo prazo.",
  ],
};

export const seoPages: SeoPage[] = [
  {
    slug: "transportadora-rio-grande-do-sul",
    title: "Transportadora no Rio Grande do Sul",
    metaTitle: "Transportadora no Rio Grande do Sul | Transportes Fink",
    description:
      "Transportadora no Rio Grande do Sul para empresas, indústrias e distribuidores que precisam de transporte rodoviário com segurança, pontualidade e atuação RS SC PR SP.",
    eyebrow: "Operação no RS",
    h1: "Transportadora no Rio Grande do Sul para empresas que precisam de previsibilidade.",
    intro:
      "Empresas do Rio Grande do Sul dependem de uma logística bem coordenada para manter produção, distribuição e atendimento comercial em movimento. A Transportes Fink atua como transportadora no Rio Grande do Sul com foco em operação B2B, conectando cargas empresariais a rotas estratégicas em Santa Catarina, Paraná e São Paulo.",
    sections: [
      {
        title: "Logística empresarial a partir do Rio Grande do Sul",
        body: [
          "A rotina logística de uma empresa gaúcha envolve decisões que vão além do deslocamento da carga. É preciso pensar em coleta programada, prazos de entrega, documentação, comunicação com o destinatário, segurança da mercadoria e capacidade de resposta em trajetos interestaduais. Uma transportadora no Rio Grande do Sul precisa conhecer esse contexto e atender com seriedade empresas que não podem lidar com atrasos sem explicação ou processos improvisados.",
          "Para indústrias, distribuidores e operações B2B, a previsibilidade pesa tanto quanto o valor do frete. Quando a transportadora compreende os fluxos do cliente, fica mais simples alinhar janelas de coleta, organizar cargas fracionadas ou fechadas e manter o acompanhamento de cada etapa. Esse cuidado fortalece a operação logística e reduz o atrito entre áreas de compras, expedição, logística e atendimento ao cliente.",
        ],
      },
      sharedOperationalSection,
      sharedDifferentialsSection,
      {
        title: "Rotas entre RS, SC, PR e SP",
        body: [
          "O transporte RS SC PR SP atende uma das regiões mais relevantes para cadeias industriais e comerciais do país. Essa rota conecta fornecedores, fábricas, distribuidores e centros de distribuição que precisam equilibrar custo, prazo e segurança. Ao contratar uma transportadora para empresas com foco nesse corredor, o gestor ganha uma operação mais alinhada às necessidades de transporte interestadual.",
          "A Transportes Fink posiciona sua atuação para empresas que valorizam comunicação, entrega segura e relacionamento transparente. O objetivo é servir como parceiro logístico para operações recorrentes, embarques planejados e demandas empresariais que exigem compromisso. Para solicitar uma cotação, basta informar os dados da carga e o contexto da operação pelo WhatsApp.",
        ],
      },
    ],
    related: ["transporte-rs-sc-pr-sp", "frete-empresarial", "logistica-empresarial"],
  },
  {
    slug: "transporte-rodoviario-para-empresas",
    title: "Transporte rodoviário para empresas",
    metaTitle: "Transporte Rodoviário para Empresas | Transportes Fink",
    description:
      "Transporte rodoviário para empresas com foco em carga empresarial, coleta programada, entrega segura, gestão logística e atendimento B2B no Sul e Sudeste.",
    eyebrow: "Transporte B2B",
    h1: "Transporte rodoviário para empresas com segurança, agilidade e acompanhamento.",
    intro:
      "O transporte rodoviário para empresas exige planejamento, comunicação e responsabilidade. A Transportes Fink atende operações B2B que precisam movimentar cargas com segurança, pontualidade e clareza, especialmente em rotas entre Rio Grande do Sul, Santa Catarina, Paraná e São Paulo.",
    sections: [
      {
        title: "Por que o transporte rodoviário segue estratégico",
        body: [
          "O modal rodoviário continua sendo essencial para empresas brasileiras porque permite flexibilidade de origem e destino, adaptação a diferentes volumes e integração com a rotina de expedição. Para uma indústria, distribuidor ou centro de distribuição, essa flexibilidade ajuda a atender clientes, manter estoques abastecidos e responder a demandas comerciais com mais velocidade.",
          "Na prática, o transporte rodoviário para empresas precisa equilibrar agilidade e controle. Um embarque pode envolver carga fracionada, carga fechada, entregas com prazo definido, coletas recorrentes ou uma demanda pontual. Cada cenário pede análise operacional, alinhamento de expectativas e um atendimento capaz de orientar o cliente antes mesmo do veículo sair para coleta.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Carga fracionada, carga fechada e operação recorrente",
        body: [
          "A carga fracionada costuma ser indicada quando o volume não ocupa todo o veículo e a empresa deseja transportar mercadorias com eficiência. Já a carga fechada é mais adequada para operações com maior volume, destino específico ou necessidade de exclusividade. Em ambos os casos, a escolha deve considerar prazo, custo, risco, tipo de mercadoria e capacidade de recebimento no destino.",
          "Quando a empresa embarca com frequência, o transporte deixa de ser apenas uma contratação pontual e passa a fazer parte da gestão logística. Nessa situação, o parceiro logístico B2B precisa entender padrões, sazonalidades e prioridades. A Transportes Fink busca atuar com esse olhar, oferecendo atendimento próximo e uma operação preparada para empresas que valorizam previsibilidade.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["carga-fracionada", "frete-empresarial", "transporte-para-industrias"],
  },
  {
    slug: "logistica-empresarial",
    title: "Logística empresarial",
    metaTitle: "Logística Empresarial e Transporte B2B | Transportes Fink",
    description:
      "Logística empresarial para operações B2B com transporte de cargas, gestão logística, coleta programada, rastreamento de cargas e entrega segura.",
    eyebrow: "Gestão logística",
    h1: "Logística empresarial para operações que precisam de controle e confiança.",
    intro:
      "A logística empresarial conecta compras, produção, expedição, distribuição e atendimento ao cliente. Quando o transporte de cargas é bem planejado, a empresa ganha previsibilidade e reduz ruídos em toda a cadeia. A Transportes Fink atua para apoiar esse processo com foco em transporte rodoviário B2B.",
    sections: [
      {
        title: "Logística como parte da operação comercial",
        body: [
          "Em muitas empresas, a logística define a qualidade percebida pelo cliente. Uma entrega atrasada pode comprometer uma linha de produção, gerar ruptura de estoque, atrasar uma revenda ou criar custos extras para o destinatário. Por isso, escolher uma transportadora para empresas é uma decisão estratégica, não apenas uma compra operacional.",
          "A logística empresarial eficiente depende de informação confiável, prazos realistas, acompanhamento e capacidade de adaptação. Transporte de cargas, coleta programada, carga fracionada, carga fechada e transporte interestadual precisam conversar com o planejamento interno da empresa. Quando esse alinhamento existe, o gestor de logística consegue tomar decisões mais rápidas e reduzir incertezas.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Transparência e comunicação no transporte",
        body: [
          "A transparência é um dos principais pilares de uma operação logística moderna. Empresas precisam saber quando a coleta será realizada, como a carga será conduzida, qual o prazo estimado e como obter retorno em caso de ajuste. Rastreamento de cargas, confirmação de entrega e comunicação clara não são detalhes; são recursos que ajudam áreas internas a organizar atendimento e planejamento.",
          "A Transportes Fink valoriza o relacionamento próximo porque entende que a operação B2B muda conforme demanda, prazo, cliente e rota. Uma transportadora precisa ser acessível, objetiva e comprometida com a entrega segura. Esse posicionamento é especialmente relevante para empresas que atuam no corredor RS SC PR SP e precisam de um parceiro logístico com foco em responsabilidade.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["transporte-rodoviario-para-empresas", "frete-empresarial", "transporte-rs-sc-pr-sp"],
  },
  {
    slug: "transporte-para-industrias",
    title: "Transporte para indústrias",
    metaTitle: "Transporte para Indústrias | Transportes Fink",
    description:
      "Transporte para indústrias com operação logística B2B, coleta programada, carga fechada, carga fracionada e transporte interestadual RS SC PR SP.",
    eyebrow: "Indústrias",
    h1: "Transporte para indústrias que precisam manter a produção em movimento.",
    intro:
      "Indústrias precisam de transporte de cargas com disciplina operacional. Matérias-primas, insumos, componentes, produtos acabados e reposições comerciais exigem prazos claros, cuidado com a carga e comunicação entre transportadora, expedição e destinatário.",
    sections: [
      {
        title: "O transporte como extensão da produção",
        body: [
          "Quando uma indústria contrata transporte rodoviário, ela está conectando sua produção ao mercado. Uma coleta atrasada pode pressionar estoque; uma entrega sem confirmação pode dificultar faturamento; uma comunicação falha pode gerar retrabalho para logística e vendas. Por isso, transporte para indústrias exige mais do que disponibilidade de veículo.",
          "A operação precisa considerar volume, embalagem, tipo de produto, urgência, destino, janela de carga e recebimento. Em alguns casos, a carga fechada oferece mais controle e agilidade. Em outros, a carga fracionada ajuda a manter eficiência para volumes menores ou entregas recorrentes. O importante é que a transportadora compreenda o contexto industrial e proponha a alternativa adequada.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Atendimento para distribuidores e cadeia B2B",
        body: [
          "Muitas indústrias dependem de distribuidores, representantes, centros de distribuição e clientes empresariais em diferentes estados. Essa cadeia exige transporte interestadual confiável, especialmente em rotas como RS, SC, PR e SP. A Transportes Fink atua para empresas que precisam integrar produção e distribuição com segurança, pontualidade e acompanhamento.",
          "A relação com uma transportadora para empresas deve ser construída em cima de transparência. O gestor precisa entender prazos, possibilidades, limitações e dados necessários para uma boa cotação. Quando existe esse diálogo, o frete empresarial deixa de ser uma incerteza e passa a ser parte organizada da operação logística.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["carga-fracionada", "frete-empresarial", "logistica-empresarial"],
  },
  {
    slug: "frete-empresarial",
    title: "Frete empresarial",
    metaTitle: "Frete Empresarial para Operações B2B | Transportes Fink",
    description:
      "Frete empresarial para transporte rodoviário, carga fracionada, carga fechada, coleta programada e operações B2B entre RS, SC, PR e SP.",
    eyebrow: "Cotação B2B",
    h1: "Frete empresarial com clareza para decidir melhor.",
    intro:
      "O frete empresarial precisa considerar mais do que distância. Tipo de carga, prazo, volume, frequência, rota, risco, coleta e condições de entrega influenciam a operação. A Transportes Fink atende empresas que buscam cotação de frete com comunicação objetiva e foco em segurança.",
    sections: [
      {
        title: "O que influencia uma cotação de frete",
        body: [
          "Uma boa cotação de frete empresarial começa com informações completas. Origem e destino são essenciais, mas não bastam. Peso, dimensões, quantidade de volumes, tipo de mercadoria, embalagem, valor aproximado da carga, urgência, necessidade de agendamento e frequência do embarque ajudam a formar uma proposta mais realista.",
          "Empresas que informam esse contexto reduzem retrabalho e recebem orientação mais adequada. Em determinados casos, a carga fracionada pode fazer sentido para volumes menores. Em outros, a carga fechada oferece mais controle. Também existem operações com coleta programada, entrega em centro de distribuição ou transporte interestadual com prazos específicos.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Preço, risco e previsibilidade",
        body: [
          "O menor preço nem sempre representa a melhor decisão para uma empresa. Um frete mal planejado pode gerar atraso, avaria, dificuldade de comunicação e custo operacional interno. Ao avaliar uma transportadora, compradores e gestores de logística devem observar segurança, pontualidade, atendimento, clareza e experiência em transporte de cargas empresariais.",
          "A Transportes Fink trabalha com foco em empresas que precisam de parceiro logístico B2B. A cotação é um ponto de partida para entender a operação e alinhar expectativas. O objetivo é oferecer uma experiência profissional, com compromisso do primeiro contato até a entrega segura.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["transporte-rodoviario-para-empresas", "carga-fracionada", "transportadora-rio-grande-do-sul"],
  },
  {
    slug: "carga-fracionada",
    title: "Carga fracionada",
    metaTitle: "Carga Fracionada para Empresas | Transportes Fink",
    description:
      "Carga fracionada para empresas, indústrias e distribuidores com transporte rodoviário, frete empresarial, coleta programada e entrega segura.",
    eyebrow: "Carga fracionada",
    h1: "Carga fracionada para empresas que precisam de eficiência logística.",
    intro:
      "A carga fracionada é uma alternativa importante para empresas que não precisam ocupar um veículo inteiro, mas ainda exigem transporte rodoviário profissional. Com planejamento, ela permite equilibrar custo, prazo e segurança em operações B2B.",
    sections: [
      {
        title: "Quando a carga fracionada faz sentido",
        body: [
          "A carga fracionada costuma ser indicada para volumes menores, entregas recorrentes, reposições comerciais e operações em que a empresa busca eficiência sem contratar uma carga fechada. Ela pode atender indústrias, distribuidores, centros de distribuição e negócios que enviam mercadorias para clientes empresariais em rotas específicas.",
          "Mesmo quando o volume é menor, a operação exige responsabilidade. Embalagem, identificação, documentação, prazo e destino precisam estar alinhados. A transportadora deve orientar o cliente sobre as informações necessárias para coleta, transporte e entrega. Isso reduz falhas e melhora a previsibilidade para quem acompanha o embarque.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Diferença entre carga fracionada e carga fechada",
        body: [
          "Na carga fechada, o veículo é dedicado a uma operação ou lote específico. Essa modalidade pode ser indicada para volumes maiores, cargas com prazo crítico ou entregas que exigem mais controle. Na carga fracionada, a mercadoria compartilha a operação com outros embarques compatíveis, permitindo uma solução eficiente para volumes parciais.",
          "A escolha depende da prioridade da empresa. Prazo, risco, custo, frequência e destino devem ser avaliados em conjunto. A Transportes Fink atende empresas que precisam discutir esse cenário com clareza, evitando decisões automáticas e buscando uma solução compatível com a operação logística.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["frete-empresarial", "transporte-rodoviario-para-empresas", "transporte-para-industrias"],
  },
  {
    slug: "transporte-rs-sc-pr-sp",
    title: "Transporte RS SC PR SP",
    metaTitle: "Transporte RS SC PR SP | Transportes Fink",
    description:
      "Transporte RS SC PR SP para empresas com rotas rodoviárias entre Rio Grande do Sul, Santa Catarina, Paraná e São Paulo.",
    eyebrow: "Sul ao Sudeste",
    h1: "Transporte RS SC PR SP para conectar empresas ao destino certo.",
    intro:
      "As rotas entre Rio Grande do Sul, Santa Catarina, Paraná e São Paulo conectam polos industriais, distribuidores, fornecedores e centros de consumo. A Transportes Fink atua nesse corredor com foco em empresas que precisam de transporte rodoviário seguro, ágil e acompanhado.",
    sections: [
      {
        title: "A importância do corredor Sul-Sudeste",
        body: [
          "O transporte RS SC PR SP é estratégico para cadeias produtivas que dependem de integração regional. Empresas gaúchas vendem para São Paulo, indústrias catarinenses abastecem distribuidores, operações paranaenses conectam fornecedores e centros de distribuição. Esse fluxo exige transportadora com visão empresarial e capacidade de organizar prazos, coletas e entregas.",
          "Em rotas interestaduais, cada detalhe importa. O prazo precisa ser realista, a coleta deve ser bem combinada, a carga precisa estar documentada e o cliente deve receber informações claras. A entrega segura depende da soma entre planejamento, cuidado operacional e comunicação. É essa combinação que transforma o frete em uma solução logística confiável.",
        ],
      },
      sharedOperationalSection,
      {
        title: "Atendimento para empresas em diferentes estados",
        body: [
          "Empresas que atuam em vários estados precisam de transporte de cargas que respeite a rotina de cada ponto. Uma entrega em indústria pode exigir agendamento; um distribuidor pode ter janela de recebimento; um centro de distribuição pode solicitar documentação específica. A Transportes Fink considera esses fatores ao orientar a cotação e organizar a operação.",
          "O foco em Rio Grande do Sul, Santa Catarina, Paraná e São Paulo permite posicionar a operação para um corredor de alto valor econômico. Para gestores de logística, compradores e equipes de supply chain, contar com um parceiro logístico B2B nessa rota significa ganhar previsibilidade e reduzir ruídos no relacionamento com clientes e fornecedores.",
        ],
      },
      sharedDifferentialsSection,
    ],
    related: ["transportadora-rio-grande-do-sul", "logistica-empresarial", "frete-empresarial"],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Transportes Fink",
    url: baseUrl,
    email: "transportadorafink@gmail.com",
    telephone: "+55 51 99515-1674",
    sameAs: ["https://www.instagram.com/transportesfink/"],
  };
}

export function serviceSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "Transportes Fink",
      url: baseUrl,
    },
    areaServed: ["Rio Grande do Sul", "Santa Catarina", "Paraná", "São Paulo"],
    serviceType: "Transporte rodoviário de cargas para empresas",
  };
}
