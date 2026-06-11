/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { scenarios } from "./data";
import { Dossier } from "./components/Dossier";
import { Dashboard } from "./components/Dashboard";
import { GameScreen } from "./components/GameScreen";
import { AICoach } from "./components/AICoach";
import {
  Compass,
  LayoutDashboard,
  ShieldAlert,
  Sparkles,
  Users,
  X,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  HelpCircle,
  Play,
  RotateCcw,
  Volume2
} from "lucide-react";

export default function App() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<number | null>(null);
  const [activeFase, setActiveFase] = useState<"fase1" | "fase2" | "fase3">("fase1");
  
  // Game states for step progression per scenario
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isScenarioFinished, setIsScenarioFinished] = useState<boolean>(false);

  // Retrieve current scenario object
  const currentScenario = scenarios.find(s => s.id === selectedScenarioId);

  const handleSelectScenario = (id: number) => {
    setSelectedScenarioId(id);
    setActiveFase("fase1");
    setCurrentStepIndex(0);
    setIsScenarioFinished(false);
  };

  const handleBackToList = () => {
    setSelectedScenarioId(null);
  };

  const handleResetGameSteps = () => {
    setCurrentStepIndex(0);
    setIsScenarioFinished(false);
  };

  return (
    <div id="v360-app-root" className="min-h-screen bg-[#050B2E] text-white selection:bg-[#D46900]/40 font-sans relative">
      
      {/* Background radial orbs for overall immersive ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6A38B3] blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D46900] blur-[150px] opacity-10 pointer-events-none"></div>

      {/* GLOBAL HEADER BAR */}
      <header className="bg-[#050B2E]/60 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 mt-1">
            <div className="bg-[#6A38B3] text-white px-3 py-1.5 rounded-[12px] flex items-center justify-center font-display uppercase tracking-widest text-xs font-normal shadow-lg shadow-[#6A38B3]/30">
              V360
            </div>
            <div>
              <h1 className="text-lg font-display uppercase tracking-tight text-white m-0 font-normal leading-none">
                Health Score Flight Simulator
              </h1>
              <span className="text-[9px] font-mono text-[#D46900] tracking-widest uppercase block font-bold mt-1">
                Plataforma de Treinamento e Diagnóstico de Conta
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-[9px] font-mono text-gray-400 uppercase hidden md:inline border border-white/10 px-3 py-1 rounded-full bg-white/5 font-bold tracking-wider">
              Role: Customer Success Manager (CSM)
            </span>
          </div>
        </div>
      </header>

      {/* DETAILED WORKSPACE CANVAS */}
      <main className="max-w-7xl mx-auto px-4 py-8 relative">
        
        {/* ENTRANCE SELECTOR VIEW (currentScenarioId === null) */}
        {!selectedScenarioId ? (
          <div id="scenario-selector-container" className="space-y-8 animate-fadeIn">
            {/* HERO BANNER */}
            <div className="relative bg-[#050B2E]/55 backdrop-blur-sm border border-white/10 rounded-[15px] p-8 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#6A38B3]/25 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[100px]"></div>
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono font-black text-[#D46900] uppercase tracking-widest block bg-[#D46900]/10 px-4 py-1.5 rounded-full w-max mx-auto border border-[#D46900]/25">
                  Simulação de Casos Críticos
                </span>
                <h2 className="text-5xl font-display uppercase tracking-tight text-white leading-none font-normal">
                  Lidere a Retenção no Caos
                </h2>
                <p className="text-xs text-[#E0E0E0] max-w-xl mx-auto font-light leading-relaxed">
                  Coloque-se à prova no comando de 8 cenários corporativos exigentes. Analise dados brutos, 
                  supere 10 decisões táticas cruciais e enfrente o CFO do cliente em um roleplay síncrono.
                </p>
              </div>
            </div>

            {/* SELECTION GRID (SCENARIOS 1-8) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-display uppercase tracking-widest text-[#FFFFFF] font-normal">
                    Selecione seu Cenário de Atuação (1 a 8)
                  </h3>
                  <span className="text-xs text-gray-400 font-mono block mt-1">Escolha uma caixa de desafio blindado para iniciar o diagnóstico</span>
                </div>
                <span className="text-xs font-mono text-[#D46900] bg-[#D46900]/10 px-2.5 py-0.5 rounded-full border border-[#D46900]/20 font-bold">8 Cases Blindados</span>
              </div>

              <div id="scenarios-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {scenarios.map(sc => (
                  <div
                    key={sc.id}
                    onClick={() => handleSelectScenario(sc.id)}
                    id={`scenario-card-${sc.id}`}
                    className="group bg-gradient-to-b from-[#090D22] to-[#010310] border border-white/10 rounded-[15px] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#D46900]/80 hover:scale-[1.02] shadow-xl hover:shadow-[#D46900]/5 min-h-[340px]"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#6A38B3]/20 group-hover:bg-[#D46900] group-hover:text-white text-[#D46900] font-mono font-extrabold px-3 py-1 rounded-[8px] text-xs transition-all border border-[#6A38B3]/30 uppercase tracking-widest">
                          Cenário {sc.id}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/20"></span>
                      </div>
                      
                      <div>
                        <h4 className="text-3xl font-display uppercase tracking-tight text-white leading-none mt-1 group-hover:text-[#D46900] transition-colors font-normal">
                          Cenário {sc.id}
                        </h4>
                        <span className="text-[9px] font-mono uppercase text-gray-500 tracking-widest block mt-2">
                          Caixa Preta de Atuação
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-400 font-light leading-relaxed pt-2 border-t border-white/5">
                        Todos os dados cadastrais, perfil de adoção, segmentação comercial e métricas de crise desta conta encontram-se temporariamente sob lock-out. Assuma o desafio para decifrar as evidências e examinar as objeções.
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div className="w-full bg-black/40 border border-white/5 rounded-[10px] p-2.5 flex items-center justify-between font-mono text-[9px] text-gray-500">
                        <span className="uppercase">Modo da Operação:</span>
                        <span className="text-[#00ff88] font-bold uppercase tracking-widest">Disponível</span>
                      </div>
                      <button className="w-full bg-white/5 group-hover:bg-[#D46900] text-white py-3 rounded-[12px] text-[10px] uppercase font-black tracking-widest transition-all flex items-center justify-center space-x-1 border border-white/5 group-hover:border-transparent cursor-pointer">
                        <span>Assumir Caso</span>
                        <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* COCKPIT WORKSPACE (currentScenario SELECTED) */
          <div id="cockpit-workspace-panel" className="space-y-6 animate-fadeIn">
            
            {/* COCKPIT PROFILE TOP BAR */}
            <div className="bg-[#050B2E]/60 backdrop-blur-md border border-white/10 rounded-[15px] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center space-x-3.5">
                <button
                  id="btn-back-to-list"
                  onClick={handleBackToList}
                  className="bg-[#050B2E] hover:bg-white/10 border border-white/10 text-[#D46900] p-2.5 rounded-[12px] transition-all cursor-pointer block"
                  title="Voltar para a seleção de cenários"
                >
                  <X size={16} />
                </button>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[9px] font-mono text-[#D46900] bg-[#D46900]/10 px-2.5 py-0.5 rounded-full uppercase border border-[#D46900]/20 font-black">
                      Cenário Ativo #{currentScenario?.id}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">({currentScenario?.profile.segment})</span>
                  </div>
                  <h3 id="active-scenario-heading" className="text-2xl font-display uppercase tracking-tight text-white m-0 font-normal leading-none mt-1">
                    {currentScenario?.title}
                  </h3>
                </div>
              </div>

              {/* Reset simulator operations */}
              <button
                id="btn-reset-scenario-steps"
                onClick={handleResetGameSteps}
                className="text-[10px] font-mono text-gray-400 hover:text-white bg-[#050B2E] border border-white/10 px-3.5 py-2 rounded-[15px] flex items-center space-x-1.5 transition-all cursor-pointer shrink-0 uppercase font-bold tracking-wider"
              >
                <RotateCcw size={12} />
                <span>Resetar Decisões</span>
              </button>
            </div>

            {/* FASES COCKPIT NAVIGATOR */}
            <div id="cockpit-phases-tabs" className="grid grid-cols-3 bg-[#050B2E] border border-white/10 p-1 rounded-[25px] gap-2 shadow-2xl">
              <button
                id="phase-tab-fase1"
                onClick={() => setActiveFase("fase1")}
                className={`py-3 rounded-[20px] font-semibold text-xs uppercase tracking-wider transition-all duration-200. flex flex-col items-center gap-1 cursor-pointer border-0 ${
                  activeFase === "fase1"
                    ? "bg-[#D46900] text-white shadow-lg font-black"
                    : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutDashboard size={14} />
                <span className="text-[9px] md:text-[10px] md:tracking-widest font-black uppercase">Diagnóstico</span>
              </button>
              
              <button
                id="phase-tab-fase2"
                onClick={() => setActiveFase("fase2")}
                className={`py-3 rounded-[20px] font-semibold text-xs uppercase tracking-wider transition-all duration-200. flex flex-col items-center gap-1 cursor-pointer relative border-0 ${
                  activeFase === "fase2"
                    ? "bg-[#D46900] text-white shadow-lg font-black"
                    : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
                }`}
              >
                <Compass size={14} />
                <span className="text-[9px] md:text-[10px] md:tracking-widest font-black uppercase">Decisões</span>
                {isScenarioFinished && (
                  <span className="absolute -top-1 -right-1 bg-[#00ff88] text-[#050B2E] text-[8px] font-black px-2 py-0.5 rounded-full uppercase scale-85 animate-pulse">
                    OK
                  </span>
                )}
              </button>
              
              <button
                id="phase-tab-fase3"
                onClick={() => setActiveFase("fase3")}
                className={`py-3 rounded-[20px] font-semibold text-xs uppercase tracking-wider transition-all duration-200. flex flex-col items-center gap-1 cursor-pointer border-0 ${
                  activeFase === "fase3"
                    ? "bg-[#D46900] text-white shadow-lg font-black"
                    : "text-[#B0B0B0] hover:text-white hover:bg-white/5"
                }`}
              >
                <Users size={14} />
                <span className="text-[9px] md:text-[10px] md:tracking-widest font-black uppercase">Gabarito da Simulação</span>
              </button>
            </div>

            {/* PHASE COMPONENT WRAPPER */}
            <div id="active-phase-component-holder" className="space-y-6">
              
              {/* FASE 1: DASHBOARD AND FICTITIOUS DOSSIER */}
              {activeFase === "fase1" && currentScenario && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                  {/* Left (Dossier) - 5 cols */}
                  <div className="xl:col-span-5">
                    <Dossier scenario={currentScenario} />
                  </div>
                  {/* Right (Dashboard Software) - 7 cols */}
                  <div className="xl:col-span-7">
                    <div className="space-y-4">
                      <div className="bg-[#050B2E]/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded-[15px] flex items-center space-x-2 text-xs text-white shadow-xl">
                        <AlertCircle size={15} className="text-[#D46900] shrink-0" />
                        <span>Analise as abas de <strong>Adoção</strong>, <strong>Suporte</strong> e <strong>Relacionamento</strong> abaixo para formular seu plano estratégico.</span>
                      </div>
                      <Dashboard scenario={currentScenario} />
                    </div>
                  </div>
                </div>
              )}

              {/* FASE 2: THE 10 TACTICAL DECISION STEPS */}
              {activeFase === "fase2" && currentScenario && (
                <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
                  {!isScenarioFinished ? (
                    <GameScreen
                      scenario={currentScenario}
                      currentStepIndex={currentStepIndex}
                      setCurrentStepIndex={setCurrentStepIndex}
                      onStepComplete={() => {}}
                      onScenarioFinish={() => setIsScenarioFinished(true)}
                    />
                  ) : (
                    /* DECORATIVE SUCCESS SCREEN ONCE COMPLETED */
                    <div id="game-finished-card" className="bg-[#050B2E]/60 backdrop-blur-md border-2 border-[#00ff88]/30 rounded-[15px] p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff88]"></div>
                      <div className="absolute inset-0 bg-[#00ff88]/3 pointer-events-none"></div>

                      <div className="bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md">
                        <Sparkles size={32} className="animate-spin" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-3xl font-display uppercase tracking-tight text-white font-normal leading-none">Jornada Concluída!</h3>
                        <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                          Você operou com maestria todos os passos táticos fundamentados no Playbook V360. 
                          Os dados de saúde e o relacionamento operacional da conta foram totalmente preservados.
                        </p>
                      </div>

                      <div className="p-4 bg-[#050B2E] border border-white/10 max-w-md mx-auto rounded-[15px] text-xs">
                        <span className="font-bold text-white block uppercase mb-1 text-[10px] tracking-wider">Próxima Etapa Obrigatória:</span>
                        Seu cockpit revelou os argumentos ideais. Agora, vá para o <span className="font-bold text-[#D46900]">Gabarito da Simulação (Fase 3)</span> na navegação acima para avaliar a banca e o roleplay!
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                        <button
                          id="btn-goto-roleplay"
                          onClick={() => setActiveFase("fase3")}
                          className="bg-[#D46900] hover:bg-[#ff7f00] text-white py-3.5 px-8 rounded-[25px] text-xs font-black uppercase tracking-widest transition-all shadow-md focus:outline-none cursor-pointer border-0"
                        >
                          Ir para o Gabarito (Fase 3)
                        </button>
                        <button
                          id="btn-replay-steps"
                          onClick={handleResetGameSteps}
                          className="bg-transparent hover:bg-white/10 border border-white/10 text-white py-3.5 px-8 rounded-[25px] text-xs font-black uppercase tracking-widest transition-all focus:outline-none cursor-pointer"
                        >
                          Refazer Desafio Tático
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* FASE 3: BOARD KEY CONSOLE */}
              {activeFase === "fase3" && currentScenario && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-[#050B2E]/60 backdrop-blur-md border border-white/10 px-4 py-3.5 rounded-[15px] flex items-center justify-between text-xs shadow-xl">
                    <div className="flex items-center space-x-2">
                      <Volume2 size={16} className="text-[#D46900] shrink-0" />
                      <span>Gabarito Analítico: Avaliação presencial do pitch estratégico e postura tática do CS.</span>
                    </div>
                    {!isScenarioFinished && (
                      <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase hidden md:inline font-bold">
                        Dica: Concluir os passos da Fase 2 te dará ótimos argumentos para esta análise
                      </span>
                    )}
                  </div>
                  <AICoach scenario={currentScenario} />
                </div>
              )}

            </div>
          </div>
        )}

      </main>

      {/* FOOTER COCKPIT SPEC */}
      <footer className="border-t border-white/10 bg-[#050B2E] py-8 text-center text-xs text-gray-500 font-mono mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="uppercase tracking-widest text-[#D46900] text-[9px] mb-1 font-bold">Drives V360 Customer Success Game Software</p>
          <p>© 2026. Todos os direitos reservados. Focado na mitigação de passivos e expansão analítica.</p>
        </div>
      </footer>
    </div>
  );
}
