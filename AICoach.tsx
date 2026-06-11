import { Scenario } from "../types";

export const scenario8: Scenario = {
  id: 8,
  title: "Cenário 8: O Foguete Low Touch (Plano de Evolução)",
  objective: "Desenvolver a habilidade do CS de identificar um cliente Low Touch com hiperadoção, parar de atuar como 'cobrador de boletos excedentes' e conduzir o 'Plano de Evolução de Conta', migrando o cliente de segmento e de versão, focando puramente em previsibilidade de caixa para a Diretoria.",
  profile: {
    client: "FastCommerce",
    segment: "Low Touch",
    duration: "Contrato de 2 anos",
    window: "14 meses vigentes restantes de parceria comercial",
    context: "Contrato de 2 anos com crescimento acelerado orgânico. O cliente opera em canais e fluxos automatizados (Low Touch) sem cadências estratégicas humanas."
  },
  eligibility: {
    has: [
      "Fluxo de material",
      "Autenticidade",
      "Ambiente de homologação",
      "Help Hub (Módulo de chamado)"
    ],
    eligible: [
      "Fluxo de serviços",
      "Fluxo de medição",
      "Fluxo de comissão",
      "Fluxo de concessionária",
      "Fluxo de CTE",
      "Fluxo de CTEOS",
      "Fluxo de outros documentos",
      "Fluxo de invoice (estrangeira)",
      "Fluxo de Débito e Crédito",
      "Agendamento de entrega",
      "Módulo de Pedidos",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "Conferência cega",
      "RANFs",
      "Adiantamento",
      "DDA",
      "Comprovante de Pagamento",
      "Antecipação",
      "Duplicata Escritural",
      "IPTU",
      "Leitura Automática dos Documentos"
    ],
    notEligible: []
  },
  stakeholders: [
    {
      name: "Bruno",
      role: "Analista Financeiro (Key User)",
      influence: "Baixo Poder / Alto Interesse (Hiper-usuário Silencioso)",
      profile: "Operador silencioso de excelente rendimento. Processa enormes volumes na ferramenta e resolve dúvidas no autoatendimento, adorando as automatizações.",
      comment: "Lança toda a volumetria fiscal nas telas de forma autônoma pelas filiais em expansão rápida, sem queixas registradas no suporte."
    },
    {
      name: "Sofia",
      role: "Gerente Financeira/CFO (Tomadora de Decisão)",
      influence: "Alto Poder / Baixo Interesse (Decisora de Caixa)",
      profile: "Extremamente rigorosa com o planejamento orçamentário trimestral linear (budget fechado). Detesta custos extras surpresas.",
      comment: "Nossa fatura este mês veio 40% mais cara por causa de 'taxas de excedente'. Ninguém nos avisou que estávamos estourando o limite. Isso quebra meu planejamento trimestral inteiro."
    }
  ],
  incidents: {
    text: "O cliente abriu um chamado técnico no Help360 contestando a volatilidade do faturamento após as faturas virem com 40% de acréscimo relativo às taxas de volumetria excessiva.",
    status: "Risco de Fadiga de Custo Variável (Fatura Inesperada)"
  },
  dashboardData: {
    healthScore: 85,
    quadrant: "Foco em Expansão (Estouro Saudável de Volume)",
    adoption: {
      metrics: [
        { label: "Notas Ingressadas", value: "250%", comment: "Hiper-estouro grave do contrato" },
        { label: "Modelo Operante", value: "Controle (Básico)", comment: "Necessita Upsell corporativo" },
        { label: "Lock-in de Fluxos", value: "Máximo", comment: "Total enraizamento nas filiais" }
      ],
      description: "O volume de notas saltou para gigantescos 250% do limite contratado original devido à abertura acelerada de filiais.",
      chartValue: 100
    },
    support: {
      metrics: [
        { label: "Atendimento SLA", value: "100%", comment: "Resolução célere pelo Help Hub" },
        { label: "Bugs Críticos", value: "0", comment: "Estabilidade impecável absoluta" },
        { label: "Contestação de Fatura", value: "1 Ativo", comment: "Chamado aberto pela Sofia" }
      ],
      description: "Suporte 100% perfeito de SLA. O único ticket em aberto é a contestação financeira da fatura de volumetria.",
      chartValue: 100
    },
    relationship: {
      metrics: [
        { label: "NPS Bruno (Key User)", value: "10 (Promotor)", comment: "Ama a facilidade técnica" },
        { label: "NPS Sofia (CFO)", value: "6 (Detratora)", comment: "Irritada com as surpresas na conta" },
        { label: "Participação em EBRs", value: "0%", comment: "Nunca teve agendas humanas (Low Touch)" },
        { label: "Plano de Sucesso", value: "Em branco", comment: "Sem metas formais registradas" }
      ],
      description: "Operador feliz, mas CFO detratora pela volatilidade. Fracasso de governança orçamentária por falta de contato síncrono.",
      chartValue: 50
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Diagnóstico do Alerta (Pilar de Adoção)",
      context: "Você assumiu a carteira Low Touch e identificou a reclamação da Sofia sobre a volatilidade da fatura. Para mapear a origem desse faturamento adicional por volume, qual indicador visual do Pilar de Adoção você analisa primeiro?",
      options: [
        {
          id: "A",
          text: "O indicador '% Notas Ingressadas vs. Contratadas', que exibe um estouro de consumo marcando colossais 250% da franquia original.",
          feedback: "(Correta) Dados incontestáveis. A FastCommerce engoliu o pacote contratado e o processamento continuou rodando no preço avulso de tabela.",
          isCorrect: true
        },
        {
          id: "B",
          text: "O indicador '% de Notas escrituradas / ingressado', avaliando se a equipe está errando as regras de validação.",
          feedback: "Game Over! O fechamento atrasado e a insatisfação da Sofia referem-se à flutuação de custos adicionais do sistema, e não a falhas de escrituração interna deles.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O gráfico 'Valor Médio de Lock In e Automatismo', para checar se eles desativaram alguma integração padrão.",
          feedback: "Game Over! O Lock-in aponta aderência profunda e uso correto dos fluxos. O que infla a cobrança é a volumetria bruta de documentos acima do limite.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando o Modelo Atual (Visão Geral)",
      context: "O volume de faturamento de notas está 2,5 vezes maior que o limite. Para entender como acomodar estruturalmente esse crescimento, você abre o Dashboard de Visão Geral para checar a fotografia cadastral da conta. Quais indicadores te mostram o modelo atual do cliente?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Margem Operação (SaaS)'. Se a nossa margem com eles aumentou devido ao estouro, a orientação diz para manter o plano como está.",
          feedback: "Game Over! Priorizar o lucro imediato em cima de faturamentos variáveis surpresas corrói a confiança do cliente e acelera a perda futura da conta por churn emocional.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Os indicadores de modelo de atendimento ('AM Touch') e 'Versão', constatando que o cliente está enquadrado como Low Touch e opera no plano básico 'Controle'.",
          feedback: "(Correta) Diagnóstico preciso. A FastCommerce cresceu de forma acelerada, mas a sua estrutura de contrato continua amarrada a um motor de entrada limitado.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O indicador de 'Nível de Saúde Equalizado', verificando se a nota geral da conta despencou para a faixa de risco crítico.",
          feedback: "Game Over! A saúde geral marca 85 pontos (Saudável) porque a operação está em plena atividade. Ela esconde o estresse financeiro que está ocorrendo nos bastidores da diretoria.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: A Gravidade do Distanciamento (Pilar de Relacionamento - NPS)",
      context: "A operação superou o limite do contrato. Para medir o real impacto financeiro desse distanciamento na percepção de quem assina o cheque, você acessa a aba do Pilar de Relacionamento. Qual cruzamento visual comprova a colisão de interesses?",
      options: [
        {
          id: "A",
          text: "A linha do tempo de interações, checando a taxa de abertura das réguas automatizadas de e-mail marketing enviadas para a caixa postal da Sofia.",
          feedback: "Game Over! Conforme detalhado no dossiê de contexto, disparos automáticos de marketing não geram registros na árvore de relacionamento do dashboard e não servem para quantificar a insatisfação real de negócios.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O cruzamento no indicador 'NPS - Key User e Tomador de Decisão', evidenciando o abismo de percepção: o analista (Bruno) avaliou com nota 10, mas a CFO (Sofia) deu nota 6 (Detratora).",
          feedback: "(Correta) Paradoxo clássico de uso mapeado. A operação fiscal comemora a eficiência das automações, mas a gerência financeira entra em pânico com os custos variáveis não planejados.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O indicador de 'Visitas Presenciais', constatando que a ausência de agendas físicas gerou a nota vermelha no pilar.",
          feedback: "Game Over! Contas enquadradas no segmento Low Touch possuem atendimento assíncrono e não recebem visitas presenciais do time. A falta de visita não é a causa raiz da detração da Sofia.",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: O Vácuo de Informação (Pilar de Relacionamento - Reuniões)",
      context: "Sofia registrou formalmente: 'Ninguém nos avisou que estávamos estourando o limite'. Ainda no Pilar de Relacionamento, qual indicador do painel justifica matematicamente o porquê de a governança da V360 ter falhado em prever esse susto orçamentário?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Atingimento de Indicadores de Sucesso (%)', constatando que o campo de metas executivas está completamente zerado ou em branco no painel.",
          feedback: "Game Over! Estar em branco prova que nunca desenhamos o plano de sucesso com eles, mas não justifica por si só a ausência de avisos sobre faturamento excessivo de volumetria.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O indicador de 'CSAT (%)', avaliando se a insatisfação ocorreu por demora do nosso time em responder aos chamados anteriores da gerência.",
          feedback: "Game Over! O dashboard aponta que o SLA de suporte está cravado em 100% de eficiência. O vácuo de informação não foi uma falha técnica de chamado ou assistência.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O indicador 'Participação em Reuniões de Sucesso' marcando 0%. Por ser uma conta de entrada, o modelo assíncrono não possui ritos humanos de Revisão Executiva (EBR) para alinhar previsibilidade de custos.",
          feedback: "(Correta) Você identificou o calcanhar de Aquiles do modelo puramente automatizado: a falta de contato estratégico humano gerou um ponto cego sobre as flutuações de custos do cliente.",
          isCorrect: true
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: Verificação de Dependência (Pilar de Adoção - Lock-In)",
      context: "Antes de contatar a Sofia para sugerir um upgrade de contrato, você precisa garantir que o software está enraizado na empresa. Qual indicador do Pilar de Adoção te dá a segurança de que eles não podem simplesmente cancelar a V360 se você recusar o desconto?",
      options: [
        {
          id: "A",
          text: "O indicador de 'Valor Médio de Lock In', constatando que ele se encontra no nível máximo de aderência e conectividade de processos.",
          feedback: "(Correta) Segurança confirmada. A FastCommerce está tecnologicamente dependente dos nossos fluxos ativos. A CFO não quer romper a parceria; ela quer estancar a incerteza do faturamento variável.",
          isCorrect: true
        },
        {
          id: "B",
          text: "A tabela de 'Fornecedores Ativos', avaliando a quantidade de parceiros emitindo XMLs de filiais novas contra o CNPJ deles.",
          feedback: "Game Over! O volume de fornecedores externos é um dado de ecossistema. Ele não prova o nível de dependência ou uso das ferramentas de validação internas pelo Bruno.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O indicador '% de Notas escrituradas / ingressado', avaliando se a taxa atingiu os 100% de conclusão.",
          feedback: "Game Over! A taxa mostra eficiência nas finalizações, mas a métrica oficial que atesta a amarração estrutural de dependência de TI é o Lock-In.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: Identificando a Alavanca (Dashboard de Expansão)",
      context: "A estratégia está clara: desenhar o upgrade para um plano avançado com franquia estendida, eliminando as taxas avulsas. No Dashboard de Expansão, qual visualização consolida que essa conta deve ser priorizada para uma ação comercial de expansão imediata?",
      options: [
        {
          id: "A",
          text: "A tabela de 'Detalhamento de Oportunidades', para checar se a 'Margem' do cliente justifica darmos uma bonificação de preço na negociação.",
          feedback: "Game Over! A margem operacional interna indica rentabilidade para o nosso caixa, mas não mede a propensão ou o fit de crescimento de demanda do cliente.",
          isCorrect: false
        },
        {
          id: "B",
          text: "A 'Matriz de Quadrantes' de potencial de mercado. O cliente encontra-se posicionado no quadrante 'Foco em Expansão' (Alto Health Score e Alto Potencial), atestando o momento perfeito para a evolução da conta.",
          feedback: "(Correta) Cruzamento impecável. A saúde operacional do Bruno somada ao estouro contínuo de volume empurrou a conta para o melhor quadrante de receita da carteira.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O 'Expansion Score' avaliado puramente na métrica de Cross-sell, indicando a venda de novas features de comissão ou concessionária.",
          feedback: "Game Over! O cliente não precisa de novos módulos de nicho (Cross-sell). A urgência é adequar o limite de volume e a versão do plano de captura (Upsell).",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: O Sentido de Urgência (Visão Geral - Contrato)",
      context: "Consultando o indicador de 'Tempo até o Fim do Contrato' na Visão Geral, você constata que restam 14 meses de vigência. Qual deve ser a sua postura em relação ao timing dessa negociação de expansão?",
      options: [
        {
          id: "A",
          text: "Como o contrato atual vai demorar mais de um ano para vencer, configuro um alerta mensal para avisar a Sofia sobre os custos adicionais e seguro a negociação de upgrade até a janela de renovação regular.",
          feedback: "Game Over! Limitar-se a atuar como cobrador assíncrono de taxas de excedente por mais 14 meses sabendo da profunda insatisfação da CFO corrói as pontes relacionais.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Ignoro a distância do vencimento e aciono o time comercial para estruturar um aditivo contratual imediato, matando as taxas avulsas atuais e fixando o novo pacote de volume a partir deste mês.",
          feedback: "(Correta) O Plano de Evolução de Conta usa a dor do faturamento variável imediato como alavanca de expansão ativa, gerando receita previsível antecipada.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Solicito ao suporte técnico a paralisação forçada da captura de notas fiscais nas filiais novas sempre que o consumo atingir 100%, travando o faturamento variável.",
          feedback: "Game Over! Bloquear o faturamento interrompe o crescimento deles. Isso gera detração máxima definitiva e cancelamento por quebra de suporte.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: Quebrando o Silêncio (O Convite de Alinhamento)",
      context: "Você vai disparar um e-mail para a Sofia (CFO) para trazê-la para uma mesa síncrona de negociação. Como você formula essa abordagem de forma consultiva?",
      options: [
        {
          id: "A",
          text: " 'Sofia, identificamos no nosso painel que a FastCommerce estourou a franquia em 150%. Solicitamos uma chamada de 20 minutos para apresentar nossa versão Enterprise, caso contrário, as taxas de excedente virão ainda mais altas no próximo fechamento.' ",
          feedback: "Game Over! Tom puramente transacional, focado em penalizar a utilização e forçar a venda secundária. Você agiu como um cobrador inflexível.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Sofia, vimos sua contestação no chamado técnico. Gostaria de agendar 15 minutos com o Bruno para treiná-lo a reduzir a quantidade de notas fiscais que ele joga no sistema, evitando novos custos adicionais por volume.' ",
          feedback: "Game Over! Tentar restringir o uso do cliente para caber em plano defasado vai contra o crescimento orgânico dele. O papel do CS é zelar pela escala saudável.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Sofia, compreendo a sua frustração com a volatilidade na última fatura. Analisamos os dados e a FastCommerce expandiu organicamente muito além do plano inicial. Solicito 20 minutos para apresentar um cenário focado em estabilizar esse custo e garantir previsibilidade para o seu caixa.' ",
          feedback: "(Correta) Abordagem cirúrgica. Você ignorou termos punitivos, validou a dor orçamentária da CFO e usou o crescimento deles como justificativa para o contato de negócios.",
          isCorrect: true
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: A Tese de Valor Executiva (O Caso de Negócio)",
      context: "A reunião foi agendada. O Bruno já opera de forma ultra-eficiente. O que você estrutura na aba 'Análise de Viabilidade' do seu Business Case para convencer a Sofia de que assinar um plano avançado fixo mais caro é a melhor decisão financeira?",
      options: [
        {
          id: "A",
          text: "Estruturo o plano provando que as travas de validação automatizadas da nova versão permitirão à FastCommerce reduzir o headcount do departamento, possibilitando o desligamento de analistas fiscais da equipe.",
          feedback: "Game Over! O cliente está na escala acelerada de filiais. Demitir analistas não é prioridade da Sofia; ela quer infraestrutura que absorva a escala sem bagunçar o caixa.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Estruturo o comparativo financeiro focado em Previsibilidade de Caixa (Custo Fixo Mensal vs. Risco Variável). Provo matematicamente que o valor da mensalidade estável da nova versão é menor do que a média histórica dos picos de excedente somados, travando oscilações futuras.",
          feedback: "(Correta) Posicionamento de alto nível. Você falou a língua da CFO: trocar a incerteza do risco variável por um custo fixo mapeado e seguro dentro do orçamento anual (budget).",
          isCorrect: true
        },
        {
          id: "C",
          text: "Estruturo a proposta oferecendo uma bonificação comercial extraordinária: o perdão e cancelamento retroativo total de todas as taxas de excedente cobradas na fatura do mês passado em troca da assinatura do upgrade hoje.",
          feedback: "Game Over! Dar descontos ou anular faturamentos passados legítimos de volume consumido destrói a rentabilidade da carteira e passa uma imagem de fragilidade técnica. O papel do CS é resolver a previsibilidade de caixa futura, mantendo a governança comercial estável.",
          isCorrect: false
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: Estruturando a Transição de Touch",
      context: "A reunião começou com o Bruno e a Sofia na sala. Como o cliente pertence à camada automatizada (Low Touch) e nunca teve reuniões com o time humano, qual é a sua postura de abertura?",
      options: [
        {
          id: "A",
          text: "Passo a palavra diretamente para o Executivo de Expansão (AM) comercial para que ele apresente os valores da tabela de upgrade, já que o CS atua apenas no suporte técnico.",
          feedback: "Game Over! O CS é o líder da governança e o dono da pauta de valor. Entregar a chamada imediatamente para uma abordagem comercial transacional confirma a visão da Sofia de que a reunião é apenas uma armadilha de vendas.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Explico que as taxas de excedente são cobranças automáticas e legítimas da versão Controle, e que a única saída regulamentar prevista no contrato para as notas não travarem é aceitar a contratação de um pacote maior.",
          feedback: "Game Over! Postura reativa, burocrática e refém de regras contratuais frias. Você se posicionou como repassador de barreiras, distanciando a parceria.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Sofia, Bruno, o volume de vocês escalou e o plano inicial Controle acabou limitando o sucesso da FastCommerce. Nosso objetivo hoje é estruturar um upgrade não apenas de limite técnico, mas de parceria, migrando vocês para um modelo de atendimento focado em reuniões periódicas e total controle financeiro.' ",
          feedback: "(Correta. Vá para o Roleplay!) Transição perfeita de Touch. Você justificou a evolução do plano através do sucesso do uso e vendeu Governança humana e previsibilidade no lugar de faturamento de software.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Sofia (Gerente Financeira)",
    scenarioText: "O facilitador assume o papel de Sofia (Gerente Financeira/CFO). Ela está de braços cruzados, focada em números. Ela entra na chamada dizendo: 'O Bruno adora o sistema de vocês, mas esse faturamento variável que veio este mês quebra meu planejamento trimestral. Eu preciso de orçamento fechado. Como vocês querem que eu assine um contrato fixo mais caro se a minha diretriz corporativa proíbe inchar custos fixos com TI?'",
    criteria: [
      {
        title: "Abordagem da Dor Puxando o Crescimento",
        expectation: "Validar que a taxa adicional não é uma penalidade ou erro de sistema, mas sim o reflexo direto e saudável da expansão da FastCommerce, algo que precisa de uma estrutura que comporte o sucesso.",
        example: " 'Sofia, o faturamento variável foi um reflexo do crescimento acelerado de vocês. A operação escalou 250% no nosso painel com a abertura das filiais. O plano Controle cumpriu o papel inicial, mas agora virou um teto que pune o sucesso da FastCommerce.' "
      },
      {
        title: "Foco em Previsibilidade Financeira",
        expectation: "Fugir do clichê tradicional de ROI focado em demissões ou cortes de pessoal. O argumento para a CFO é a blindagem e o controle do fluxo de caixa e do budget anual.",
        example: " 'O nosso Plano de Evolução foi desenhado justamente para eliminar essa volatilidade. A nova versão fixa esse custo. Ela absorve todo o excedente atual e garante a folga necessária para as novas filiais sem gerar surpresa no caixa.' "
      },
      {
        title: "Venda de Modelo de Atendimento (Governança)",
        expectation: "Apresentar a mudança de segmento (saindo do Low Touch) como o principal ganho de controle. A CFO deixará de ter uma relação às escuras para ganhar uma cadeira de acompanhamento estratégico.",
        example: " 'Além da decolagem do volume, a FastCommerce avança para a nossa camada de atendimento estratégico. Isso significa que, a cada trimestre, eu sentarei com você em uma Revisão Executiva (EBR) focada em preencher suas metas de orçamentos fiscais.' "
      },
      {
        title: "Transição Fluida para a Venda (Mapeador)",
        expectation: "O CS defende a tese de valor e valida a adesão lógica da CFO. Ao receber o sinal verde estratégico, realiza o repasse formal e seguro para o Executivo de Expansão (AM) fechar as cláusulas.",
        example: " 'Sofia, essa estrutura de custo fixo previsível garante a tranquilidade que o seu planejamento orçamentário exige para este ano? Sendo positivo, nosso especialista em Expansão está aqui para detalhar o aditivo e proteger sua fatura fiscal.' "
      }
    ]
  }
};
