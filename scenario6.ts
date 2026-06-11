import { Scenario } from "../types";

export const scenario2: Scenario = {
  id: 2,
  title: "Cenário 2: A Gestão de War Room Operacional (Crise)",
  objective: "Desenvolver a habilidade do CS de identificar o abandono silencioso da plataforma cruzando indicadores de Adoção e Suporte, escalar a crise formalmente via War Room e construir um plano de recuperação focado em reconquistar a confiança do cliente.",
  profile: {
    client: "VarejoFácil",
    segment: "Mid Touch",
    duration: "Contrato antigo",
    window: "Em andamento normal, porém com alto risco de cancelamento no fim do semestre",
    context: "Contrato antigo, mas que nos últimos 3 meses enfrentou severas instabilidades de sistema e atrasos em integrações. A engenharia resolveu tudo há 48h, mas a operação resiste a usar."
  },
  eligibility: {
    has: [
      "Fluxo de serviços",
      "Fluxo de material",
      "Fluxo de CTE",
      "Autenticidade",
      "Help Hub (Módulo de chamado)",
      "Ambiente de homologação",
      "DDA"
    ],
    eligible: [
      "Fluxo de medição",
      "Fluxo de concessionária",
      "Módulo de Pedidos",
      "Conferência cega",
      "Leitura Automática dos Documentos",
      "Comprovante de Pagamento",
      "API Dados (escopo)"
    ],
    notEligible: [
      "Fluxo de comissão",
      "Fluxo de CTEOS",
      "Fluxo de outros documentos",
      "Fluxo de invoice (estrangeira)",
      "Fluxo de Débito e Crédito",
      "Agendamento de entrega",
      "API Dados (cliente utiliza)",
      "RANFs",
      "Adiantamento",
      "Antecipação",
      "Duplicata Escritural",
      "IPTU"
    ]
  },
  stakeholders: [
    {
      name: "Carlos",
      role: "Gerente (Key User)",
      influence: "Baixo Poder / Alto Interesse (Operador Detrator por Trauma)",
      profile: "Exausto de abrir chamados, perdeu totalmente a confiança. Precisa de validação empática e plano de ação tático.",
      comment: "Pessoal, vi que vocês fecharam os chamados de erro de integração ontem. Legal, mas minha equipe está exausta de ser 'testadora' do sistema. Voltamos a lançar as notas pelo ERP nativo na mão mesmo. Pelo menos lá eu sei que não trava no meio da tarde."
    },
    {
      name: "Mariana",
      role: "Diretora Financeira (Sponsor / Tomadora)",
      influence: "Alto Poder / Alto Interesse (Apoiadora Executiva / Sponsor)",
      profile: "Focada em compliance, processos auditáveis e eficiência rigorosa. Quer ver retorno financeiro real.",
      comment: "Não estou vendo o retorno do investimento. Se o meu time precisa voltar a fazer o trabalho manualmente porque a V360 não é confiável, não faz sentido mantermos essa assinatura para o próximo semestre."
    }
  ],
  incidents: {
    text: "A engenharia fechou todos os patches de integração nas últimas 48h. Tecnicamente o sistema está estável, mas o time está traumatizado e lançando manualmente.",
    status: "Risco de Abandono da Plataforma"
  },
  dashboardData: {
    healthScore: 58,
    quadrant: "Estabilização para Retenção (Risco Alto)",
    adoption: {
      metrics: [
        { label: "Volume de Notas vs. Contrato", value: "25%", comment: "Despencou de 85% no mês anterior" },
        { label: "Uso do ERP Nativo", value: "75%", comment: "Operação rodando fora do sistema" },
        { label: "Lock-in Integrado", value: "Baixo/Nulo", comment: "Desligaram a integração propositalmente" }
      ],
      description: "Queda abrupta de notas processadas. O cliente preferiu lançar no braço para evitar falhas de processos.",
      chartValue: 25
    },
    support: {
      metrics: [
        { label: "Atendimento SLA atual", value: "98%", comment: "Melhorou drasticamente" },
        { label: "Bugs Críticos ativos", value: "0", comment: "Nenhum no presente momento" },
        { label: "Chamados abertos", value: "-80%", comment: "Volume caiu drasticamente" }
      ],
      description: "Surpreendente eficiência no mês, mas gerada pelo silêncio: sem uso do sistema, não há novos reportes de bugs.",
      chartValue: 98
    },
    relationship: {
      metrics: [
        { label: "NPS do Carlos (Key User)", value: "3 (Detrator)", comment: "Comentário de erro de integração" },
        { label: "SLA Fechamento Loop NPS", value: "Atrasado", comment: "Requer contato urgente" },
        { label: "Tempo desde último touch", value: "15 dias", comment: "Último contato durante crise" }
      ],
      description: "Operador irritado; diretoria financeira exigindo suspensão ou ameaçando cancelamento contratual.",
      chartValue: 30
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Diagnóstico do Sintoma (Visão Geral)",
      context: "Você leu a mensagem de frustração do Carlos avisando que o time voltou a usar o ERP nativo. Ao abrir a Visão Geral do Health Score, qual cruzamento de dados na tela confirma a natureza da gravidade da situação?",
      options: [
        {
          id: "A",
          text: "Verifico que o 'Nível de Saúde Equalizado' está em 58 (Em Risco). Essa nota por si só já justifica ligar para o cliente imediatamente para pedir desculpas.",
          feedback: "Game Over! Ligar para pedir desculpas sem entender o que puxou a nota para baixo é ir para a guerra vendado. Você ignorou a análise por pilares.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Observo a 'Média do Health Score do Pilar de Suporte', que deve estar baixíssima neste mês, confirmando que o sistema continua travado e cheio de bugs impeditivos.",
          feedback: "Game Over! Você presumiu sem olhar o dado atualizado. O painel mensal de suporte mostra SLAs em 98% e zero bugs críticos. O sistema está funcionando perfeitamente, o problema é outro.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Observo a 'Saúde por Pilar' e noto que Relacionamento e Suporte estão se estabilizando na pontuação, mas o Pilar de Adoção despencou verticalmente para níveis críticos.",
          feedback: "(Correta) Você separou o trauma do passado da realidade do presente: a máquina voltou a funcionar, mas o operador foi embora.",
          isCorrect: true
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando a Queda (Pilar de Adoção - Volume)",
      context: "Você sabe que o problema central hoje é a Adoção. Para ter argumentos irrefutáveis de que o abandono é real, qual indicador específico na aba Pilar de Adoção você verifica?",
      options: [
        {
          id: "A",
          text: "Verifico o gráfico de '% de Notas Ingressadas vs. Contratadas', confirmando que ele caiu de 85% para 25% na visão mês a mês.",
          feedback: "(Correta) Contra dados não há argumentos. Você encontrou a prova numérica de que o volume de processamento sumiu da V360.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Verifico se a 'Franquia' contratada acabou, pois um estouro de franquia bloqueia o processamento automaticamente.",
          feedback: "Game Over! Acabar a franquia não gera interrupção forçada; gera faturamento excedente. Você desconhece as regras de negócio da plataforma.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Verifico a tabela de 'Detalhamento da Adoção de Fornecedores', pois os fornecedores deles devem ter parado de enviar os XMLs.",
          feedback: "Game Over! A mensagem do Carlos diz claramente que eles estão lançando 'pelo ERP nativo na mão'. Os fornecedores continuam mandando, mas a VarejoFácil parou de usar a V360 para capturar.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: A Profundidade do Abandono (Pilar de Adoção - Lock-in)",
      context: "O volume de notas caiu. Mas o quão fundo o cliente foi nesse boicote? Onde você verifica se eles apenas deixaram de enviar notas ou se ativamente desconectaram a V360 da operação deles?",
      options: [
        {
          id: "A",
          text: "No gráfico 'Valor Médio de Lock In e Automatismo', verificando se o indicador geral caiu de uma média de 'Alto' (ex: 80%) para níveis baixos ou nulos no mês atual.",
          feedback: "(Correta) O indicador de Lock-in rastreia fluxos e integrações ativas. Se ele caiu drasticamente, significa que o cliente desativou a integração propositalmente.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Na tabela 'Eventos de Upsell, Melhorias e Downsell', para ver se o Financeiro já registrou o cancelamento da integração.",
          feedback: "Game Over! O cliente não cancelou o contrato comercial de integração (MRR), ele apenas desligou a 'chave' técnica. O Financeiro ainda não sabe disso.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Na aba 'Pilar de Suporte', consultando o histórico de chamados concluídos para ver se fomos nós que desligamos o sistema.",
          feedback: "Game Over! O suporte não desliga integrações sem solicitação formal. Olhar para suporte não mede dependência tecnológica (Lock-in).",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: A Ilusão do Suporte (Cruzamento de Pilares)",
      context: "A adoção despencou (volume e lock-in). Contudo, no Pilar de Suporte, o Health Score de Suporte surpreendentemente subiu. Por que o painel apresenta essa anomalia e qual indicador de detração acende o alerta vermelho?",
      options: [
        {
          id: "A",
          text: "Porque a plataforma finalmente atingiu a estabilidade perfeita que a Mariana (CFO) queria.",
          feedback: "Game Over! Com a adoção em 25%, a falta de chamados não é paz, é o 'silêncio do cemitério'. Quem não usa, não acha erro e não abre chamado.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O score subiu pelos SLAs perfeitos deste mês, mas o gatilho de 'Redução Brusca no volume de chamados (-20 pontos)' comprova que a ausência de tickets é sintoma de um Churn Silencioso iminente.",
          feedback: "(Correta) Excelente leitura clínica. Você conectou a falta de ruído com a falta de uso, entendendo como a fórmula matemática do Health Score funciona.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Ocorreu um erro no cálculo automático de dados de Suporte pelo CS Ops, então eu devo ignorar essa aba e focar no contato humano.",
          feedback: "Game Over! Confie nos dados. A queda de 80% nos chamados é um dade real e perigoso, não um erro de painel.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: A Raiz do Sentimento (Pilar de Relacionamento)",
      context: "Você compreendeu a métrica técnica. Agora precisa entender o peso emocional. Na aba Pilar de Relacionamento, onde você coleta a prova definitiva de que o Carlos (Key User) carrega um trauma e não apenas preguiça de usar o sistema?",
      options: [
        {
          id: "A",
          text: "No gráfico 'Participação em Reuniões de Sucesso', vendo que ele faltou à última EBR.",
          feedback: "Game Over! Faltar a uma reunião mostra desengajamento, mas não revela a causa da frustração.",
          isCorrect: false
        },
        {
          id: "B",
          text: "No log detalhado da pesquisa 'NPS - Key User e Tomador de Decisão', localizando a nota 3 (Detrator) do Carlos e lendo o comentário textual dele sobre instabilidades constantes e lentidão.",
          feedback: "(Correta) Feedback é ouro. O comentário oficial no NPS te dá a justificativa documentada do porquê ele boicotou a V360.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Na linha do tempo de 'Contato com o Cliente (Recência e Histórico)', contando quantos e-mails ele deixou de responder.",
          feedback: "Game Over! Novamente, medir o silêncio não diz o que causou o silêncio. Você precisa da 'Voz do Cliente', que está na pesquisa de NPS.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: Mapeamento de Risco Financeiro (Aba Base/Visão Geral)",
      context: "A tempestade perfeita está formada: Adoção no chão, Churn Silencioso e Key User Detrator. Antes de acionar os botões de emergência, você cruza essas informações com a Data de Fim de Contrato na Visão Geral. Você percebe que o contrato vence em exatos 4 meses. Qual o impacto disso segundo o playbook?",
      options: [
        {
          id: "A",
          text: "O impacto é nulo na operação. Renovações são responsabilidade exclusiva de Vendas; eu continuo focando no treinamento do Key User.",
          feedback: "Game Over! Errado. O CS é responsável direto pela Retenção (Churn). Ignorar o calendário financeiro é negligência grave.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Acelera o cancelamento. Devo criar rapidamente uma proposta de redução de escopo (Downsell) para reter ao menos uma parte do MRR antes da renovação.",
          feedback: "Game Over! O processo de Downsell é a última linha de defesa, não o primeiro passo. Você está entregando os pontos sem lutar pela conta.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Configura uma 'Crise Financeira (Janela Crítica de Renovação)'. A proximidade do vencimento sem intenção de renovação comprovada eleva o risco para crítico e exige intervenção imediata para reverter a percepção de valor.",
          feedback: "(Correta) A combinação de crise operacional (falta de uso) com janela de renovação cria a urgência máxima do modelo preditivo.",
          isCorrect: true
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: A Classificação da Crise (Gatilhos e Ação)",
      context: "O cenário é de risco máximo. Baseado no playbook, de quem é a responsabilidade de puxar o freio de mão e como você classifica o problema ao preencher o 'Formulário de Abertura de War Room'?",
      options: [
        {
          id: "A",
          text: "A responsabilidade é do Suporte. Eu os aciono para abrirem uma 'War Room Técnica (Interna)', afinal, a origem do problema foram os bugs antigos do mês passado.",
          feedback: "Game Over! O painel de Suporte atual provou que o sistema está funcional. Classificar como erro técnico agora vai mobilizar a engenharia à toa enquanto o cliente continua sem usar.",
          isCorrect: false
        },
        {
          id: "B",
          text: "A responsabilidade é minha (CS). Eu preencho o Formulário solicitando uma War Room 'Operacional e Relacional (Externa)', pois os dados de Adoção e NPS provam o abandono da ferramenta e a Mariana já externalizou a ameaça de Churn.",
          feedback: "(Correta) Você usou o cruzamento exato dos dados para acionar a alavanca correta. A máquina funciona, mas a confiança precisa de resgate público.",
          isCorrect: true
        },
        {
          id: "C",
          text: "A responsabilidade é da Liderança de CS. Aguardo meu gestor ver o dashboard vermelho na 'Reunião Semanal' e me instruir sobre o que fazer.",
          feedback: "Game Over! O CS tem autonomia e dever de solicitar a abertura da War Room ao identificar o gatilho, não deve agir passivamente aguardando ordens.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: Estruturando a War Room (Critério de Sucesso)",
      context: "O formulário de War Room exige uma métrica de saída. Consultando o gráfico de tendência do Pilar de Adoção antes da crise, você viu que a média de notas ingressadas era de 85%. O que você preenche na pergunta: 'O que irá determinar o encerramento da War Room?'",
      options: [
        {
          id: "A",
          text: " 'Deixar o Carlos (Key User) feliz com a ferramenta e garantir que a equipe mude de ideia sobre nós.' ",
          feedback: "Game Over! Critério subjetivo e não mensurável. A Liderança rejeitará a War Room, pois sem uma métrica clara, ela vira um problema sem data para acabar.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Garantir a correção de 100% dos bugs em aberto e a estabilidade da plataforma por 30 dias.' ",
          feedback: "Game Over! Como você já diagnosticou, o sistema atual está estável. O problema é fazer o cliente voltar a usar.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Elevar a taxa de Notas Ingressadas vs. Contratadas de volta para o patamar de estabilidade de 80%, espelhando a média histórica que o painel apresentava antes da queda.' ",
          feedback: "(Correta) O War Room exige 1 critério de sucesso objetivo, focado no pilar ofensor (Adoção) e justificado por dados prévios.",
          isCorrect: true
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: Formato e Alinhamento da War Room (Kick-off)",
      context: "A War Room foi aprovada. Antes do Kick-off, você revisa o 'Mapa de Stakeholders' no Hub. Mariana (CFO) é Tomadora de Decisão e Carlos é Key User. Como você modula o discurso inicial na reunião considerando esses papéis?",
      options: [
        {
          id: "A",
          text: "Foco 100% no Carlos. Digo: 'Fizemos nossa parte e os bugs foram resolvidos. O sistema está 100%, portanto precisamos que sua equipe volte a inserir as notas para não configurar quebra de contrato.'",
          feedback: "Game Over! Dizer 'nós fizemos a nossa parte' soa arrogante, destrói o pouco de relacionamento restante e ignora completamente a Sponsor (Mariana) na sala.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Mariana, Carlos, sabemos do desgaste que os últimos meses geraram e assumimos essa responsabilidade. O cenário foi estabilizado, mas queremos garantir que a equipe se sinta segura para voltar. Estruturamos esta força-tarefa oficial com vocês.' ",
          feedback: "(Correta) Você validou a dor tática do Carlos, assumiu o passivo histórico e demonstrou governança de nível executivo para tranquilizar a Mariana.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Conduzo a reunião focada em mostrar tela a tela os relatórios técnicos de Engenharia para a Mariana provar que os erros de integração não vão mais ocorrer.",
          feedback: "Game Over! A CFO não quer ver código; quer ver o fluxo operando e o investimento se pagando. Excesso de preciosismo técnico gera cansaço em stakeholders frustrados.",
          isCorrect: false
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: O Plano de Resgate e o Pouso",
      context: "A War Room está em andamento. O Carlos admite: 'Ninguém nem lembra mais os botões certos, a equipe está resistente'. Você implementa a capacitação 'Treinamento Fast-Track' focado em duas rotinas. 30 dias após, o painel exibe 82% de notas ingressadas. Como você atua na reunião de encerramento?",
      options: [
        {
          id: "A",
          text: "Apresento rapidamente o atingimento de 82%, fecho o chamado da War Room e aproveito a presença dela para mostrar um novo módulo de conferência cega que agregaria valor ao fluxo.",
          feedback: "Game Over! O cliente acabou de sair da UTI. Fazer um pitch comercial no minuto seguinte à alta médica demonstra total falta de timing e empatia.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Apresento as 'Lições Aprendidas' do War Room, transferindo sutilmente o erro para a equipe do Carlos por não terem utilizado a base de conhecimento no mês de crise.",
          feedback: "Game Over! O Post-Mortem de encerramento exige olhar para o próprio umbigo. Transferir a culpa jamais reconstruirá a ponte como um Trusted Advisor.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Formalizo o fim da War Room mostrando o indicador atingido (82%), valido a satisfação deles, assumo as Lições Aprendidas por parte da V360 (ex: melhorar monitoramento preventivo) e anuncio o retorno à cadência normal de EBR com foco em renovação do contrato.",
          feedback: "(Correta. Prepare-se para o Roleplay!) Você demonstrou maturidade na condução de encerramento de ciclo e construiu a ponte para blindar a retenção contratual.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Mariana (Diretora Financeira)",
    scenarioText: "O facilitador assume o papel de Mariana (CFO). Ela está neutra, reconhece que o sistema voltou a funcionar, mas ainda está reticente em relação à renovação do contrato no semestre seguinte e quer garantias de que não passarão por isso de novo. Ela pode trazer 'Carlos' para a chamada para reclamar taticamente.",
    criteria: [
      {
        title: "Resgate Relacional (Assumir a Bronca)",
        expectation: "O CS não usa a melhoria atual para apagar o erro do passado. Ele consolida o aprendizado e valida a dor da Diretoria.",
        example: " 'Mariana, Carlos. Conseguimos bater nossa meta de readoção, mas não esquecemos o gargalo técnico que causou isso há 2 meses. Isso foi uma lição aprendida para nós.' "
      },
      {
        title: "Foco em Dados de Fechamento",
        expectation: "Apresentar métricas claras de que o Critério de Sucesso foi batido, encerrando o status de 'Operação de Exceção'.",
        example: " 'Os dados mostram: chegamos a 82% das notas ingressadas e nenhum bug crítico. Com isso, gostaria de formalizar o encerramento da nossa War Room e voltarmos à cadência normal de negócio.' "
      },
      {
        title: "Lições Aprendidas (Post-Mortem V360)",
        expectation: "Mostrar o que a empresa (V360) fez estruturalmente para evitar que a crise se repita, demonstrando valor na governança interna.",
        example: " 'Como garantia para a renovação, implementamos uma nova rotina na nossa ponta: agora temos um alerta preditivo se o engajamento do Carlos cair repentinamente, para não precisarmos chegar ao ponto de abandono novamente.' "
      },
      {
        title: "Afastamento do 'Modo Suporte'",
        expectation: "Reestabelecer sua posição como Mapeador Estratégico, saindo do microgerenciamento de incidentes.",
        example: " 'Com o sistema rodando liso novamente, nosso próximo passo na EBR regular será focar nas métricas de saving (FTE/Multas), para que vocês tenham segurança total no ROI da V360.' "
      }
    ]
  }
};
