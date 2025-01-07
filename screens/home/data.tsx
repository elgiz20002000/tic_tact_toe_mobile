import { EGameResult } from "./constants";
import { IHistoryItem, IScoreboardItem } from "./interfaces";

export const historyData: IHistoryItem[] = [
  {
    id: "1",
    playerName: "Chris Hamilton",
    date: "05.25.2022",
    result: EGameResult.WON,
  },
  {
    id: "2",
    playerName: "Chris Hamilton",
    date: "05.25.2022",
    result: EGameResult.LOST,
  },
  {
    id: "3",
    playerName: "Chris Hamilton",
    date: "05.25.2022",
    result: EGameResult.WON,
  },
  {
    id: "4",
    playerName: "Chris Hamilton",
    date: "05.25.2022",
    result: EGameResult.LOST,
  },
  {
    id: "5",
    playerName: "Chris Hamilton",
    date: "05.25.2022",
    result: EGameResult.DRAW,
  },
  {
    id: "6",
    playerName: "Chris Hamilton",
    date: "05.26.2022",
    result: EGameResult.WON,
  },
  {
    id: "7",
    playerName: "Chris Hamilton",
    date: "05.26.2022",
    result: EGameResult.LOST,
  },
  {
    id: "8",
    playerName: "Chris Hamilton",
    date: "05.26.2022",
    result: EGameResult.DRAW,
  },
  {
    id: "9",
    playerName: "Chris Hamilton",
    date: "05.27.2022",
    result: EGameResult.WON,
  },
  {
    id: "10",
    playerName: "Chris Hamilton",
    date: "05.27.2022",
    result: EGameResult.LOST,
  },
];


export const scoreboardData: IScoreboardItem[] = [
  { id: "1", rank: 1, playerName: "Chris Hamilton", score: 130 },
  { id: "2", rank: 2, playerName: "Chris Hamilton", score: 120 },
  { id: "3", rank: 3, playerName: "Chris Hamilton", score: 110 },
  { id: "4", rank: 4, playerName: "Chris Hamilton", score: 100 },
  { id: "5", rank: 5, playerName: "Chris Hamilton", score: 90 },
  { id: "6", rank: 6, playerName: "Chris Hamilton", score: 80 },
  { id: "7", rank: 7, playerName: "Chris Hamilton", score: 70 },
  { id: "8", rank: 8, playerName: "Chris Hamilton", score: 65 },
  { id: "9", rank: 9, playerName: "Chris Hamilton", score: 60 },
  { id: "10", rank: 10, playerName: "Chris Hamilton", score: 55 },
  { id: "11", rank: 11, playerName: "Chris Hamilton", score: 50 },
  { id: "12", rank: 12, playerName: "Chris Hamilton", score: 45 },
  { id: "13", rank: 13, playerName: "Chris Hamilton", score: 40 },
  { id: "14", rank: 14, playerName: "Chris Hamilton", score: 35 },
  { id: "15", rank: 15, playerName: "Chris Hamilton", score: 30 },
  { id: "16", rank: 16, playerName: "Chris Hamilton", score: 25 },
  { id: "17", rank: 17, playerName: "Chris Hamilton", score: 20 },
  { id: "18", rank: 18, playerName: "Chris Hamilton", score: 15 },
  { id: "19", rank: 19, playerName: "Chris Hamilton", score: 10 },
  { id: "20", rank: 20, playerName: "Chris Hamilton", score: 5 },
];
