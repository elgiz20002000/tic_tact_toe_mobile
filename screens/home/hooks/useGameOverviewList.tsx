import { GameHistoryList } from "@/shared/ui/gameHistoryList";
import ScoreboardList from "@/shared/ui/scoreboardList";

import { EGameOverviewType } from "../constants";
import { IHistoryItem, IScoreboardItem } from "../interfaces";

export const useGameOverviewList = (
  type: EGameOverviewType,
  data: IScoreboardItem[] | IHistoryItem[]
) => {
  if (type === EGameOverviewType.Scoreboard) {
    return <ScoreboardList data={data as IScoreboardItem[]} minimized />;
  }
  return <GameHistoryList data={data as IHistoryItem[]} />;
};
