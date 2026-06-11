import { Scenario } from "../types";

export const scenario7: Scenario = {
  id: 7,
  title: "Cenário 7: O Voo de Cruzeiro (Criando Advogados da Marca)",
  objective: "Desenvolver o raciocínio clínico do CS para rentabilizar a lealdade além da mensalidade (MRR). O CS deve explorar o dashboard para validar a excelência da conta, confirmar a ausência de espaço para novas vendas técnicas e aplicar estratégias de Advocacy (indicações e Cases de Sucesso), apresentando a parceria como um ganho de autoridade e influência de mercado para o próprio executivo.",
  profile: {
    client: "Logística Prime",
    segment: "High Touch",
    duration: "Contrato maduro consolidado",
    window: "Em andamento normal estável sem renovação imediata impactante",
    context: "Parceria estável de longa data. Processos fluidos, integrados e sem atritos operacionais. O cliente já atingiu o teto técnico do ERP legado dele."
  },
  eligibility: {
    has: [
      "Fluxo de serviços",
      "Fluxo de medição",
      "Fluxo de material",
      "Fluxo de concessionária",
      "Fluxo de CTE",
      "Fluxo de CTEOS",
      "Fluxo de outros documentos",
      "Fluxo de invoice (estrangeira)",
      "Autenticidade",
      "Ambiente de homologação",
      "Agendamento de entrega",
      "Módulo de Pedidos",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "Conferência cega",
      "Help Hub (Módulo de chamado)",
      "DDA",
      "Comprovante de Pagamento",
      "Duplicata Escritural",
      "Leitura Automática de Documentos"
    ],
    eligible: [],
    notEligible: [
      "Fluxo de comissão",
      "Fluxo de Débito e Crédito",
      "RANFs",
      "Adiantamento",
      "Antecipação",
      "IPTU"
    ]
  },
  stakeholders: [
    {
      name: "Ana",
      role: "Supervisora Logística (Key User)",
      influence: "Baixo Poder / Alto Interesse (Promotora Estável)",
      profile: "Fã declarada da ferramenta. Utiliza todos os módulos com maestria e soluciona dúvidas pontuais via base de conhecimento de forma autônoma.",
      comment: "Bom dia! Fechamos o mês sem nenhum atraso. O sistema de vocês é impecável."
    },
    {
      name: "Roberto",
      role: "CFO (Tomador de Decisão / Sponsor)",
      influence: "Alto Poder / Alto Interesse (Champion / Defensor Executivo)",
      profile: "Executivo extremamente influente e focado em governança macro. Vê a V360 como um pilar de conformidade da holding.",
      comment: "Ofício formal elogiando a transparência dos dados e consolidando a solidez da parceria institucional de longa vigência."
    }
  ],
  incidents: {
    text: "Zero chamados abertos táticos, zero bugs críticos ou instabilidades de sistema nos últimos 6 meses. Parceria operando em perfeita sincronia.",
    status: "Parceria Consolidada (Oportunidade para Advocacy)"
  },
  dashboardData: {
    healthScore: 98,
    quadrant: "Foco em Melhoria Paga (Top Receita BR)",
    adoption: {
      metrics: [
        { label: "Volume Contratado", value: "100%", comment: "Aderência integral ao escopo" },
        { label: "Módulos Ativos", value: "Suíte Total", comment: "Teto de elegibilidade atingido" },
        { label: "Lock-in Operacional", value: "Máximo", comment: "Totalmente fundido às rotinas" }
      ],
      description: "Uso máximo do portfólio disponível pelo ERP legado actual do cliente, sem espaço técnico para expansões de módulos.",
      chartValue: 100
    },
    support: {
      metrics: [
        { label: "Atendimento SLA", value: "100%", comment: "Velocidade perfeita de SLAs" },
        { label: "Bugs Críticos", value: "0", comment: "Estabilidade impecável geral" },
        { label: "Chamados no Mês", value: "0", comment: "Operação autônoma do cliente" }
      ],
      description: "Sem incidentes abertos. Resoluções históricas perfeitas cravadas em 100% de eficiência operacional.",
      chartValue: 100
    },
    relationship: {
      metrics: [
        { label: "NPS Roberto (CFO)", value: "10 (Promotor)", comment: "Total alinhamento estratégico" },
        { label: "NPS Ana (Key User)", value: "10 (Promotor)", comment: "Fã declarada das telas" },
        { label: "Indicadores de Sucesso", value: "100%", comment: "Metas de ROI batidas integralmente" }
      ],
      description: "Parceria de alta autoridade. Ambos os pilares consideram a V360 insubstituível. Indicadores de sucesso em 100%.",
      chartValue: 98
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: Identificando o Ouro (Visão Geral)",
      context: "A área de Marketing pediu ao time de CS a indicação de um cliente maduro e seguro para ser o palestrante principal no grande evento anual da V360. Ao abrir o seu Dashboard de Visão Geral, qual caminho analítico você segue na tela principal para caçar esse candidato ideal?",
      options: [
        {
          id: "A",
          text: "Filtro o gráfico 'Quantidade de Clientes por Nível de Saúde' focando nas contas que estão nas faixas 'Crítica' ou 'Em Risco', pois construir um plano de recuperação a tempo gerará uma história de superação mais emocionante para o público.",
          feedback: "Game Over! Expor um cliente que passou por instabilidades recentes em um evento de mercado é um risco altíssimo para a reputação da V360. Embaixadores de marca precisam de estabilidade longa e comprovada.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Filtro o indicador 'Nível de Saúde Equalizado', buscando ativamente as contas posicionadas no topo da faixa 'Saudável' (acima de 80 pontos).",
          feedback: "(Correta) A saúde perfeita contínua e consolidada no painel é o primeiro filtro técnico obrigatório para qualificar um verdadeiro defensor da marca.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Procuro o gráfico de 'Top Receita BR' e seleciono a empresa que possui a maior barra de faturamento anual da carteira.",
          feedback: "Game Over! É um erro: selecionar a empresa apenas pelo faturamento não garante lealdade. O cliente que mais paga pode estar descontentado e detratar se exposto.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: A Prova de Lealdade (Pilar de Relacionamento - NPS)",
      context: "Você selecionou a Logística Prime no filtro de saúde. Antes de avançar com uma abordagem externa, você entra na aba do Pilar de Relacionamento para validar o real alinhamento de satisfação da conta. Qual cruzamento de dados confirma que eles estão prontos para advogar pela V360?",
      options: [
        {
          id: "A",
          text: "Analiso o histórico de contatos e valido que o indicador de recência mostra que conversamos com a equipe operacional há menos de 48 horas.",
          feedback: "Game Over! Falar com o cliente frequentemente indica proximidade operacional, mas não garante que os executivos possuem orgulho institucional da ferramenta a ponto de defendê-la no mercado.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Verifico os dados detalhados da pesquisa de NPS e confirmo que tanto o Key User quanto o Tomador de Decisão atribuíram nota 10 à plataforma, consolidando o status de Promotores legítimos.",
          feedback: "(Correta) Você dominou a análise relacional. A nota máxima de ambas as frentes (operação e diretoria) é o sinal verde definitivo para ações de Advocacy.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Verifico a área de NPS e observo que a equipe operacional deu nota 10, enquanto o CFO (Roberto) avaliou a ferramenta com nota 7, o que estabiliza a conta em um nível 'Neutro' totalmente seguro para o evento.",
          feedback: "Game Over! Você leu incorretamente: o Roberto deu nota 10. Além disso, um cliente Neutro (nota 7 ou 8) indica apatia e jamais deve ser levado ao palco do mercado.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: A Substância do Pitch (Pilar de Relacionamento - Sucesso)",
      context: "A lealdade subjetiva está confirmada. Porém, para falar em um evento de negócios, o CFO precisa de embasamento, ou a palestra parecerá vazia. Qual indicador do painel te fornece a prova de que a V360 gerou os resultados financeiros contratados?",
      options: [
        {
          id: "A",
          text: "Checo o painel de satisfação do cliente e observo que o indicador de 'CSAT do Suporte' está consolidado em 80% neste mês.",
          feedback: "Game Over! Você usou um dado incorreto (CSAT real da conta é 100%) e errou na métrica. Diretores não usam notas de atendimento de chamados para palestrar sobre valor nos negócios.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Analiso a métrica de 'Atingimento de Indicadores de Sucesso (%)' e constato que ela está cravada em 100%, provando que o plano de negócios e o retorno financeiro pactuados foram plenamente entregues.",
          feedback: "(Correta) O sucesso documentado em 100% é a matéria-prima do Case. Significa que a plataforma cumpriu suas promessas de valor estratégico perante a diretoria.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Analiso a métrica de 'Atingimento de Indicadores de Sucesso (%)' e observo que ela marca 75%, o que demonstra que a grande maioria das metas foi batida.",
          feedback: "Game Over! Diferente disso, o indicador da Logística Prime está cravado em 100%, indicando conformidade absoluta com o plano macro de resultados corporativos.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: A Maturidade Técnica (Pilar de Adoção)",
      context: "A equipe de Produto quer usar essa conta para demonstrar ao mercado a robustez e a estabilidade das nossas integrações em cenários de alta complexidade. Qual indicador visual do Pilar de Adoção atesta que a Logística Prime utiliza a plataforma em sua capacidade técnica máxima?",
      options: [
        {
          id: "A",
          text: "O gráfico de '% de Notas Ingressadas vs. Contratadas', confirmando que o consumo volumétrico atingiu exatamente os 100% do pacote.",
          feedback: "Game Over! Consumo de volume mede apenas quantidade de notas que entram. Um cliente pode usar 100% da franquia disparando apenas o fluxo mais básico do sistema, sem sofrer ou necessitar sofisticação.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador de 'Valor Médio de Lock In', que se encontra na faixa máxima de pontuação, comprovando a fusão completa de múltiplos fluxos e APIs avançadas na operação do cliente.",
          feedback: "(Correta) O Lock-in alto atesta o enraizamento da tecnologia nos processos do cliente, qualificando a conta como o benchmark perfeito de maturidade sistêmica.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Abro o gráfico de 'Uso do Portal de Fornecedores' para validar o nível de engajamento do ecossistema.",
          feedback: "Game Over! Esse gráfico e aba não fazem parte do kit de ferramentas da plataforma. O dado correto de amarração está no Lock-In.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: A Blindagem Preventiva (Pilar de Suporte)",
      context: "Os dados de relacionamento e adoção estão impecáveis. Você planeja entrar em contato com o Roberto (CFO) para propor uma agenda estratégica de visibilidade de mercado. Como você utiliza o Pilar de Suporte para se blindar contra qualquer atrito operacional oculto antes de fazer a ligação?",
      options: [
        {
          id: "A",
          text: "Abro o histórico de tickets recentes e busco por chamados classificados como 'Dúvida', ligando para o CFO com as respostas operacionais prontas para impressioná-lo com a nossa agilidade.",
          feedback: "Game Over! Forçar uma pauta de microgerenciamento de dúvidas operacionais com um CFO rebaixa o nível da conversa estratégica. Essas rotinas operam perfeitamente com a Ana.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Checo se a curva de abertura de chamados caiu repentinamente para zero nas últimas 24 horas, assumindo que o silêncio total da operação é o indicador definitivo de estabilidade técnica para ligar com segurança.",
          feedback: "Game Over! O silêncio repentino e absoluto em contas de altíssimo uso é um sinal clínico perigoso de paralisação técnica rápida, não necessariamente um selo de paz operacional.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Analiso os indicadores macros de saúde do suporte e confirmo que a 'Incidência de Bug Crítico' está zerada e o 'Atendimento ao SLA' está consolidado em 100%.",
          feedback: "(Correta) Blindagem técnica realizada. Com a certeza de que a engenharia está perfeita, você garante que a mesa com o CFO será 100% sobre negócios e posicionamento de mercado, sem brechas para reclamações.",
          isCorrect: true
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: A Estratégia de Posicionamento (Dashboard de Expansão)",
      context: "Você acessa o Dashboard de Expansão para avaliar a conta. Sabendo que o cliente já atingiu o teto de elegibilidade técnica do ERP dele, qual é a leitura correta para nortear seus próximos passos?",
      options: [
        {
          id: "A",
          text: "O painel indica que o cliente está no quadrante de 'Foco em Expansão', logo o manual orienta que eu ignore o limite de elegibilidade e monte uma nova proposta comercial de módulos extras para aproveitar o bom humor do cliente.",
          feedback: "Game Over! Tentar empurrar novos módulos funcionais inaptos demonstra falta de leitura de dados de elegibilidade e quebra a credibilidade da sua parceria (Paradoxo do Valor).",
          isCorrect: false
        },
        {
          id: "B",
          text: "O painel posiciona o cliente no quadrante 'Foco em Melhoria Paga' (Alto HS e Baixo Potencial), validando que a receita interna está consolidada e que o foco estratégico deve ser rentabilizá-los via Advocacy.",
          feedback: "(Correta) Leitura perfeita. Quando o teto de expansão técnica é atingido, o papel do CS é converter a alta satisfação em indicações e fortalecimento de marca, gerando novas receitas.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O painel posiciona o cliente no quadrante 'Estabilização para Retenção', indicando urgência em paralisar as interações e acionar um plano de contingência relacional.",
          feedback: "Game Over! Esse quadrante é reservado para contas com sérios riscos de cancelamento e baixa saúde. A Logística Prime tem a pontuação mais alta da base (HS 98).",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: A Preparação do Convite (O Canal e o Rito)",
      context: "A estratégia de transformar o cliente em um embaixador está desenhada e validada pelos dados de quadrante. Como a Logística Prime é uma conta de alto valor (High Touch), qual é o rito e canal adequados para formalizar essa aproximação?",
      options: [
        {
          id: "A",
          text: "Envio um e-mail formal e padronizado contendo a apresentação do Marketing e o link de inscrição para que ele submeta o resumo do seu Case de Sucesso.",
          feedback: "Game Over! Clientes Promotores de alta receita exigem tratamento exclusivo de alto toque. Abordagens frias ou automatizadas quebram o sentimento de prestígio.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Analiso o histórico e constato que há uma janela ideal para contato pessoal. Agendo uma agenda presencial focada na celebração dos resultados trimestrais (100% de sucesso) e utilizo o rito 'olho no olho' para fazer o convite executivo.",
          feedback: "(Correta) Você utilizou a proximidade física e o rito de alto toque para valorizar a parceria, maximizando as chances de engajamento do CFO.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Ligo diretamente para a Ana (Key User) e peço para ela fazer o meio de campo para nós com o Diretor.",
          feedback: "Game Over! Terceirizar a abordagem estratégica para o nível de supervisão operacional quebra a autoridade do CS e esvazia o valor do convite.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: O Conselho Superior (A Alavanca Executiva)",
      context: "Você está desenhando o roteiro da visita presencial. Para chamar a atenção de um perfil de 'Alto Poder' como o Roberto (CFO), além do convite para o evento, qual alavanca contínua de exclusividade você coloca na mesa para gerar valor real?",
      options: [
        {
          id: "A",
          text: "Ofereço a entrega de kits e brindes de luxo trimestrais para o time fiscal e prioridade técnica na fila de suporte de chamados.",
          feedback: "Game Over! Brindes e suporte rápido são benefícios operacionais básicos. Eles não atraem ou justificam o tempo de um C-Level focado em governança corporativa macro.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Convido-o formalmente a assumir uma cadeira no nosso CAB (Customer Advisory Board), posicionando-o em um conselho estratégico restrito para influenciar o futuro do produto e debater tendências com outros líderes.",
          feedback: "(Correta) O Conselho de Clientes (CAB) atende perfeitamente à busca por influência técnica, governança e networking executivo de alto nível.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Ofereço a isenção vitalícia de taxas de implantação de qualquer desenvolvimento customizado que eles precisarem solicitar no futuro.",
          feedback: "Game Over! Conceder isenções vitalícias quebra a governança de preços e destrói as margens de serviços profissionais da própria V360.",
          isCorrect: false
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: O Pitch do Convite (Invertendo a Lógica)",
      context: "A reunião presencial começou e o Roberto está ouvindo atentamente. Como você formula o discurso do convite para a palestra de forma profissional e instigante?",
      options: [
        {
          id: "A",
          text: " 'Roberto, nosso time de Marketing está criando um banco de dados de empresas satisfeitas para nos ajudar a atrair novos clientes no mercado. O senhor não toparia gravar um depoimento em vídeo e falar bem da nossa solução?' ",
          feedback: "Game Over! O discurso foi focado estritamente na necessidade interna de vendas da V360. Soa quase como caridade ou incômodo.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Roberto, como a operação da Ana atingiu a estabilidade perfeita este ano, nosso time decidiu recompensá-lo enviando dois ingressos VIPs de cortesia para o senhor assistir ao nosso evento.' ",
          feedback: "Game Over! Você rebaixou um grande Champion a mero espectador passivo na plateia, em vez de convidá-lo a liderar e relatar conquistas.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Roberto, os resultados de governança que sua gestão alcançou tornaram-se uma referência de mercado. Queremos destacar a sua liderança e o seu Case no palco principal do nosso evento anual para inspirar o setor, e formalizar o seu assento no nosso Conselho Consultivo (CAB).' ",
          feedback: "(Correta. Prepare-se para o Roleplay!) O posicionamento mudou o jogo. O CS inverteu a lógica: não está pedindo ajuda, está oferecendo uma plataforma de projeção de autoridade e carreira para o próprio cliente.",
          isCorrect: true
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: Monetizando o Networking (Geração de Indicações)",
      context: "O Roberto ficou lisonjeado com o convite e aceitou! A sintonia na reunião está no ápice. Qual é a última milha de ouro estratégica (focada em Growth) que você aplica antes de se despedir?",
      options: [
        {
          id: "A",
          text: "Exigir a assinatura imediata de um termo de exclusividade jurídica, proibindo formalmente o cliente de avaliar qualquer ferramenta concorrente nos próximos anos.",
          feedback: "Game Over! Uma postura comercial agressiva e descabida que quebra de forma instantânea toda a harmonia relacional conquistada.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Acionar a captação de indicações qualificadas: 'Roberto, como essa estrutura blindou a sua governança fiscal, o senhor enxerga outras lideranças ou parceiras na sua rede de networking que colheriam esse mesmo valor? Seria uma honra receber uma aproximação direta sua.' ",
          feedback: "(Correta. Vá para o Roleplay!) Você transformou a lealdade extrema e a satisfação do NPS 10 em um motor de novos leads altamente qualificados para a equipe.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Propor um reajuste de 15% no valor da assinatura mensal atual (Upsell de preço), argumentando que o sucesso de 100% prova que o sistema vale mais do que cobramos hoje.",
          feedback: "Game Over! Tentar inflar o preço unilateralmente só porque o cliente elogiou a ferramenta soa como uma forte traição financeira e destrói o papel de Trusted Advisor.",
          isCorrect: false
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Roberto (CFO)",
    scenarioText: "O facilitador assume o papel de Roberto (CFO). Ele está de ótimo humor, recebe o CS muito bem na visita, concorda com os dados impecáveis, mas pontua seu escasso tempo: 'Minha agenda está travada pelas próximas semanas. Por que eu deveria despender meu tempo pessoal liderando conselhos ou palestrando para um fornecedor de software?' ",
    criteria: [
      {
        title: "Abordagem de Advocacy (Holofote Executivo)",
        expectation: "O CS não pede favores corporativos e não foca na necessidade da V360. O discurso é centralizado em projetar a liderança e o sucesso da gestão do próprio cliente perante o mercado.",
        example: " 'Roberto, compreendo perfeitamente o valor do seu tempo. O convite para o palco principal não é sobre o nosso sistema, é sobre a sua estratégia de governança, que hoje se tornou um verdadeiro referencial de conformidade para o setor.' "
      },
      {
        title: "Introdução ao CAB (Influência Estratégica)",
        expectation: "Apresentar o Conselho Consultivo (CAB) como um ambiente restrito de tomada de decisão e influência mútua entre C-Levels, afastando a imagem de 'reunião comum de fornecedor'.",
        example: " 'O Conselho de Clientes é um comitê exclusivo de tomadores de decisão. Nele, o senhor debaterá tendências diretamente com a nossa mesa diretora e outros grandes líderes, influenciando os rumos e as inovações tecnológicas do mercado.' "
      },
      {
        title: "Captação de Indicações via Confiança",
        expectation: "Extrair novas oportunidades de negócios do networking do CFO de forma fluida, aproveitando o momento de ápice relacional (NPS 10) sem parecer invasivo.",
        example: " 'Olhando para essa blindagem que conquistamos na sua diretoria, o senhor enxerga outros executivos ou empresas parceiras na sua rede de relacionamento que enfrentam dores de controle parecidas?' "
      },
      {
        title: "Foco em Negócios (Evitar o Tático)",
        expectation: "O CS mantém a conversa no nível macro de eficiência corporativa, compliance e visão de futuro, recusando-se a gastar o tempo do CFO com detalhes técnicos ou de suporte da Ana.",
        example: " 'A operação com a Ana está consolidada com SLA perfeito. Minha missão com o senhor nesta mesa é zelar pelo seu ecossistema estratégico e projetar seus resultados como o benchmark de conformidade fiscal.' "
      }
    ]
  }
};
