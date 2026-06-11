import { Scenario } from "../types";

export const scenario6: Scenario = {
  id: 6,
  title: "Cenário 6: O Paradoxo do Valor (Downsell Injustificado)",
  objective: "Desenvolver a resiliência analítica e a capacidade de negociação do CS para barrar um Downsell de uma conta saudável, utilizando os indicadores de alta adoção para construir um 'Business Case Reverso' e provar o colapso operacional inevitável caso o sistema seja reduzido.",
  profile: {
    client: "MegaLog Distribuidora",
    segment: "High Touch",
    duration: "10 meses restantes de contrato de alta receita",
    window: "Meio de vigência, com pressão externa agressiva por cortes de custos",
    context: "A holding controladora disparou uma meta linear e compulsória de corte de 30% em todos os contratos de software, ignorando totalmente a utilização das filiais."
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
      "API Dados (cliente utiliza)",
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
      name: "Thiago",
      role: "Gerente Logístico (Key User)",
      influence: "Baixo Poder / Alto Interesse (Usuário Dependente)",
      profile: "Gestor tático, totalmente dependente. Teme o colapso físico e a sobrecarga operacional extrema da expedição.",
      comment: "Pelo amor de Deus, me ajuda. O CFO da nossa holding mandou cortar 30% da verba do V360. Se vocês desligarem o módulo de conferência cega, meu time não consegue despachar os caminhões. Eu vou perder metade da equipe por sobrecarga."
    },
    {
      name: "Dr. Arnaldo",
      role: "CFO da Holding (Tomador de Decisão)",
      influence: "Alto Poder / Baixo Interesse (Decisor Indireto / Cortador de Custos)",
      profile: "Centralizador, frio, analítico, focado unicamente na meta de corte global de despesas da holding.",
      comment: "Prezados, por diretriz de reestruturação da holding, solicito aditivo contratual para redução de 30% do escopo e do valor mensal da V360 em até 48 horas. Caso não seja possível acomodar essa redução, iniciaremos o processo de distrato total por descontinuidade."
    }
  ],
  incidents: {
    text: "O cliente opera na versão Enterprise máxima, sem falhas técnicas ou oscilações. Thiaguinho relata pânico operacional de sofrer cortes nas ferramentas essenciais.",
    status: "Ameaça Agitada de Churn Comercial (Downsell do CFO)"
  },
  dashboardData: {
    healthScore: 95,
    quadrant: "Monetização com Foco em Defesa (Top Carteira)",
    adoption: {
      metrics: [
        { label: "Consumo de Notas", value: "102%", comment: "Estabilidade e uso máximo" },
        { label: "Módulos em Uso", value: "Completo", comment: "Sem gorduras ou ociosidades" },
        { label: "Conferência Cega", value: "100% Ativo", comment: "Crucial para liberação de carretas" }
      ],
      description: "Hiper-adoção cravada em 102% de uso contínuo, provando que operam acima do contratado de forma fluida.",
      chartValue: 100
    },
    support: {
      metrics: [
        { label: "Atendimento SLA", value: "99%", comment: "Resolução impecável" },
        { label: "Bugs Críticos (6m)", value: "0", comment: "Estabilidade máxima histórica" },
        { label: "Tickets Abertos", value: "Estável", comment: "Fluxo regular de dúvidas operacionais" }
      ],
      description: "Suporte técnico altamente estável. Engenharia blindada de qualquer argumento de erros ou bugs.",
      chartValue: 99
    },
    relationship: {
      metrics: [
        { label: "NPS Thiago (Key User)", value: "10 (Promotor)", comment: "Totalmente dependente e fã" },
        { label: "NPS Dr. Arnaldo (CFO)", value: "Em branco", comment: "Nunca respondeu ou participou" },
        { label: "Presença em reuniões", value: "50%", comment: "Thiago vai a todas, Arnaldo a 0%" },
        { label: "Tempo restante contrato", value: "10 meses", comment: "Forte escudo legal de fidelidade" }
      ],
      description: "A operação adora a V360. A fricção se resume à meta cega de corte financeiro de TI por parte da holding.",
      chartValue: 95
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Paradoxo da Nota (Visão Geral)",
      context: "Você recebe o e-mail do Dr. Arnaldo dando 48 horas para cortar 30% do contrato. Ao abrir a Visão Geral do cliente, qual indicador visual escancara o paradoxo desse pedido?",
      options: [
        {
          id: "A",
          text: "O indicador 'Nível de Saúde Equalizado', que marca 95 pontos (Saudável). O cliente tem uma saúde impecável, o que anula a narrativa de que o produto falhou.",
          feedback: "(Correta) Você identificou que a crise não é de satisfação, mas sim uma pressão financeira cega da holding.",
          isCorrect: true
        },
        {
          id: "B",
          text: "O indicador de 'Margem Operação (SaaS)', para verificar se a V360 pode absorver um desconto de 30% sem gerar prejuízo interno para a nossa empresa.",
          feedback: "Game Over! Avaliar a margem interna para ver se você 'pode dar um desconto' é uma postura comercial submissa. O papel do CS é defender a receita baseada em valor.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O gráfico de 'Evolução do Health Score por Mês', para ver se a nota caiu repentinamente nos últimos 30 dias justificando a raiva do CFO.",
          feedback: "Game Over! A nota está cravada em 95 pontos. Ela não caiu, a conta está no topo da excelência técnica.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando o Vácuo (Pilar de Relacionamento - Reuniões)",
      context: "O CFO afirma no e-mail que o sistema é cortável. Você acessa a aba Pilar de Relacionamento. Qual indicador visual comprova que o Dr. Arnaldo está emitiendo uma ordem de corte às cegas?",
      options: [
        {
          id: "A",
          text: "O indicador 'Visitas Presenciais'. Verifico que a equipe da V360 não o visita presencialmente há 6 meses, o que gerou o distanciamento.",
          feedback: "Game Over! A falta de visita física não justifica o cancelamento de uma ferramenta que funciona. O problema central é o desalinhamento de negócios.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O gráfico 'Participação em Reuniões de Sucesso', indicando que o Thiago tem 100% de presença, mas o Dr. Arnaldo tem 0%.",
          feedback: "(Correta) Você mapeou o abismo de comunicação: a liderança financeira quer cortar o sistema porque nunca participou das reuniões (EBRs) de entrega de valor.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O indicador 'Tempo desde o último contato', marcando apenas 2 dias.",
          feedback: "Game Over! Esse indicador mostra o contato diário da V360 com o Thiago (operação), mas esconde totalmente a falta de contato com quem decide.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: Mapeando as Vozes (Pilar de Relacionamento - NPS)",
      context: "Você precisa medir a fricção interna na MegaLog. No painel de NPS, o que a análise de preenchimento te revela sobre o conflito de interesses na conta?",
      options: [
        {
          id: "A",
          text: "O Dr. Arnaldo não tem nota registrada (campo em branco). Deduzo que ele esqueceu de avaliar, então peço para o suporte reenviar a pesquisa para ele antes de marcarmos a reunião.",
          feedback: "Game Over! Reenviar pesquisa de satisfação para um CFO que acabou de ameaçar distrato é o cúmulo da falta de tato comercial.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O Thiago (Key User) deu nota 10 (Promotor Extremo). A operação é dependente do sistema.",
          feedback: "(Correta) Você identificou seu maior aliado. O desespero da operação em não perder a V360 é a sua munição técnica para confrontar o CFO.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Ambas as notas estão na faixa 7 ou 8 (Neutros), indicando que nem a operação faz questão de defender o sistema.",
          feedback: "Game Over! O WhatsApp do Thiago e a nota 10 provam que ele é um defensor feroz da V360. A apatia é exclusividade do CFO.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: A Prova do Uso (Pilar de Adoção - Volume)",
      context: "O CFO quer cortar 30% da verba. Qual indicador desmente a hipótese financeira de que eles possuem 'gordura', licenças ociosas ou módulos que podem ser facilmente desligados?",
      options: [
        {
          id: "A",
          text: "O indicador '% de Notas Ingressadas vs. Contratadas', que aponta 102% de utilização estável. Eles usam mais do que o teto da franquia.",
          feedback: "(Correta) Você achou o dado matemático inegável: eles não estão pagando por capacidade ociosa. Cortar 30% do contrato exigiria cortar 30% da operação logística deles.",
          isCorrect: true
        },
        {
          id: "B",
          text: "O indicador '% de Notas escrituradas / ingressado' em 50%.",
          feedback: "Game Over! Se a escrituração estivesse em 50%, metade do trabalho deles estaria falhando, o que daria total razão técnica para o CFO cortar o sistema por ineficiência.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O gráfico de 'Adoção de Fornecedores por Mês' mostra que muitos parceiros novos entraram no portal.",
          feedback: "Game Over! Fornecedores externos engajados são ótimos, mas não provam que a MegaLog utiliza internamente a capacidade total que paga no boleto.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: O Enraizamento Processual (Pilar de Adoção - Lock-In)",
      context: "O e-mail do CFO exige a redução do escopo (ex: desligar a 'Conferência Cega'). Qual indicador do dashboard prova o impacto técnico imediato na empresa deles se esse módulo for desativado?",
      options: [
        {
          id: "A",
          text: "O indicador 'Valor Médio de Lock In', que está no patamar máximo de profundidade de automação. Isso comprova que a V360 é a espinha dorsal logística deles. Desligar esse módulo pararia os caminhões na balança.",
          feedback: "(Correta) O Lock-in máximo traduz o risco de desastre operacional. O sistema não é um acessório periférico, é o motor da expedição.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Abro a aba de 'Elegibilidade' no Painel de Expansão para verificar se eles poderiam sofrer um Downgrade suave (migrar da versão Enterprise para a versão Controle).",
          feedback: "Game Over! O dossiê já avisa que a complexidade logística deles esgotou as portas do ERP. Rebaixar a versão do sistema quebraria a arquitetura técnica da empresa por completo.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O indicador de 'Automatismo do ERP nativo'.",
          feedback: "Game Over! A V360 mede o automatismo das integrações da própria plataforma (Lock-In), e não a velocidade isolada do ERP da MegaLog.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: A Blindagem Técnica (Pilar de Suporte)",
      context: "Você vai construir a defesa para a reunião. Na aba Pilar de Suporte, como você garante que o CFO não terá brechas para culpar 'falhas de sistema' pelo corte?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Atendimento ao SLA' está em 99%, mas a 'Quantidade de Chamados' dobrou nesta semana. Foco no SLA para provar que a V360 responde rápido.",
          feedback: "Game Over! O CFO pode usar o dobro de tickets abertos como prova de que a ferramenta 'dá muito trabalho' e precisa ser cortada.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador 'CSAT (%)' está em 95%. Uso as notas altas das pesquisas de suporte para provar o valor.",
          feedback: "Game Over! O CSAT de 95% é ótimo, mas é uma métrica de vaidade para um CFO cortador de custos. Ele quer ver o retorno na fatura.",
          isCorrect: false
        },
        {
          id: "C",
          text: "A 'Incidência de Bug Crítico' (zerada há 6 meses) somada ao 'Atendimento ao SLA' (em 99%).",
          feedback: "(Correta) A engenharia está blindada. O Dr. Arnaldo não pode tentar desqualificar a estabilidade técnica da V360 para justificar o distrato.",
          isCorrect: true
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: A Linha do Tempo Legal (Visão Geral - Contrato)",
      context: "O CFO te deu um ultimato agressivo de 48 horas. Você precisa avaliar o poder de barganha legal da V360 antes de responder o e-mail. Qual indicador da Visão do Cliente você busca e como o utiliza?",
      options: [
        {
          id: "A",
          text: "Busco o indicador 'Proximidade do Fim do Contrato'. Como não tem nenhum alerta crítico ativado, aceito fazer o Downsell para evitar conflito com a diretoria.",
          feedback: "Game Over! Aceitar o corte de 30% em uma conta super saudável é assinar atestado de incompetência comercial. Você perdeu faturamento (MRR) sem lutar.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Busco o 'Tempo até o Fim do Contrato'. O indicador marca exatos 10 meses. Uso esse tempo legal para não ceder à pressão imediata das 48 horas e exigir uma agenda técnica.",
          feedback: "(Correta) Você sabe que, legalmente, eles não podem quebrar um contrato corporativo amanhã sem pagar multas severas. O contrato longo é o seu escudo temporal.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Busco a 'Etapa Atual'. Como o cliente está em 'Operação', a regra diz que não podemos alterar escopo comercial. Respondo o e-mail negando a solicitação de imediato.",
          feedback: "Game Over! Dizer um 'Não' seco para o Diretor Financeiro da holding gerará uma inimizade corporativa irreversível.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: A Posição de Defesa (Dashboard de Expansão)",
      context: "Para consolidar a estratégia, você abre o Dashboard de Expansão. A MegaLog possui Saúde Perfeita (95) e Baixo Potencial de Expansão. Isso a coloca no quadrante 'Foco em Melhoria Paga' (ou Blindagem). Qual é a ação padrão recomendada?",
      options: [
        {
          id: "A",
          text: "Executar um Cross-sell agressivo. Tento empurrar um módulo novo para compensar a perda dos 30% que o CFO quer cortar.",
          feedback: "Game Over! Tentativa desastrosa. Oferecer mais produtos para um C-Level focado em meta de cortes só vai irritá-lo profundamente.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Como o potencial é baixo e o cliente usa tudo, a estratégia principal é a 'Blindagem de Retenção': defender o MRR contratado provando a dependência extrema da operação (Adoção/Lock-in).",
          feedback: "(Correta) O foco absoluto do CS aqui é usar os dados operacionais para travar a tesoura do CFO e manter a base de faturamento 100% protegida.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Mudar a MegaLog para o segmento Low Touch, diminuindo as EBRs, já que o CFO quer reduzir os custos operacionais da parceria.",
          feedback: "Game Over! A conta é Enterprise de Alta Complexidade. Rebaixar o nível de atendimento para automações causaria um apagão de suporte e o Churn certo.",
          isCorrect: false
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: A Resposta Executiva (O Fechamento de Loop)",
      context: "O relógio das 48 horas está rodando e a estratégia está montada. Qual é o posicionamento exato que você escreve no e-mail de resposta para o Dr. Arnaldo (CFO)?",
      options: [
        {
          id: "A",
          text: " 'Dr. Arnaldo, recebemos sua solicitação. Como a MegaLog é uma conta Enterprise, o contrato prevê pesadas multas para a redução de escopo neste momento. Podemos agendar uma reunião com nosso time Jurídico e Comercial para revermos as cláusulas?' ",
          feedback: "Game Over! Ameaçar um C-Level com multas e envolver o jurídico de imediato destrói qualquer possibilidade de relação de parceria a longo prazo.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Dr. Arnaldo, compreendo a diretriz financeira da holding. Como não podemos reduzir 30% do valor mantendo o sistema completo, elaborei uma proposta de rebaixamento de versão (Downgrade), desativando alguns módulos secundários para que possamos atingir a sua meta.' ",
          feedback: "Game Over! Você foi extremamente prestativo, mas cedeu completamente ao Downsell injustificado sem defender que o escopo atual é vital para a operação.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Dr. Arnaldo, compreendemos a diretriz de reestruturação da holding. Contudo, nossa auditoria atesta que a MegaLog opera hoje com 102% de adoção sistêmica. Reduzir 30% do escopo técnico paralisará fisicamente o fluxo de expedição das suas filiais. Solicito 15 minutos na sua agenda para apresentar o impacto em faturamento que essa medida trará.' ",
          feedback: "(Correta) Resposta de Mestre. Você acatou a pressão, puxou o dado numérico irrefutável e engatilhou uma reunião executiva focada na dor principal dele: a perda de faturamento logístico.",
          isCorrect: true
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: O Business Case Reverso (Reunião de Fechamento)",
      context: "O e-mail causou impacto. O Dr. Arnaldo aceitou os 15 minutos. Na sala virtual estão você, o CFO e o Thiago (Key User). Qual é a tese estrutural que você coloca na mesa para desarmar o corte?",
      options: [
        {
          id: "A",
          text: "Mostro o painel de uso do Thiago e defendo que, se o sistema for cortado, eles teriam que aprovar dezenas de horas extras para a equipe fazer a conciliação manual.",
          feedback: "Game Over! Horas extras da operação (tático) raramente comovem um CFO que acabou de assinar um pacote massivo de cortes (estratégico).",
          isCorrect: false
        },
        {
          id: "B",
          text: "Apresento o 'Business Case Reverso (Capacidade de Carga)': provo com os 102% de adoção que a equipe enxuta que sobrou na MegaLog só consegue dar vazão ao volume de saída porque a V360 automatiza o processamento em milissegundos. Se cortarmos 30% do contrato, o gargalo braçal vai engarrafar o pátio de carretas, e a MegaLog perderá diretamente R$ [X] em atrasos de faturamento.",
          feedback: "(Correta. Prepare-se para o Roleplay!) Xeque-mate. Você traduziu o 'uso de software' na linguagem que trava um corte financeiro: a previsão de prejuízo comercial direto.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Apresento os relatórios de estabilidade de Suporte e defendo que a V360 tem uma tecnologia Premium, portanto vale cada centavo do preço original.",
          feedback: "Game Over! Justificar 'qualidade' não rebate a meta matemática que o CFO precisa bater. É preciso falar de dinheiro.",
          isCorrect: false
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Dr. Arnaldo (CFO)",
    scenarioText: "O facilitador assume o papel de Dr. Arnaldo (CFO da Holding). Ele é implacável, direto e focado em metas financeiras fiscais. Ele começa a reunião dizendo: 'Pessoal, não é nada pessoal com a V360. Tenho uma meta global inegociável de cortar 30% de todos os custos de TI. Ou vocês reduzem o valor da assinatura em 30% e mantêm o sistema no ar, ou reduzem as ferramentas. Não tenho tempo ou margem para negociar pacotes de tecnologia.'",
    criteria: [
      {
        title: "Resiliência frente à Pressão (Sem Desconto)",
        expectation: "O CS não entra em pânico, não oferece descontos de retenção e se posiciona puramente como um analista de viabilidade da operação logística.",
        example: " 'Dr. Arnaldo, o papel da V360 é justamente proteger a rentabilidade da MegaLog. Aceitamos a reunião para provar que forçar esse corte de 30% no nosso contrato causará, imediatamente, um aumento massivo nos custos logísticos invisíveis da sua holding.' "
      },
      {
        title: "Apresentação do Business Case Reverso",
        expectation: "Usar a taxa de hiperadoção (102%) e a profundidade sistêmica (Lock-in) para provar que a V360 não é um software acessório cortável, mas a infraestrutura base do faturamento dele.",
        example: " 'O seu sistema hoje está rodando a 102% de capacidade máxima. Após as reestruturações de folha, o nosso módulo de Conferência Cega assumiu todo o fluxo braçal do pátio. Cortar 30% dessa automação hoje significa deixar carretas engarrafadas na porta da distribuidora, impedindo o faturamento de saída da sua empresa.' "
      },
      {
        title: "Alinhamento com o Key User (Prova Social)",
        expectation: "Utilizar a dor tática e a sobrecarga operacional (Thiago) como evidência técnica de que o colapso é iminente, sem transferir o atrito para a figura do funcionário.",
        example: " 'O time do Thiago coordena a expedição de forma impecável porque a V360 virou a espinha dorsal de validação dele. Desativar módulos agora é o equivalente a cortar 30% da energia elétrica do galpão de vocês sob o pretexto de economizar na conta de luz.' "
      },
      {
        title: "Pacto de Estabilidade (Blindagem do MRR)",
        expectation: "Validar os 10 meses restantes de contrato e substituir o pedido de corte por um reporte periódico de ganhos e capacidade, esvaziando a diretriz de Downsell.",
        example: " 'Nosso contrato prevê essa sustentação plena por mais 10 meses e estamos aqui para garantir que sua operação não sofra panes. Para justificar a nossa manutenção total do escopo perante a holding, me comprometo a enviar quinzenalmente o volume de faturamento de carga que as nossas automações asseguraram de forma direta.' "
      }
    ]
  }
};
