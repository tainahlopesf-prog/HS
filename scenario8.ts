import { Scenario } from "../types";

export const scenario4: Scenario = {
  id: 4,
  title: "Cenário 4: O Resgate do Patrocinador (Tomador de Decisão Detrator)",
  objective: "Desenvolver a habilidade do CS de isolar problemas de relacionamento de problemas técnicos, gerenciar a expectativa de um Tomador de Decisão detrator e elevar a pauta da operação tática para o impacto de Governança e Risco Fiscal, destravando o funil de expansão.",
  profile: {
    client: "Indústrias Alpha",
    segment: "High Touch",
    duration: "Contrato maduro e de alta receita",
    window: "Próxima janela de renovação em 8 meses",
    context: "Excelente estabilidade técnica na operação diária, mas ameaçada por uma detração severa da liderança financeira que desvaloriza o investimento."
  },
  eligibility: {
    has: [
      "Fluxo de serviços",
      "Fluxo de medição",
      "Fluxo de material",
      "Fluxo de CTE",
      "Fluxo de outros documentos",
      "Autenticidade",
      "Ambiente de homologação",
      "Módulo de Pedidos",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "Help Hub (Módulo de chamado)",
      "DDA",
      "Comprovante de Pagamento",
      "Leitura Automática dos Documentos"
    ],
    eligible: [],
    notEligible: [
      "Fluxo de comissão",
      "Fluxo de concessionária",
      "Fluxo de CTEOS",
      "Fluxo de invoice (estrangeira)",
      "Fluxo de Débito e Crédito",
      "Agendamento de entrega",
      "Conferência cega",
      "RANFs",
      "Adiantamento",
      "Antecipação",
      "Duplicata Escritural",
      "IPTU"
    ]
  },
  stakeholders: [
    {
      name: "Felipe",
      role: "Analista Sênior (Key User)",
      influence: "Baixo Poder / Alto Interesse (Champion / Promotor)",
      profile: "Super engajado, elogia o suporte e participa de todos os ritos diários. Atua como termômetro técnico interno.",
      comment: "Pessoal da V360, parabéns pelo último ajuste. A ferramenta é o nosso braço direito aqui, nunca processamos com tanta segurança!"
    },
    {
      name: "Ricardo",
      role: "CFO (Tomador de Decisão / Sponsor)",
      influence: "Alto Poder / Médio Interesse (Decisor Chave Detrator)",
      profile: "Extremamente analítico, objetivo, tempo escasso e cego para o ganho operacional da base.",
      comment: "Muito caro para o que entrega. Não vejo impacto nos resultados ou na governança da minha área."
    }
  ],
  incidents: {
    text: "Zero problemas de SLA ou incidentes técnicos em andamento. O sistema opera impecavelmente bem e a engenharia está blindada.",
    status: "Risco de Cancelamento Relacional (NPS 3 do Decisor Chave)"
  },
  dashboardData: {
    healthScore: 68,
    quadrant: "Monetização com Foco em Defesa (Membro Top Receita)",
    adoption: {
      metrics: [
        { label: "Notas Ingressadas", value: "95%", comment: "Excelente estabilidade de uso" },
        { label: "Módulos em Uso", value: "Completo", comment: "Máximo de automação ativada" },
        { label: "Teto de Elegibilidade", value: "Atingido", comment: "Limitação técnica de ERP legado" }
      ],
      description: "Operação rodando no teto tecnológico do cliente, consumindo quase a totalidade da capacidade contratada de forma eficiente.",
      chartValue: 95
    },
    support: {
      metrics: [
        { label: "Atendimento SLA", value: "100%", comment: "Respostas imediatas no mês" },
        { label: "Bugs Ativos", value: "0", comment: "Nenhum no presente trimestre" },
        { label: "Instabilidade Recente", value: "Inexistente", comment: "Ambiente blindado de erros" }
      ],
      description: "Suporte com performance perfeita de SLA técnico e sem nenhum bug ativo reportado pela base.",
      chartValue: 100
    },
    relationship: {
      metrics: [
        { label: "NPS Ricardo (CFO)", value: "3 (Detrator)", comment: "Submetido ontem à tarde" },
        { label: "NPS Felipe (Key User)", value: "10 (Promotor)", comment: "Fera engajada com a marca" },
        { label: "Participação em EBRs", value: "50%", comment: "Felipe vai a todas, Ricardo a 0%" },
        { label: "KPIs de Sucesso", value: "Dados Faltantes", comment: "Nunca preenchidos no sistema" }
      ],
      description: "Dissonância absoluta: a operação ama o produto, mas o tomador de decisão (CFO) deu NPS 3 ontem reclamando de falta de governança.",
      chartValue: 50
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: A Leitura Clínica do Sintoma (Visão Geral)",
      context: "Você atende a conta Indústrias Alpha. O e-mail do Key User (Felipe) foi só elogios. Porém, ao abrir o Dashboard de Visão Geral, você nota que a Média do Health Score caiu para 68 (Neutro). Qual indicador nesta tela isola exatamente onde está o sangramento?",
      options: [
        {
          id: "A",
          text: "O gráfico de 'Evolução da Margem de Operação (SaaS)'. Se a margem caiu, o sistema deduz a nota de saúde.",
          feedback: "Game Over! Margem operacional mede a rentabilidade interna da V360, não afeta a nota de saúde do cliente.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador 'Health Score por Pilar (Relacionamento, Adoção e Suporte)'. Nele, percebo que Adoção e Suporte estão altos, mas o pilar de Relacionamento está isolado puxando a média geral para baixo.",
          feedback: "(Correta) Você isolou a variável. O problema não é técnico, é percepção humana.",
          isCorrect: true
        },
        {
          id: "C",
          text: "A tabela de 'Eventos Gerais', para ver se houve uma fusão ou aquisição.",
          feedback: "Game Over! Mudanças estratégicas deduzem pontos, mas olhar apenas para eventos externos ignora a métrica diária do relacionamento que está no vermelho.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando a Dissonância (Pilar de Relacionamento - NPS)",
      context: "Você acessou a aba Pilar de Relacionamento. A nota geral do pilar está baixa. Qual indicador visual explica por que a saúde do relacionamento está tão negativa se o e-mail do Key User foi incrível?",
      options: [
        {
          id: "A",
          text: "O indicador 'CSAT (%)', que deve ter recebido uma nota muito baixa nesta semana.",
          feedback: "Game Over! CSAT é métrica do Pilar de Suporte, focada em tickets de atendimento. Não explica a queda no pilar de relacionamento.",
          isCorrect: false
        },
        {
          id: "B",
          text: "A área de 'NPS - Key User e Tomador de Decisão'. O Felipe deu 10, mas o Tomador de Decisão (Ricardo) deu 3. Como a nota do Decisor pesa 70% no cálculo geral do NPS, a pontuação do pilar afundou.",
          feedback: "(Correta) Você dominou a matemática do Health Score e identificou a dissonância absoluta de percepção entre operação e diretoria.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O gráfico de 'Visitas Presenciais', mostrando que nunca fomos lá visitar a operação.",
          feedback: "Game Over! A falta de visita presencial deixa de somar pontos extras, mas não derruba a pontuação inteira do pilar. A detração do Sponsor é a real âncora.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: A Raiz do Vácuo (Pilar de Relacionamento - Contato)",
      context: "O CFO avaliou que 'não vê impacto na governança'. Ainda na aba Pilar de Relacionamento, qual indicador comprova por que ele está cego para o valor que a ferramenta gera para a equipe do Felipe?",
      options: [
        {
          id: "A",
          text: "O gráfico 'Participação em Reuniões de Sucesso'. Ele demonstra que a participação média é de 50%: o Key User vai a todas, mas o Tomador de Decisão tem 0% de presença nas agendas estratégicas (EBRs).",
          feedback: "(Correta) A ausência executiva gerou um vácuo de informação. Ele assina o contrato, mas não senta na mesa para ver os resultados.",
          isCorrect: true
        },
        {
          id: "B",
          text: "O indicador 'Tempo desde o último contato', que deve estar marcando 120 dias.",
          feedback: "Game Over! Você fala com o Felipe frequentemente, a recência de contato geral da conta está em dia (verde). A resposta não é essa.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O histórico de NPS bruto, mostrando que o desinteresse dele é uma característica crônica e que ele sempre avaliou a ferramenta assim.",
          feedback: "Game Over! Presumir que o cliente é um detrator por esporte mascara a sua própria falha de governança estratégica.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: O Paradoxo (Pilar de Adoção)",
      context: "O Tomador de Decisão diz que a plataforma 'não entrega o que promete'. Você muda para a aba Pilar de Adoção. Qual indicador você usa para refutar internamente a afirmação dele e provar que o sistema é vital para a Indústria Alpha?",
      options: [
        {
          id: "A",
          text: "O gráfico 'Valor Médio de Lock In e Automatismo', que deve estar abaixo de 20%.",
          feedback: "Game Over! Se o Lock In estivesse baixo, ele teria razão em dizer que a V360 não entrega valor estrutural.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador '% de Notas Ingressadas vs. Contratadas', que está cravado em 95%.",
          feedback: "(Correta) A operação respira pela V360. A ferramenta está entregando o volume máximo; o que falta é traduzir esse volume operacional para a linguagem da Diretoria.",
          isCorrect: true
        },
        {
          id: "C",
          text: "A tabela 'Top 15 Clientes com Maior Qtde de Vendas', para mostrar que eles já compraram muitas coisas nossas.",
          feedback: "Game Over! O histórico de compras (MRR) de software não atesta o uso diário nem a utilidade técnica real da plataforma.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: O Ponto Cego Técnico (Pilar de Suporte)",
      context: "Você tem certeza de que a Adoção está alta. Mas, antes de interagir com o Tomador de Decisão, você precisa garantir que ele não tem um 'ás na manga' contra o sistema. Na aba Pilar de Suporte, quais indicadores você checa para blindar a V360 de qualquer argumento de 'instabilidade'?",
      options: [
        {
          id: "A",
          text: "Verifico o indicador 'Total de Chamados Abertos' para ver quantas dúvidas o time do Felipe teve neste mês.",
          feedback: "Game Over! Dúvidas operacionais não justificam um NPS 3 de um CFO. Você precisa procurar por crises sistêmicas graves.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Checo a 'Queda Brusca no volume de chamados' para ver se há um abandono técnico.",
          feedback: "Game Over! Como a adoção está em 95%, eles estão usando intensamente. Queda de chamados aqui indica maturidade e fluidez, não abandono.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Analiso os indicadores 'Atendimento ao SLA' (em 100%) e 'Bug Crítico - Pontuação' (zerado).",
          feedback: "(Correta) Com zero erros impeditivos e respostas no prazo, você garantiu que a discussão com o CFO será 100% sobre negócios e valor, não sobre tecnologia.",
          isCorrect: true
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: A Gravidade do Bloqueio (Dashboard de Expansão)",
      context: "Você sabe que o CFO está insatisfeito. Mas qual é o impacto financeiro dessa insatisfação para a V360? Você abre o Dashboard de Expansão. O que a 'Matriz de Potencial' e o cruzamento com a coluna 'Top Receita BR' revelam?",
      options: [
        {
          id: "A",
          text: "O cliente está no quadrante 'Desenvolvimento para Expansão Futura', então o risco é baixo.",
          feedback: "Game Over! Esse quadrante é para clientes com Alto Potencial e Baixa Saúde. A Indústria Alpha tem Saúde Média (Neutro).",
          isCorrect: false
        },
        {
          id: "B",
          text: "A Matriz aponta o cliente no quadrante 'Foco em Expansão', com 'Alto Potencial de Mercado' e marcação de 'Top Receita BR'. A detração do CFO está bloqueando um pipeline gigante de novos negócios.",
          feedback: "(Correta) Você dimensionou o tamanho do problema. Não é só um cliente insatisfeito, é um bloqueador de receita massiva (Upsell/Cross-sell).",
          isCorrect: true
        },
        {
          id: "C",
          text: "A coluna 'Valor Mensal' mostra que eles pagam pouco, então o impacto do NPS 3 é irrelevante para a nossa empresa.",
          feedback: "Game Over! A Indústria Alpha é um cliente High Touch e Top Receita BR. Todo cliente estratégico tem impacto severo em nosso caixa global.",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: O Motivo do Desalinhamento (Aba Relacionamento - KPIs)",
      context: "O CFO diz que a ferramenta é 'muito cara para o que entrega'. Você volta para a aba de Relacionamento para entender como a V360 está reportando o sucesso para ele. O que a área de 'Indicadores de Sucesso' te revela?",
      options: [
        {
          id: "A",
          text: "O 'Atingimento dos Indicadores de Sucesso (%)' está em 100%, logo o CFO está mentindo.",
          feedback: "Game Over! Se os indicadores estivessem em 100% e refletissem a dor do CFO, ele não daria nota 3.",
          isCorrect: false
        },
        {
          id: "B",
          text: "A coluna 'Atingimento dos Indicadores de Sucesso (%)' consta como 'Dados Faltantes' (0%). Nós nunca registramos os KPIs do CFO no sistema. Ele não vê valor porque nunca definimos, juntos, o que é sucesso para ele.",
          feedback: "(Correta) Você encontrou a falha de processo da V360. O Plano de Sucesso nunca existiu no nível executivo.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O CSAT de Suporte está baixo, mostrando que as metas críticas técnicas não foram atingidas.",
          feedback: "Game Over! Você já viu no Passo 5 que o Suporte está perfeito. O erro não é técnico, é de alinhamento de negócios.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: O Tempo de Resposta (Governança Pós-NPS)",
      context: "O Ricardo (Tomador de Decisão) submeteu o NPS 3 ontem. Segundo o fluxo estrutural de 'Pós-NPS: Fechamento de Loop', qual é o prazo que o CS tem para fazer o primeiro contato?",
      options: [
        {
          id: "A",
          text: "Como a renovação é só daqui a 8 meses, registro a insatisfação e aguardo a próxima EBR para não parecer reativo.",
          feedback: "Game Over! Aguardar meses para falar sobre uma detração grave passa a imagem de total desleixo.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O CS deve entrar em contato de forma ágil, entre 24h a 48h, para entender a fundo a insatisfação.",
          feedback: "(Correta) A velocidade de resposta demonstra que a 'Voz do Cliente' ecoou imediatamente com máxima seriedade dentro da V360.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O SLA exige investigação em até 5 dias úteis, destravando as dúvidas do cliente.",
          feedback: "Game Over! 5 dias úteis é o SLA para clientes Neutros (notas 7 e 8). Detratores exigem urgência.",
          isCorrect: false
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: O Gancho Executivo (Tabela de Stakeholders)",
      context: "Você vai ligar para o Ricardo dentro de 24h. Consultando a aba de Stakeholders, você confirma que ele é o CFO, classificado como 'Tomador de Decisão' (Alto Poder). Como ele foge das agendas padrão, qual 'gancho' você utiliza para garantir que ele aceite conversar por 20 minutos?",
      options: [
        {
          id: "A",
          text: " 'Ricardo, vi a sua nota 3. Gostaria de 30 minutos para apresentar a quantidade de notas fiscais que o Felipe aprova por mês para o senhor ver que estamos trabalhando duro.' ",
          feedback: "Game Over! O CFO já sabe que o Felipe processa notas. Falar de volumetria tática não atrai um tomador de decisão executivo.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Elevo o nível: Convido-o formalmente para o nosso CAB (Customer Advisory Board) no próximo mês, pois isso massageará seu ego.",
          feedback: "Game Over! O CAB é um rito para clientes que têm alto nível de confiança (Promotores). Inserir um detrator no conselho contamina a base e não resolve a dor imediata dele.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Ricardo, agradeço sua honestidade no NPS. Identifiquei que falhamos em comunicar como a V360 bloqueia fraudes e pagamentos indevidos (Conformidade). Gostaria de 20 minutos para definir os KPIs de Risco Fiscal (Business Case) que realmente importam para sua cadeira.' ",
          feedback: "(Correta) Você chamou a responsabilidade, reconheceu a falta do Plano de Sucesso (Passo 7) e usou a dor de um CFO (Risco Fiscal e Governança) como isca.",
          isCorrect: true
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: O Rito Executivo (Reunião de Resgate)",
      context: "A reunião de resgate começa. Na sala estão você, o Ricardo (CFO) e o Felipe (Key User). Considerando a adoção em 95% e a falta histórica de KPIs (Dados Faltantes), qual a sua postura nos primeiros 3 minutos de agenda para desarmar o Tomador de Decisão?",
      options: [
        {
          id: "A",
          text: "Passo a palavra imediatamente para o Felipe (Key User) e peço para ele defender o sistema para o chefe, já que ele deu NPS 10.",
          feedback: "Game Over! O CS é o líder da pauta. Colocar o Key User na linha de tiro contra o chefe gera desconforto e enfraquece sua autoridade.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Mostro a tela do Dashboard de Adoção e digo: 'Ricardo, os números não mentem, vocês estão usando 95% do sistema, então a V360 está sim entregando resultado'.",
          feedback: "Game Over! Bater de frente com a percepção do cliente usando dados frios gera atrito. Percepção é realidade até que se prove o contrário com empatia.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Começo validando a frustração: 'Ricardo, seu NPS foi um choque de realidade. O sistema está rodando liso (95% de uso), mas percebemos no nosso painel que nunca definimos os Indicadores de Sucesso sob a ótica financeira. O objetivo hoje é sair daqui com as metas de compliance e risco mapeadas'.",
          feedback: "(Correta. Prepare-se para o Roleplay!) Você absorveu o impacto, usou o dado de adoção a seu favor, assumiu a falha de governança e pavimentou a criação do Business Case.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Ricardo (CFO)",
    scenarioText: "O facilitador assume o papel de Ricardo (CFO). Ele está impaciente e entra na call dizendo: 'Pessoal, tenho 15 minutos. E já adianto: pagar essa mensalidade para vocês apenas para ser um 'processador de XMLs' para o Felipe não fecha no meu orçamento. Onde está o impacto estratégico da V360 na minha empresa?'",
    criteria: [
      {
        title: "Absorção do Choque (Pós-NPS)",
        expectation: "Tratar o NPS 3 como um feedback valioso de governança falha por parte da V360 (falta de reporte e ausência de KPIs formais), e não reagir na defensiva.",
        example: " 'Ricardo, agradecemos a sinceridade. Se eu olhasse apenas para a V360 como um processador de notas, também acharia caro. Nossa falha foi não ter estabelecido com o senhor, desde o início, os Indicadores de Sucesso focados no caixa da empresa.' "
      },
      {
        title: "Tradução Operacional (Governança e Risco)",
        expectation: "Desviar a conversa do 'tempo poupado' para a pauta de Compliance, focando no que a V360 impediu que desse errado.",
        example: " 'O Felipe já garantiu que 95% das notas entram perfeitamente. O que não te mostramos é que, dentro desse volume, o sistema bloqueou X mil reais em pagamentos duplicados e barrados por divergência com os pedidos de compra.' "
      },
      {
        title: "Proteção do Key User",
        expectation: "O CS deve proteger a relação com a operação (Felipe), usando o trabalho dele como base do compliance, sem expô-lo frente ao CFO.",
        example: " 'A equipe do Felipe fez um trabalho brilhante estabilizando a operação. Com zero bugs críticos, o sistema virou um 'porteiro' seguro do seu caixa. O que precisamos agora é conectar essa segurança tática com os seus relatórios financeiros macro.' "
      },
      {
        title: "Estabelecendo Cadência (Plano de Sucesso)",
        expectation: "Restabelecer o papel de Trusted Advisor, assumindo o compromisso de preencher a lacuna de 'Dados Faltantes' e criar uma rotina executiva para um perfil de Alto Poder.",
        example: " 'Ricardo, para resolver o vácuo de informação, proponho preenchermos os seus KPIs de Risco Fiscal agora (Plano de Sucesso). Em seguida, agendamos um Status Report Executivo semestral, de apenas 20 minutos, focando apenas no bloqueio financeiro de fraudes. Faz sentido?' "
      }
    ]
  }
};
