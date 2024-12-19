import { EGameResult } from "./constans";
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
];

export const scoreboardData: IScoreboardItem[] = [
  { id: "1", rank: 1, playerName: "Chris Hamilton", score: 130 },
  { id: "2", rank: 2, playerName: "Chris Hamilton", score: 120 },
  { id: "3", rank: 3, playerName: "Chris Hamilton", score: 110 },
  { id: "4", rank: 4, playerName: "Chris Hamilton", score: 100 },
  { id: "5", rank: 5, playerName: "Chris Hamilton", score: 90 },
];
