import { EGameOverviewType, EGameResult } from "./constans";

export interface IHistoryItem {
  id: string;
  playerName: string;
  date: string;
  result: EGameResult;
}

export interface IScoreboardItem {
  id: string;
  rank: number;
  playerName: string;
  score: number;
}

export interface IStatisticsCard {
  wins: number;
  losses: number;
  draws: number;
}

export interface IGameOverviewRenderItem {
  item: IHistoryItem | IScoreboardItem;
}

export interface IGameOverview {
  header: string;
  data: IHistoryItem[] | IScoreboardItem[];
  type: EGameOverviewType;
}