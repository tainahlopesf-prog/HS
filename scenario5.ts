import { Scenario } from "../types";

export const scenario1: Scenario = {
  id: 1,
  title: "Cenário 1: O Caminho da Expansão (Upsell/Cross-sell)",
  objective: "Avaliar a capacidade do CS de mapear oportunidades, cruzar dados de Adoção e Suporte antes de agir, e construir um Business Case focado em ROI para contornar objeções financeiras.",
  profile: {
    client: "TechLogistics",
    segment: "Mid Touch",
    duration: "18 meses",
    window: "Meio de ciclo (sem renovação imediata à vista)",
    context: "Contrato de 18 meses, estabilizado após um onboarding desafiador. Foco atual em identificar oportunidades táticas e expandir valor."
  },
  eligibility: {
    has: [
      "Fluxo de material",
      "Fluxo de serviços",
      "Autenticidade",
      "Help Hub (Módulo de chamado)",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "Módulo de Pedidos",
      "Ambiente de homologação"
    ],
    eligible: [
      "Leitura Automática de Documentos",
      "Fluxo de medição",
      "Fluxo de CTE",
      "DDA",
      "Comprovante de Pagamento"
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
      name: "Joana Silva",
      role: "Coordenadora (Key User)",
      influence: "Baixo Poder / Alto Interesse (Defensora Tática)",
      profile: "Analítica, detalhista e focada em eficiência operacional. Precisa de capacitação frequente para mitigar dores manuais.",
      comment: "Oi, time. O fechamento deste mês está um caos. A transportadora mudou o layout e estamos tendo que conferir e digitar quase 3.000 notas na mão para não gerar multa. A equipe está fazendo hora extra todos os dias."
    },
    {
      name: "Roberto Carlos",
      role: "CFO (Tomador de Decisão)",
      influence: "Alto Poder / Médio Interesse (Decisor Chave)",
      profile: "Analítico, objetivo, tempo escasso e focado em ROI macro. Requer relatórios concisos sobre impacto financeiro.",
      comment: "A V360 é um investimento que precisa se pagar. Este trimestre congelei novas contratações e cortamos despesas."
    }
  ],
  incidents: {
    text: "1 Bug Crítico aberto há 22 horas com o título 'Nenhuma nota sendo capturada via SAP', impactando diretamente o faturamento.",
    status: "Risco Técnico Imediato"
  },
  dashboardData: {
    healthScore: 91,
    quadrant: "Foco em Expansão (Alto HS, Alto Potencial)",
    adoption: {
      metrics: [
        { label: "Uso da Franquia", value: "98%", comment: "Perto do limite contratado" },
        { label: "Módulos Contratados", value: "8 ativos", comment: "Básico e intermediário instalados" },
        { label: "Leitura Automática", value: "Não possui", comment: "Disponível para Upsell" },
        { label: "Lock-in de Processos", value: "0.80 (Alto)", comment: "Alta dependência da plataforma" }
      ],
      description: "Operação estável e volumetria próxima ao teto do contrato, porém sofrendo com digitação manual de notas de novos layouts.",
      chartValue: 98
    },
    support: {
      metrics: [
        { label: "Chamados no Mês", value: "5 normais", comment: "Volume estável sob a média" },
        { label: "Bugs Críticos", value: "1 ativo", comment: "SAP sem capturar nota desde ontem" },
        { label: "Tempo de Resposta SLA", value: "95%", comment: "Dentro do esperado histórico" }
      ],
      description: "O suporte corre bem no mês, mas há um Bug Crítico pendente há 22 horas que impede a captura de notas e para faturamento.",
      chartValue: 95
    },
    relationship: {
      metrics: [
        { label: "NPS CFO Roberto Carlos", value: "9 (Promotor)", comment: "Última pesquisa anual" },
        { label: "NPS Key User Joana", value: "8 (Neutro)", comment: "Comentário recente de cansaço" },
        { label: "Recência de Contato", value: "5 dias", comment: "Touchpoint operacional realizado" }
      ],
      description: "CFO contente com governança macro, mas usuária tática neutra e sobrecarregada por digitação de novo padrão.",
      chartValue: 85
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Ponto de Partida (Visão Geral)",
      context: "Você acabou de ler o e-mail da Joana (Key User) relatando horas extras com 3.000 notas devido a um novo layout. A sua primeira ação é abrir o BI de Health Score e Expansão. Para entender a diretriz macro dessa conta, qual cruzamento de dados você analisa na tela principal?",
      options: [
        {
          id: "A",
          text: "Verifico que a 'Média do HS' da conta está em 60 (Neutro) e o cliente está no quadrante 'Estabilização para Retenção', indicando que devo focar em mantê-los na base.",
          feedback: "Game Over! Você olhou para a média geral da sua carteira inteira, não para a visão específica do cliente. A TechLogistics não está em risco.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Checo a 'Matriz de Potencial X Health Score' e vejo que o cliente está com HS 91 e Potencial Alto, posicionado no quadrante 'Foco em Expansão'.",
          feedback: "(Correta) Você identificou o cenário ideal para estruturar um Upsell ou Cross-sell.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Olho o gráfico de 'Top 15 Clientes - Foco em Expansão' e vejo que eles são o cliente número 1 na lista, logo ligo para o CFO para vender qualquer módulo.",
          feedback: "Game Over! O gráfico 'Top 15 Clientes' mostra os clientes com maior potencial de expansão, não o faturamento. Vender sem diagnóstico de dor gera o 'Paradoxo do Valor' (Downsell Injustificado).",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando o Gargalo (Pilar de Adoção)",
      context: "O cliente tem Alto Potencial e Alta Saúde. Você precisa entender o motivo técnico dessa dor apontada pela Joana. Qual indicador do Pilar de Adoção te dá a resposta exata sobre o que está acontecendo?",
      options: [
        {
          id: "A",
          text: "Verifico que o '% de Notas Ingressadas vs. Contratadas' é de 115%, então eles estouraram a franquia e precisam de um pacote maior.",
          feedback: "Game Over! O painel mostra que eles usam 98% da franquia. O problema que a Joana relatou não é falta de limite de notas, é a digitação manual. Você olhou o indicador errado.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Checo os 'Indicadores Históricos de Adoção' e vejo que a 'Eficiência de Escrituração' caiu, e na visão de módulos contratados, não consta a funcionalidade de 'Leitura Automática de Documentos'.",
          feedback: "(Correta) Você cruzou a dor relatada com a ausência da ferramenta que resolve exatamente o trabalho manual.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Checo o 'Valor Médio de Lock-In', que está em 0,25, o que significa que o cliente tem baixíssima dependência da V360 e corre risco de Churn.",
          feedback: "Game Over! O Lock-in geral deles é 0,80 (Alto). Você interpretou o dado incorretamente e perdeu o foco na dor específica da leitura de notas.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: Classificação e Fit Comercial",
      context: "Você sabe que a Leitura Automática resolveria a vida da Joana e já validou a elegibilidade no passo anterior. Antes de avançar para a venda, como você classifica o Fit dessa oportunidade no Hub de CS?",
      options: [
        {
          id: "A",
          text: "Na aba 'Avaliação de Oportunidades', classifico o Fit como 'Possível', pois há um bom contexto e a dor foi mapeada, mas ainda falta o evento crítico (urgência) e o contato direto com o decisor.",
          feedback: "(Correta) Você avaliou corretamente a maturidade da hipótese antes de acionar o time de Expansão.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Classifico o Fit como 'Provável', o que já garante que o módulo pode ser vendido e o contrato enviado imediatamente.",
          feedback: "Game Over! A classificação 'Provável' exige que o evento crítico (se houver) e os decisores já estejam mapeados e envolvidos. Você pulou a etapa de qualificação.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Classifico o Fit como 'Impossível', pois o CFO Roberto congelou investimentos neste trimestre.",
          feedback: "Game Over! O congelamento é uma objeção a ser contornada com ROI estruturado, não uma barreira para desqualificar o fit técnico em definitivo.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: A Armadilha Oculta (Pilar de Suporte)",
      context: "A hipótese de Cross-sell está estruturada. Você vai ligar para a Joana para o Discovery. Qual dado do Pilar de Suporte você deve checar para não pisar em uma mina terrestre durante a ligação?",
      options: [
        {
          id: "A",
          text: "Vejo que o 'Atendimento ao SLA' está em 95% (Saudável), então a operação está perfeita e ligo imediatamente.",
          feedback: "Game Over! O SLA geral é uma média. Se você olhasse a tabela de 'Detalhamento de Chamados', veria que a integração SAP está parada desde ontem. Confiança destruída na ligação.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Vejo que há 1 'Bug Crítico' aberto há 22 horas com o título 'Nenhuma nota sendo capturada via SAP', impactando diretamente o faturamento.",
          feedback: "(Correta) Você evitou o 'Verde Ilusório'. Venda nenhuma sobrevive a uma operação sangrando.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Vejo que o 'Volume de Chamados' caiu para 30% ou menos da média histórica, indicando que a plataforma está super estável.",
          feedback: "Game Over! Essa redução brusca acarreta uma dedução de 20 pontos no Health Score, pois pode ser sinal de que o cliente desistiu de buscar ajuda e parou de usar o sistema (Risco de Churn).",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: Ação em Crise (A Governança)",
      context: "Com um Bug Crítico paralisando o SAP na mesa, sua agenda de vendas congela. Como você atua de forma imediata como CS?",
      options: [
        {
          id: "A",
          text: "Mando uma mensagem no Slack direto para o analista de suporte pedindo prioridade para não atrapalhar minha negociação.",
          feedback: "Game Over! A abolição da 'Sombra Operacional' é regra. Essa prática fragmenta a informação e tira a rastreabilidade via Help360.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Utilizo o Canal Urgente interno para dar contexto de negócio ao Suporte e reporto à Joana: 'Entendo a criticidade, cobrei prioridade máxima e o retorno será pelo Help360'.",
          feedback: "(Correta) Você seguiu a governança, traduziu o problema em impacto real para a equipe técnica e assumiu a cadeira de 'Dono da Comunicação' com a cliente.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Peço para a Joana consultar a IA (Assis) para ver se há alguma configuração que ela mesma possa ajustar no SAP.",
          feedback: "Game Over! A IA tria dúvidas de baixa complexidade. Terceirizar a resolução de um incidente impeditivo (Bug Crítico) para o cliente gera detração imediata.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: Lendo as Entrelinhas (NPS e Sentimento)",
      context: "A crise foi contornada no dia seguinte. Você retoma o plano de Expansão. Ao analisar o Pilar de Relacionamento, como as notas de NPS da TechLogistics guiam sua estratégia?",
      options: [
        {
          id: "A",
          text: "O CFO (Roberto) deu NPS 9 e o peso dele é de 70% na nota geral. Ignoro os demais, pois o Decisor já é Promotor.",
          feedback: "Game Over! Ignorar o Key User destrói a adoção diária. É o usuário quem alimenta as dores que justificam o ROI para o Decisor.",
          isCorrect: false
        },
        {
          id: "B",
          text: "A Joana (Key User) deu nota 8 (Neutro) reclamando de 'retrabalho operacional'. Uso a reclamação oficial dela como ponte para oferecer a solução na nossa próxima agenda.",
          feedback: "(Correta) Você fez o 'Fechamento de Loop' perfeito: conectou um feedback de pesquisa a um plano de ação de expansão.",
          isCorrect: true
        },
        {
          id: "C",
          text: "A nota do pilar de relacionamento zerou porque o 'Tempo desde o último contato' passou de 45 dias. Ligo para a Joana apenas para registrar um Touchpoint rápido e reativar a nota.",
          feedback: "Game Over! Fazer contato vazio apenas para bater métrica de saúde irrita o cliente e aciona o gatilho de cancelamento.",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: O Evento Histórico (Gatilho de Urgência)",
      context: "Você precisa identificar se há algum gatilho de urgência para acelerar essa venda. Onde no dashboard você encontra informações sobre mudanças estruturais recentes no cliente?",
      options: [
        {
          id: "A",
          text: "Abro a aba de 'Histórico de Eventos' e vejo que houve saída de um sponsor que não tínhamos contato há algum tempo. Cancelo o plano e abro uma War Room Relacional.",
          feedback: "Game Over! Os pontos focais no cliente não mudaram e a saída de um sponsor que não tínhamos proximidade recente não é o fator central que impulsiona essa oportunidade.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Abro a aba de 'Histórico de Eventos', encontro o registro de compra de um novo Centro de Distribuição (M&A) e uso esse dado no meu cálculo de ROI para provar que a falta de Leitura Automática obrigaria o CFO a contratar novos FTEs.",
          feedback: "(Correta) Você uniu a dor tática (hora extra hoje) com o risco estratégico (inchaço da folha amanhã).",
          isCorrect: true
        },
        {
          id: "C",
          text: "Abro a aba de 'Histórico de Eventos' e vejo a compra do CD. Agendo imediatamente o fechamento de contrato, pois se eles têm dinheiro para comprar um CD, têm dinheiro para comprar módulos.",
          feedback: "Game Over! Cuidado com a precipitação. O fato de investirem em logística (CapEx) geralmente significa que o fluxo de caixa para operação diária (OpEx) está congelado.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: O Discovery com a Key User (Métricas Operacionais)",
      context: "No Touchpoint com a Joana, você precisa validar a hipótese financeiramente. O que você pergunta para extrair os insumos para a aba 'Análise de Viabilidade'?",
      options: [
        {
          id: "A",
          text: " 'Joana, vi que vocês tiveram 5 bugs esse mês e a Eficiência está em 60%. O módulo custa R$ 1.500. Querem testar?' ",
          feedback: "Game Over! O CS não deve prometer testes gratuitos para compensar bugs nem pular direto para preço. O AM é o 'Fechador', o CS é o 'Mapeador'.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Joana, quantas pessoas do seu time hoje perdem tempo digitando notas? E qual é o Custo Médio desse funcionário (Salário + Encargos)?' ",
          feedback: "(Correta) Você está levantando os dados exatos (Headcount e Custo Médio) necessários para que o modelo calcule o Payback da solução.",
          isCorrect: true
        },
        {
          id: "C",
          text: " 'Joana, quanto vocês pagam de mensalidade nos sistemas concorrentes que vocês usam hoje?' ",
          feedback: "Game Over! Concorrentes de outras áreas não pagam a ineficiência do processo fiscal dela. A dor primária (horas extras) ficou sem métrica de base (Baseline).",
          isCorrect: false
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: O Contorno da Objeção Financeira",
      context: "Joana diz: 'O módulo é perfeito, mas o Roberto congelou 100% das novas contratações e custos extras este semestre'. Qual é a mentalidade do CS frente a isso?",
      options: [
        {
          id: "A",
          text: "Solicitar ao time de Expansão um desconto de 50% na subscrição para forçar uma aprovação emergencial.",
          feedback: "Game Over! Aceitar o Downsell no preço sem defender o Business Case compromete a rentabilidade e sinaliza fraqueza na negociação.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Responder: 'Entendo perfeitamente, Joana. Vamos manter o uso normal e no ano que vem retomamos essa pauta.'",
          feedback: "Game Over! Você abandonou a oportunidade. Aceitar a estagnação frente a uma dor clara pode gerar o 'Churn Silencioso' a médio prazo.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Argumentar: 'O congelamento é exatamente por que vocês precisam disso. O V360 não é gasto, é a única forma de vocês operarem o novo CD sem precisar quebrar a regra do Roberto e contratar mais analistas.'",
          feedback: "(Correta) Você contornou la objeção usando a própria regra do CFO como argumento de venda.",
          isCorrect: true
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: Estruturando o Rito Executivo (A EBR)",
      context: "O Business Case está pronto, provando que o módulo se paga em 4 meses (Payback) economizando 2 FTEs. Chegou o momento da Revisão Executiva (EBR). Como você prepara essa agenda?",
      options: [
        {
          id: "A",
          text: "Envio a planilha para o Roberto por e-mail e peço aprovação assíncrona, evitando reuniões desnecessárias.",
          feedback: "Game Over! O CS deve apresentar os resultados em uma reunião estruturada para garantir a 'Geração de Valor'. Mandar por e-mail transforma o valor em apenas um custo na tela dele.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Marco uma agenda com Roberto (CFO) e o Suporte para passar 40 minutos revisando os SLAs dos chamados da crise recente e mostrar que fomos ágeis.",
          feedback: "Game Over! Isso é o 'Sequestro da Agenda Estratégica'. A EBR sai do campo financeiro/negócios e vira prestação de contas tática.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Convido Roberto (CFO), Joana (Key User) e o AM (Expansão). Isolo o status do bug resolvido nos primeiros 5 minutos e dedico a pauta a comprovar o ROI da redução de FTEs frente ao novo CD.",
          feedback: "(Correta. Prepare-se para o Roleplay!) O CS domina a pauta, garante a segurança técnica e eleva o discurso para a estratégia do CFO.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Roberto Carlos (CFO)",
    scenarioText: "O facilitador assume o papel de Roberto (CFO) na EBR. Ele está resistente, focado no corte de gastos que implementou, e fará questão de lembrar do Bug Crítico que paralisou a integração SAP recentemente para testar a confiança do CS.",
    criteria: [
      {
        title: "Inteligência Emocional (A Crise)",
        expectation: "O CS não deve se esquivar do Bug Crítico mencionado pelo CFO. Deve usá-lo para demonstrar governança e controle da situação.",
        example: " 'Roberto, agradeço por pontuar o incidente do SAP. Como acompanhamos de perto, isolamos o problema, a integração foi totalmente restabelecida em poucas horas e aplicamos travas para não repetir. Com a casa em ordem, nosso foco agora é a eficiência do seu time.' "
      },
      {
        title: "Traduzindo a Dor em Dinheiro",
        expectation: "O CS deve evitar focar no trabalho braçal ('A Joana está digitando muito') e elevar o discurso para o impacto financeiro (FTEs, Multas) gerado pela expansão do cliente.",
        example: " 'Vimos que vocês acabaram de adquirir um novo CD. O processo manual da Joana já atinge o limite e custaria a contratação de 2 novos analistas (FTEs) para absorver o novo volume. Nosso objetivo é evitar esse aumento na sua folha.' "
      },
      {
        title: "Comprovação de ROI",
        expectation: "Apresentar o Business Case com clareza, mostrando que a ferramenta é um investimento com retorno rápido, indo ao encontro da diretriz de corte de custos do CFO.",
        example: " 'Pelo nosso cálculo validado com a sua equipe, a adoção do módulo de Leitura Automática tem um Payback de 4 meses. O valor poupado em multas e novas contratações paga a subscrição e ainda gera caixa.' "
      },
      {
        title: "Governança Comercial (Mapeador)",
        expectation: "O CS não negocia preço. Ele defende o valor, cria o senso de urgência e realiza a transição formal para o Account Manager (Expansão).",
        example: " 'Roberto, a mitigação desse custo para este trimestre faz sentido para a sua estratégia? Sendo positivo, nosso especialista em Expansão está aqui na sala para detalhar como podemos encaixar isso no contrato vigente.' "
      }
    ]
  }
};
