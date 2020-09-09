import { Identifiable } from './id';

export interface QuestSolution extends Identifiable {
  active: string;
}

export interface Quest extends Identifiable {
  logs: string[];
  solutions: QuestSolution[];
}
