import { GameResult } from "./constans";

export interface IHistoryItem {
  id: string;
  playerName: string;
  date: string;
  result: GameResult;
}

export type IHistory = IHistoryItem[];

export interface IScoreboardItem {
  id: string;
  rank: number;
  playerName: string;
  score: number;
}
 export type IScoreboard=IScoreboardItem[]


 export interface IStatisticsCard{
  wins: number;
  losses: number;
  draws: number;
 }