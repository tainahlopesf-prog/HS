import { Scenario } from "../types";

export const scenario5: Scenario = {
  id: 5,
  title: "Cenário 5: Pane no Motor (Queda de Adoção por Layoff)",
  objective: "Desenvolver o raciocínio clínico para identificar uma queda de adoção motivada por reestruturação no cliente (falta de conhecimento, não falha do software), assumindo uma postura consultiva para capacitar a nova equipe, evitando expor a usuária e substituindo o clichê de 'economia de horas' pela tese de prevenção de passivo fiscal.",
  profile: {
    client: "LogiTech",
    segment: "Mid Touch",
    duration: "Contrato de longo prazo",
    window: "Janela contínua de estabilização pós-reestruturação",
    context: "Cliente histórico que passou por uma fusão recente e um enxugamento severo e repentino no quadro de funcionários (Layoff). Queda brusca no engajamento por fadiga humana."
  },
  eligibility: {
    has: [
      "Fluxo de material",
      "Fluxo de CTE",
      "Autenticidade",
      "Help Hub (Módulo de chamado)",
      "Ambiente de homologação"
    ],
    eligible: [
      "Fluxo de serviços",
      "Fluxo de medição",
      "Fluxo de CTEOS",
      "Módulo de Pedidos",
      "API Dados (escopo)",
      "API Dados (utilizado pelo cliente)",
      "DDA",
      "Leitura Automática dos Documentos"
    ],
    notEligible: [
      "Fluxo de comissão",
      "Fluxo de concessionária",
      "Fluxo de outros documentos",
      "Fluxo de invoice (estrangeira)",
      "Fluxo de Débito e Crédito",
      "Agendamento de entrega",
      "Conferência cega",
      "RANFs",
      "Adiantamento",
      "Comprovante de Pagamento",
      "Antecipação",
      "Duplicata Escritural",
      "IPTU"
    ]
  },
  stakeholders: [
    {
      name: "Camila",
      role: "Nova Analista (Key User)",
      influence: "Baixo Poder / Alto Interesse (Operadora Sobrecarregada)",
      profile: "Sobrevivente dos cortes. Acabou de herdar a carga de 3 pessoas demitidas, estando no limite do cansaço mental.",
      comment: "Oi pessoal, assumi a área fiscal do Tiago. Não tive muito tempo de olhar o V360 ainda, o sistema me parece muito complexo e cheio de travas. Como estou com o fechamento atrasado, voltei a receber as notas por e-mail e planilhas por enquanto."
    },
    {
      name: "Marcelo",
      role: "CFO (Tomador de Decisão / Sponsor)",
      influence: "Alto Poder / Baixo Interesse (Avaliador de Custos)",
      profile: "Arquiteto do enxugamento corporativo. Quer manter a operação fiscal regular sem inflar a equipe com novas vagas.",
      comment: "Não há registros de comunicação direta, mas monitora de perto se a redução de braços causará prejuízos ou autuações."
    }
  ],
  incidents: {
    text: "Sem problemas técnicos ativos. O produto opera normalmente. A analista Camila parou de utilizar as automações por achar o sistema difícil, voltando à escrituração manual por faturamento via planilhas.",
    status: "Risco de Ponto Cego de Compliance (Abandono por Fadiga)"
  },
  dashboardData: {
    healthScore: 48,
    quadrant: "Estabilização para Retenção (Risco Alto)",
    adoption: {
      metrics: [
        { label: "Notas Ingressadas vs. Contrato", value: "30%", comment: "Queda vertical no mês atual" },
        { label: "Módulos Ativos", value: "5 sub-módulos", comment: "Básicos operacionais instalados" },
        { label: "Uso de Planilhas", value: "70%", comment: "Alta digitação manual temporária" }
      ],
      description: "Queda brusca e repentina de processamento desde a semana do anúncio das demissões na área fiscal.",
      chartValue: 30
    },
    support: {
      metrics: [
        { label: "Bugs Críticos", value: "0", comment: "Sem problemas em aberto" },
        { label: "Queda de Tickets", value: "Ativado", comment: "Ninguém abre ticket na crise" },
        { label: "Eficiência de Resposta", value: "100%", comment: "SLA do suporte impecável" }
      ],
      description: "Zero incidentes recentes; gatilho de 'Queda brusca de chamados' ativado. Operação sem tempo de interagir.",
      chartValue: 100
    },
    relationship: {
      metrics: [
        { label: "Status de Eventos", value: "Dedução", comment: "Flag 'Reestruturação' ativa" },
        { label: "Tempo desde último touch", value: "18 dias", comment: "Foco antes era com o Tiago (ex-CSM)" },
        { label: "Engajamento Liderança", value: "Muito Baixo", comment: "Marcelo focado exclusivamente em corte" }
      ],
      description: "Dedução no dashboard pela flag 'Reestruturação / Troca de Liderança'. Camila sobrecarregada.",
      chartValue: 40
    }
  },
  steps: [
    {
      step: 1,
      title: "Passo 1: O Alerta Sistêmico (Visão Geral)",
      context: "Você recebeu a mensagem da Camila dizendo que a ferramenta é 'complexa' e que voltou para as planilhas. Ao abrir a Visão Geral, qual indicador te mostra a origem da ferida institucional da conta?",
      options: [
        {
          id: "A",
          text: "O painel de 'Volume de chamados vs volume histórico'.",
          feedback: "Game Over! A queda de chamados mostra o silêncio tático, mas não explica a causa raiz do abalo corporativo.",
          isCorrect: false
        },
        {
          id: "B",
          text: "O painel de 'Eventos de Health Score', que aponta uma dedução recente no gráfico com a tag de alerta 'Reestruturação/Troca de Liderança'.",
          feedback: "(Correta) O problema nasceu de um Layoff documentado no painel, não de uma falha de produto.",
          isCorrect: true
        },
        {
          id: "C",
          text: "O gráfico de 'Margem Operação (SaaS)'.",
          feedback: "Game Over! A rentabilidade interna da V360 não reflete as demissões ocorridas no cliente.",
          isCorrect: false
        }
      ]
    },
    {
      step: 2,
      title: "Passo 2: Investigando o Impacto (Pilar de Adoção)",
      context: "A reestruturação impactou a saúde da conta. Qual indicador de Adoção evidencia a gravidade exata desse Layoff no dia a dia do sistema?",
      options: [
        {
          id: "A",
          text: "O indicador '% de Notas Ingressadas vs. Contratadas', que exibe uma queda vertical abrupta após a saída da equipe antiga.",
          feedback: "(Correta) A pane no motor está desenhada: sem o Key User antigo, o processamento de notas afundou no mesmo instante.",
          isCorrect: true
        },
        {
          id: "B",
          text: "O painel de 'Integrações Ativas'. Percebo que o número de integrações despencou, o que prova que a nossa API quebrou e interrompeu o fluxo.",
          feedback: "Game Over! É verdade que a volumetria da integração cai se eles pararem de usar, mas isso é uma consequência do abandono humano da plataforma, e não a causa técnica do problema. A conexão estrutural se mantém.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O 'Valor Médio de Lock In', que deve ter disparado.",
          feedback: "Game Over! O Lock-in cai quando o uso cessa. Você escolheu a interpretação errada.",
          isCorrect: false
        }
      ]
    },
    {
      step: 3,
      title: "Passo 3: A Validação Técnica (Pilar de Suporte)",
      context: "A Camila diz que o sistema tem 'travas'. Na aba Suporte, como você isola o fator humano para ter certeza absoluta de que a plataforma está estável?",
      options: [
        {
          id: "A",
          text: "Observo que o 'Bug Crítico - Pontuação' está altíssima.",
          feedback: "Game Over! O painel aponta ZERO bugs críticos.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Cruzo a 'Queda Brusca de Chamados' atual com a linha do tempo do trimestre anterior. O gráfico me mostra que o sistema já rodava com zero bugs e uso fluido antes da demissão.",
          feedback: "(Correta) O histórico provou a estabilidade. A queda atual significa apenas que eles pararam de usar a máquina, confirmando que a Camila acha complexo por falta de treinamento técnico, não por instabilidade do software.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Confirmo que o 'CSAT (%)' está em 100%.",
          feedback: "Game Over! Com a queda brusca de chamados, não há CSAT válido (volume insuficiente de respostas).",
          isCorrect: false
        }
      ]
    },
    {
      step: 4,
      title: "Passo 4: O Mapa do Problema (Aba Stakeholders)",
      context: "O antigo Key User foi demitido. O que é crucial fazer na base de Stakeholders no Hub de CS para orquestrar o resgate?",
      options: [
        {
          id: "A",
          text: "Agendar uma reunião de 'Alinhamento Estratégico' com a Camila para revisar os KPIs contratuais e estipular metas de adoção para ela cumprir.",
          feedback: "Game Over! Ela é a operação (Baixo Poder), assumiu o trabalho de 3 pessoas e está afogada. Tentar empurrar burocracia e KPIs agora vai gerar pânico e aversão imediata ao CS.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Atualizar a base registrando a saída do Tiago, cadastrar a Camila como a nova Key User (operacional) e confirmar que o Marcelo (CFO) se mantém como Tomador de Decisão.",
          feedback: "(Correta) Você higienizou a base, o que é vital para não cruzar comunicações e saber quem decide o quê no meio da crise.",
          isCorrect: true
        },
        {
          id: "C",
          text: "Manter o Tiago (ex-funcionário) ativo como Sponsor interino no sistema para não perder o histórico de engajamento do Health Score, adicionando a Camila apenas como 'Cópia' (CC).",
          feedback: "Game Over! Manter um 'fantasma' na base mascara o risco real de relacionamento e impede que os alertas de governança cheguem aos líderes atuais da empresa.",
          isCorrect: false
        }
      ]
    },
    {
      step: 5,
      title: "Passo 5: A Abordagem de Contato (O Re-Kickoff)",
      context: "Você vai ligar para a Camila para 'quebrar o gelo'. Ela está fazendo o trabalho de 3 pessoas em planilhas. Qual é o tom correto?",
      options: [
        {
          id: "A",
          text: " 'Oi Camila. O dashboard mostra uma queda drástica na adoção. O CFO sabe que vocês pararam de usar o sistema oficial?' ",
          feedback: "Game Over! Cobrar o uso ou escalar o problema sem oferecer ajuda soa como ameaça e destrói qualquer confiança de parceria.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Oi Camila, vi que assumiu a operação. O fechamento deve estar um caos com esse volume na mão. Quero marcar 20 minutos só para mapear 2 rotinas críticas que posso te ajudar a automatizar e aliviar sua semana.' ",
          feedback: "(Correta) Você agiu com empatia consultiva. Não cobrou métricas, ofereceu ser a 'ponte' para salvar o tempo dela.",
          isCorrect: true
        },
        {
          id: "C",
          text: " 'Oi Camila, entendo que a V360 pareça complexa. Vou pedir para a área de Produto desenhar uma interface mais simples e te retorno.' ",
          feedback: "Game Over! A ferramenta funciona. Prometer mudanças de interface (UX) quando o problema real é a capacitação é diagnosticar a dor errada.",
          isCorrect: false
        }
      ]
    },
    {
      step: 6,
      title: "Passo 6: A Ferramenta de Resgate (O Plano de Action)",
      context: "Camila aceitou a call de 20 minutos. Ela confessa que nunca operou a ferramenta antes e não tem tempo para estudar. Qual é a tática do Playbook de CS para resgatá-la sem sobrecarregá-la?",
      options: [
        {
          id: "A",
          text: "Agendo uma Sessão de Shadowing Operacional: sento com ela em uma chamada, observo a tela enquanto ela lança notas na planilha e demonstro exatamente quais duas telas da V360 substituem aquele processo manual específico (Quick Win).",
          feedback: "(Correta) Acompanhamento guiado (Shadowing) é a intervenção cirúrgica perfeita para usuários sobrecarregados. Você remove a barreira do 'não sei usar' resolvendo o problema real dela ao vivo.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Encaminho a Camila para a próxima turma do 'Treinamento de Novos Usuários' da V360, que ocorre em grupo com outros clientes na semana que vem.",
          feedback: "Game Over! Treinamentos coletivos genéricos duram horas e não focam na dor de uma usuária com fechamento fiscal atrasado. Ela não tem tempo para palestras de integração.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Aciono a Engenharia para desenhar 5 novos fluxos de RPA (Robotic Process Automation) customizados para a empresa dela.",
          feedback: "Game Over! Entulhar a operação da usuária com novos projetos complexos de tecnologia durante uma reestruturação aumenta o estresse cognitivo.",
          isCorrect: false
        }
      ]
    },
    {
      step: 7,
      title: "Passo 7: Evitando o Contato Executivo Tóxico (O Sponsor)",
      context: "A Sessão de Shadowing com a Camila será amanhã. Ao mesmo tempo, você se preocupa com a métrica financeira do Marcelo (CFO e Tomador de Decisão). O que você decide fazer em relação à Diretoria neste exato momento de 'pane'?",
      options: [
        {
          id: "A",
          text: "Envio um relatório automatizado de uso para o e-mail do Marcelo, destacando com alerta vermelho a queda de adoção, para que ele esteja ciente de que o sistema não está sendo usado.",
          feedback: "Game Over! Escalar um problema operacional de 'baixo uso' para um CFO que acabou de fazer um Layoff soa como uma delação e expõe o emprego da nova analista, destruindo de vez a conta.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Aguardo os resultados da Sessão de Shadowing com a Camila. Após validar que a adoção voltou a subir, aciono o CFO para uma EBR, usando os números recuperados como prova de que a V360 protegeu o caixa dele durante a reestruturação.",
          feedback: "(Correta) Você blindou la operadora no momento de fragilidade e guardou o contato executivo para apresentar uma vitória (Business Case positivo).",
          isCorrect: true
        },
        {
          id: "C",
          text: "Aciono o time de Suporte para enviar alertas diários ao CFO sempre que a Camila deixar de processar uma nota no prazo estipulado pelo SLA.",
          feedback: "Game Over! A V360 não faz microgerenciamento de funcionários do cliente. Essa postura policialesca gera um atrito institucional enorme.",
          isCorrect: false
        }
      ]
    },
    {
      step: 8,
      title: "Passo 8: Validando o Sucesso (Aba Adoção)",
      context: "Duas semanas se passaram. Graças ao Shadowing, Camila abandonou o vício das planilhas e centralizou a captura de XMLs. É seu momento de validar os dados no sistema antes da reunião de diretoria. Onde no dashboard você encontra a prova visual tática dessa retomada?",
      options: [
        {
          id: "A",
          text: "Analiso o indicador de 'Valor Médio de Lock In', que deve ter voltado para o nível alto de aderência sistêmica (0,90).",
          feedback: "Game Over! O Lock-in avalia o nível macro de amarração (integrações), ele não possui a sensibilidade tática para confirmar o volume imediato de notas sendo processadas na semana.",
          isCorrect: false
        },
        {
          id: "B",
          text: "No gráfico '% de Notas escrituradas', que deve ter saltado para 100%.",
          feedback: "Game Over! Isso garante que o que entra sai sem erros, mas não atesta que o volume total ingressado (o gargalo da Camila) voltou ao normal.",
          isCorrect: false
        },
        {
          id: "C",
          text: "O indicador '% de Notas Ingressadas vs. Contratadas' exibe uma curva clara de reaceleração, confirmando que a plataforma reabsorveu a carga de trabalho.",
          feedback: "(Correta) A retomada do ingresso de documentos espelha perfeitamente o fim do trabalho braçal da analista. A máquina está de volta ao jogo.",
          isCorrect: true
        }
      ]
    },
    {
      step: 9,
      title: "Passo 9: O Business Case Reverso (Governança do Sponsor)",
      context: "É hora da EBR (Revisão Executiva) com o CFO Marcelo. Como ele cortou custos (layoff), o clichê de 'a V360 reduzirá mais funcionários na sua folha' não faz sentido. Qual deve ser o foco estratégico (Tese de Valor) da pauta?",
      options: [
        {
          id: "A",
          text: "Foco na tese da 'Auditoria e Centralização do Passivo': demonstro que, durante a transição da equipe, o recebimento de notas via e-mail e planilhas estava criando um 'ponto cego' gigantesco de compliance fiscal. Provo que a V360 retomou a rastreabilidade financeira de 100% dos documentos, evitando que a reestruturação gerasse multas.",
          feedback: "(Correta. Prepare-se para o Roleplay!) O discurso mudou de 'cortar pessoas' para 'mitigação de riscos'. A V360 virou a apólice de seguro do CFO pós-layoff.",
          isCorrect: true
        },
        {
          id: "B",
          text: "Apresentar a métrica de 'Economia de Tempo Operacional', mostrando que a Camila agora tem dezenas de horas livres por semana graças ao sistema.",
          feedback: "Game Over! Mostrar operadora com 'tempo ocioso' para um diretor que está afiando o facão de custos pode induzi-lo a pensar que a nova analista também é dispensável.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Mostrar os gráficos de '0 Bugs Críticos' e o SLA de Suporte verde, provando que somos a parceira tecnológica mais estável que restou.",
          feedback: "Game Over! Falar de disponibilidade técnica (TI) não atrai a atenção de um diretor que quer ver fluxo de caixa e blindagem orçamentária.",
          isCorrect: false
        }
      ]
    },
    {
      step: 10,
      title: "Passo 10: O Rito Executivo (Lidando com Objeção do CFO)",
      context: "A chamada executiva começa. Marcelo diz num tom cauteloso: 'Nós cortamos quase toda a área fiscal e sei que a Camila demorou a pegar o ritmo do sistema. A V360 não é complexa demais para a nossa nova realidade enxuta?'",
      options: [
        {
          id: "A",
          text: " 'Não, Marcelo. A lentidão foi por falta de documentação do Tiago, o antigo responsável.' ",
          feedback: "Game Over! Arrogância e terceirização de culpa. Destrói o papel de Trusted Advisor.",
          isCorrect: false
        },
        {
          id: "B",
          text: " 'Marcelo, a V360 é a única ferramenta capaz de segurar a sua operação. Sem nós, o caos na área fiscal de vocês hoje seria muito pior.' ",
          feedback: "Game Over! Tom excessivamente agressivo e presunçoso. Você ataca a operação do cliente antes de gerar valor.",
          isCorrect: false
        },
        {
          id: "C",
          text: " 'Marcelo, a transição de fato sobrecarregou a área fiscal e gerou um alerta no nosso painel sobre o risco de documentos perdidos por e-mail. Entramos ao vivo com a Camila (Shadowing) e focamos apenas no essencial. A ferramenta reabsorveu a demanda, garantindo que a sua reestruturação não gerasse nenhum buraco no passivo fiscal da empresa.' ",
          feedback: "(Correta) Você absorveu o atrito, blindou o sufoco da operadora e chancelou o software como a rede de segurança corporativa do CFO.",
          isCorrect: true
        }
      ]
    }
  ],
  roleplay: {
    cfoName: "Marcelo (CFO)",
    scenarioText: "O facilitador assume o papel de Marcelo (CFO). Ele está sob enorme pressão corporativa devido aos cortes de gastos (layoff). Ele não quer saber de métricas de vaidade, quer garantias de que o sistema da V360 cobre todos os buracos operacionais e protege a empresa de multas durante essa fase em que a equipe está enxuta.",
    criteria: [
      {
        title: "Abordagem Consultiva (Sem Cobranças)",
        expectation: "Evitar a armadilha de cobrar uso. O CS deve se colocar como um escudo proativo para a operação enxuta que restou.",
        example: " 'Marcelo, não viemos cobrar o uso do sistema. Nosso monitoramento disparou um alerta vermelho com a saída da sua equipe anterior e nós interviemos rapidamente para que a Camila não se afogasse no processo manual.' "
      },
      {
        title: "Ponte de Capacitação (Shadowing)",
        expectation: "Provar que a V360 reagiu à reestruturação do cliente entregando treinamento 'ombro a ombro' e cirúrgico, sem depender de pesados manuais.",
        example: " 'Sabemos do corte de despesas e da sobrecarga da analista. Em vez de enviar manuais passivos, sentamos na operação com ela (Shadowing) e focamos em automatizar imediatamente as rotinas mais atrasadas desta semana.' "
      },
      {
        title: "Tese de Valor (Mitigação de Passivo)",
        expectation: "Encaixar o Business Case na nova realidade do CFO: a ferramenta garante que a reestruturação não crie pontos cegos e multas na ponta da linha.",
        example: " 'Ao assumir automaticamente a varredura que antes era feita por 3 pessoas, a V360 não só viabilizou a redução da sua folha, como eliminou o risco iminente de autuações fiscais por notas perdidas em planilhas durante a transição.' "
      },
      {
        title: "Validação e Proteção da Key User",
        expectation: "O CS deve proteger a nova usuária perante o CFO, usando o engajamento técnico dela para afastar a narrativa de que o sistema é um 'peso morto'.",
        example: " 'Marcelo, a curva de adaptação da Camila foi brilhante após nosso alinhamento. A adoção voltou a decolar no nosso painel de controle e o que parecia um sistema complexo no início do mês virou o grande parceiro de governança dela hoje.' "
      }
    ]
  }
};
