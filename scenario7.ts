import { Scenario } from "../types";

export const scenario3: Scenario = {
  id: 3,
  title: "Cenário 3: O Plano de Recuperação (Resgate da Conta)",
  objective: "Desenvolver a habilidade do CS de identificar um cliente em Risco Crítico de Churn silencioso cruzando indicadores de Engajamento, Adoção e Suporte, evitar a armadilha do 'contato vazio' e executar um Diagnóstico Silencioso para reapresentar a plataforma focando no dinheiro deixado na mesa.",
  profile: {
    client: "AgroMundi",
    segment: "Mid Touch",
    duration: "Contrato antigo",
    window: "Faltam exatos 60 dias para o fim do contrato (Janela Crítica de Renovação)",
    context: "Contrato antigo, mas a conta virou um 'fantasma' por um ano devido ao desengajamento completo da equipe operacional anterior."
  },
  eligibility: {
    has: [
      "Fluxo de material",
      "Autenticidade",
      "Help Hub (Módulo de chamado)",
      "Ambiente de homologação"
    ],
    eligible: [
      "Fluxo de serviços",
      "Fluxo de medição",
      "Fluxo de CTE",
      "Módulo de Pedidos",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "DDA",
      "Comprovante de Pagamento",
      "Leitura Automática dos Documentos"
    ],
    notEligible: [
      "Fluxo de comissão",
      "Fluxo de concessionária",
      "Fluxo de CTEOS",
      "Fluxo de outros documentos",
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
      name: "Marcos",
      role: "Coordenador (Key User)",
      influence: "Baixo Poder / Alto Interesse (Operador Apático)",
      profile: "Totalmente desengajado. Herdou o sistema de uma equipe demitida há um ano e nunca passou por uma capacitação própria.",
      comment: "Nenhum registro. Silêncio e apatia absoluta nos canais de comunicação da AgroMundi."
    },
    {
      name: "Helena",
      role: "Diretora (Tomadora de Decisão / Sponsor)",
      influence: "Alto Poder / Baixo Interesse (Decisora de Caixa / Foco em Custos)",
      profile: "Focada em cortar gastos. Renovava automaticamente por pura inércia, mas agora audita todas as faturas dapetitivamente.",
      comment: "Nenhum registro de e-mails diretos de suporte, mas suspendeu preventivamente a intenção de renovação por falta de retorno visível."
    }
  ],
  incidents: {
    text: "Nenhum bug ativo recente ou ticket aberto. O cliente desconectou do fluxo técnico e simplesmente não se comunica há meses.",
    status: "Risco Financeiro Máximo (Janela de 60 dias)"
  },
  dashboardData: {
    healthScore: 35,
    quadrant: "Estabilização para Retenção (Risco Crítico)",
    adoption: {
      metrics: [
        { label: "Consumo de Notas", value: "5%", comment: "Abandono operacional completo" },
        { label: "Taxa de Escrituração", value: "0%", comment: "Notas entram mas não completam" },
        { label: "Status da Versão", value: "Obsoleta", comment: "Sem atualização há 12 meses" }
      ],
      description: "O volume de notas caiu para 5% do pacote. Notas ingressadas falham na finalização, indicando que o time digita no ERP de forma manual.",
      chartValue: 5
    },
    support: {
      metrics: [
        { label: "Bugs Ativos", value: "0", comment: "Nenhuma queixa técnica registrada" },
        { label: "Queda de Chamados", value: "Ativado", comment: "O silêncio do abandono completo" },
        { label: "Tickets no Semestre", value: "0", comment: "Nenhuma interação de suporte" }
      ],
      description: "Zero incidentes, pois não há uso. Há um gatilho crítico de queda drástica de interações ativado.",
      chartValue: 100
    },
    relationship: {
      metrics: [
        { label: "Tempo desde o último touch", value: "62 dias", comment: "Vácuo total de relacionamento" },
        { label: "NPS Liderança", value: "Em branco", comment: "Ignora envios de pesquisas" },
        { label: "Participação em EBRs", value: "0%", comment: "Nunca atendeu reuniões estratégico-humanas" }
      ],
      description: "Total desengajamento. CFO invisível, Key User apático e sem resposta de NPS por inércia.",
      chartValue: 10
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Alerta Financeiro (Aba Visão Geral)",
      context: "Você assumiu a AgroMundi. Ao abrir o Dashboard de Visão Geral, qual indicador visual acende o primeiro e maior alerta vermelho de urgência para essa conta?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Valor Mensal'. Como o valor (MRR) é alto, eu preciso ligar para eles hoje mesmo para garantir que está tudo bem.",
          feedback: "Game Over! O valor mostra o tamanho do buraco, mas não dita a urgência temporal. Ligar sem contexto é um erro grave de 'contato vazio'.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador de 'Tempo até o Fim do Contrato', que marca exatos 60 dias.",
          feedback: "(Correta) A combinação da proximidade do vencimento com a inércia do cliente cria a 'Janela Crítica de Renovação'. A urgência é máxima.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O gráfico de 'Evolução da Margem de Operação (SaaS)'.",
          feedback: "Game Over! Margem reflete o custo interno da V360, não a satisfação ou urgência do cliente.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: A Leitura Clínica do Sintoma (Saúde Geral)",
      context: "Faltam 60 dias para a renovação. Ao checar a saúde geral da conta no painel, o que você observa e qual é a sua postura imediata?",
      options: [
        {
          id: "A",
          text: "Observo o 'Histórico de Eventos' e ligo imediatamente pedindo para apresentar o sistema.",
          feedback: "Game Over! Ligar 'no susto' lembrará a gestão de cancelar uma despesa inútil.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Consulto o indicador 'Nível de Saúde Equalizado' e vejo que está 'Crítico' (35 pontos). Entro no modo 'Diagnóstico Silencioso' antes de fazer qualquer contato.",
          feedback: "(Correta) Quando o risco de churn é extremo e o tempo curto, o primeiro passo é a imersão nos dados para construir uma tese de valor.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Olho o painel de 'Visão Geral do Health Score' para ver a média de saúde de todos os clientes e checar se o problema é generalizado na V360 ou isolado neles.",
          feedback: "Game Over! A média geral da carteira mascara o sangramento individual. A AgroMundi está prestes a cancelar, focar em como os outros clientes estão não salva essa conta.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: Investigando a Desconexão (Pilar de Relacionamento - Contato)",
      context: "No Pilar de Relacionamento, quais indicadores exatos do dashboard confirmam o distanciamento físico da conta?",
      options: [
        {
          id: "A",
          text: "O indicador 'CSAT (%)', que deve estar zerado no gráfico.",
          feedback: "Game Over! CSAT avalia tickets de suporte, não o relacionamento estratégico. Se não há tickets, fica vazio.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Os indicadores 'Tempo desde o último contato', marcando mais de 60 dias, e 'Participação em Reuniões de Sucesso', marcando 0%.",
          feedback: "(Correta) Você identificou o vácuo de relacionamento. A conta virou um fantasma.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O indicador de 'Visitas Presenciais'.",
          feedback: "Game Over! Mid Touch não exige visitas presenciais padrão. O abandono real é o digital.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: Investigando o Sentimento (Pilar de Relacionamento - NPS)",
      context: "Como você verifica o humor da liderança (Helena) através dos indicadores visuais do dashboard?",
      options: [
        {
          id: "A",
          text: "Procuro o gráfico 'NPS Tomador de Decisão' e vejo a nota 0, provando que é detratora.",
          feedback: "Game Over! Quem não fala há meses não entra na pesquisa para digitar 0. O painel não inventa zeros.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Consulto a área de 'NPS Tomador de Decisão' e percebo que o campo da nota está completamente em branco, comprovando que ela ignorou os disparos das últimas pesquisas.",
          feedback: "(Correta) O silêncio absoluto no NPS é mais perigoso que um detrator. Indica total apatia e desinteresse no futuro da parceria.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Olho o indicador 'NPS Key User', pois o Marcos opera o sistema.",
          feedback: "Game Over! O foco em risco de churn deve priorizar sempre o 'Sponsor' (quem assina o cheque) para saber se ela já assinou o distrato.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: O Abandono Operacional (Pilar de Adoção - Volume)",
      context: "Qual indicador visual de Adoção escancara que eles pararam de usar o núcleo da ferramenta?",
      options: [
        {
          id: "A",
          text: "O gráfico 'Volume de chamados vs volume histórico'.",
          feedback: "Game Over! Métrica de Suporte, não de Adoção.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador '% de Notas ingressadas / contratado', que mostra uma taxa de apenas 5%.",
          feedback: "(Correta) O principal valor do SaaS não está sendo consumido. Pagam por um sistema ocioso.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O gráfico 'Valor Médio de Lock In e Automatismo'.",
          feedback: "Game Over! O Lock-in mostra amarração sistêmica, mas o volume (ingresso) atesta o abandono da operação diária.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: O Gargalo de Eficiência (Pilar de Adoção - Processo)",
      context: "O que acontece com os 5% de notas que ainda entram? Qual indicador mostra se terminam o trabalho na V360?",
      options: [
        {
          id: "A",
          text: "O indicador 'Atendimento de SLA (%)'.",
          feedback: "Game Over! Mede a velocidade do nosso Suporte.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador '% de Notas escrituradas / ingressado'. Se estiver perto de 0%, a nota entra, mas morre antes do fim e terminam manualmente no ERP.",
          feedback: "(Correta) Você encontrou a dor processual: o fluxo foi quebrado. A equipe nova desistiu de finalizar a operação lá, achando o sistema difícil ou obsoleto.",
          isCorrect: true
        },
        {
          id: "C",
          text: "A tabela 'Detalhamento da Adoção de Fornecedores'.",
          feedback: "Game Over! Não revela onde a equipe interna está travando no processo de escrituração corporativa.",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: A Ilusão de Paz (Pilar de Suporte)",
      context: "Por que o time de suporte não alertou sobre a AgroMundi? Qual indicador do dashboard explica essa cegueira técnica?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Incidência de Bug Crítico' gerou alertas constantes que ignoraram.",
          feedback: "Game Over! O painel mostra zero bugs. A crise é silenciosa, não técnica.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O gatilho 'Queda Brusca no volume de chamados' ativado, aliado à ausência total de tickets abertos.",
          feedback: "(Correta) O suporte atende quem grita. Ferramenta abandonada zera chamados e cria falsa sensação de estabilidade.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O indicador 'CSAT do Suporte' em 100%.",
          feedback: "Game Over! Sem tickets, não há CSAT. Esse 100% é inexistente.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: A Construção da Tese de Valor (Business Case)",
      context: "Como você estrutura o Cálculo de ROI sem ter falado com a Helena?",
      options: [
        {
          id: "A",
          text: "Abro o painel de Adoção, vejo a capacidade contratada que eles deixaram de usar e cruzo com o benchmark de mercado (ex: 15 min/nota manual). Estimo o custo em horas da equipe do Marcos fazendo esse trabalho na mão.",
          feedback: "(Correta) Você utilizou a Estimativa Consultiva (Plano B), criando uma hipótese financeira forte de 'dinheiro sendo queimado' no processo manual.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Deixo a Análise de Viabilidade em branco e pergunto os custos de Headcount apenas na reunião para ser mais preciso.",
          feedback: "Game Over! Ir para uma Reunião de Resgate com a folha em branco soa intrusivo e não fisga a atenção da CFO nos primeiros minutos.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Insiro uma estimativa fictícia de R$ 150.000,00 de multas fiscais aleatórias.",
          feedback: "Game Over! Inventar cifras exorbitantes sem base na operação real destrói sua credibilidade com quem aprova o orçamento.",
          isCorrect: false
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: O Gatilho do Re-Kickoff (A Abordagem)",
      context: "Como você convida a Helena para a reunião decisiva?",
      options: [
        {
          id: "A",
          text: " 'Helena, vi que o uso de vocês está em 5%. Precisamos de uma reunião urgente para sua equipe voltar a usar antes da renovação.' ",
          feedback: "Game Over! Cobrar uso foca no sintoma da V360 e empurra a CFO diretamente para o cancelamento de uma ferramenta 'periférica'.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Gostaria de 15 minutos rápidos para apresentar como nosso suporte pode ajudar o Marcos no dia a dia.' ",
          feedback: "Game Over! Contato vazio e excessivamente tático. Uma Diretora focada em corte de custos não vai parar a agenda para falar de suporte.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Helena, uma auditoria na sua operação identificou que vocês perdem um valor considerável em tempo manual que já deveria estar automatizado pelo nosso contrato. Gostaria de apresentar esse cenário financeiro e estancar esse vazamento.' ",
          feedback: "(Correta) Posicionamento consultivo. Você chamou a atenção dela falando a língua do dinheiro: 'Vou te mostrar onde você perde dinheiro na sua folha'.",
          isCorrect: true
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: O Plano Tático de Recuperação",
      context: "Na call, a Helena afirma: 'Nossa equipe não se adaptou porque a tela de vocês é muito travada, por isso o Marcos voltou a digitar na mão. Como mudamos isso?' Qual é a jogada?",
      options: [
        {
          id: "A",
          text: "Prometo liberar um pacote de horas do nosso Suporte N2 sem custo adicional, para que nossa própria equipe ajude o Marcos a processar e digitar as notas atrasadas neste mês.",
          feedback: "Game Over! A V360 não é uma empresa de BPO (terceirização do operacional). Fazer o trabalho pelo cliente mascara a baixa adoção e não gera valor sustentável.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Envio a trilha completa de vídeos e manuais do nosso Help Hub para o Marcos se capacitar no próprio ritmo, argumentando que isso evita tirar a equipe da operação diária.",
          feedback: "Game Over! A intenção de poupar o tempo é boa, mas documentação passiva para uma equipe frustrada e apática é a receita para o fracasso.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Explico que a dor deles tem raiz no uso de uma versão legada. Proponho um upgrade gratuito de versão para modernizar a interface, aliado a um 'Treinamento Fast-Track' de 1 hora na automação principal (Quick Win) para oxigenar o Marcos.",
          feedback: "(Correta. Prepare-se para o Roleplay!) Você desarmou a objeção da interface obsoleta com melhoria tecnológica gratuita e focou em garantir uma vitória rápida (Quick Win) operacional.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Helena (Diretora/CFO)",
    scenarioText: "O facilitador assume o papel de Helena (Diretora/CFO). Ela atendeu a reunião de Re-Kickoff, mas está fria e objetiva. Começa a reunião dizendo: 'Aceitei a reunião, mas sendo honesta, já solicitei o bloqueio da renovação do contrato de vocês para o mês que vem. A ferramenta não pegou com a equipe nova. O que vocês têm para me mostrar que mude isso?' ",
    criteria: [
      {
        title: "Abertura Segura (Evitar Desculpas)",
        expectation: "O CS não deve adotar uma postura submissa pedindo desculpas pelos meses de silêncio ou agir como suporte técnico. Deve focar no 'Diagnóstico Silencioso' e na oportunidade financeira.",
        example: " 'Helena, compreendo totalmente o bloqueio da renovação. Nossa auditoria foi justamente entender que cancelar agora representará um custo invisível altíssimo para a sua folha.' "
      },
      {
        title: "Apresentação da Tese de Valor (ROI)",
        expectation: "Transformar o abandono em perda financeira tangível, usando o Business Case com as estimativas baseadas na capacidade contratada (Plano B).",
        example: " 'Se 95% do trabalho voltou a ser manual, sua equipe gasta X horas/mês com digitação. A plataforma já está paga para absorver isso. O cancelamento efetiva esse custo de folha para sempre.' "
      },
      {
        title: "Plano de Resgate (Fast-Track e Upgrade)",
        expectation: "Assumir a responsabilidade pela complexidade que a equipe sente e garantir um treinamento curto e objetivo (Quick Win) sem sobrecarregar.",
        example: " 'Já providenciamos o Upgrade da versão sem custo. E no lugar de manuais longos, desenhamos um Fast-Track de 1 hora só para a automação principal, devolvendo o tempo deles amanhã mesmo.' "
      },
      {
        title: "Repactuação Executiva (O Checkpoint Final)",
        expectation: "Travar o cancelamento com um acordo de curto prazo mensurável, condicionando a assinatura da renovação ao sucesso prático da operação.",
        example: " 'Peço que suspenda a decisão de corte hoje. Aplicamos o Fast-Track na equipe. Faremos um Checkpoint em 30 dias: se a eficiência não subir drasticamente, nós mesmos apoiaremos a descontinuação da plataforma.' "
      }
    ]
  }
};
