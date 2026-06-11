/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stakeholder {
  name: string;
  role: string;
  influence: string;
  profile: string;
  comment: string;
}

export interface EligibilityMatrix {
  has: string[];
  eligible: string[];
  notEligible: string[];
}

export interface Profile {
  client: string;
  segment: string;
  duration: string;
  window: string;
  context: string;
}

export interface Metric {
  label: string;
  value: string | number;
  color?: string;
  comment?: string;
}

export interface DashboardData {
  healthScore: number;
  quadrant: string;
  adoption: {
    metrics: Metric[];
    description: string;
    chartValue?: number; // percentage or fraction
  };
  support: {
    metrics: Metric[];
    description: string;
    chartValue?: number;
  };
  relationship: {
    metrics: Metric[];
    description: string;
    chartValue?: number;
  };
}

export interface GameOption {
  id: "A" | "B" | "C";
  text: string;
  feedback: string;
  isCorrect: boolean;
}

export interface GameStep {
  step: number;
  title: string;
  context: string;
  options: GameOption[];
}

export interface RoleplayCriterion {
  title: string;
  expectation: string;
  example: string;
}

export interface RoleplayData {
  cfoName: string;
  scenarioText: string;
  criteria: RoleplayCriterion[];
}

export interface Scenario {
  id: number;
  title: string;
  objective: string;
  profile: Profile;
  eligibility: EligibilityMatrix;
  stakeholders: Stakeholder[];
  incidents: {
    text: string;
    status: string;
  };
  dashboardData: DashboardData;
  steps: GameStep[];
  roleplay: RoleplayData;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
