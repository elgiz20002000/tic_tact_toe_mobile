import { GameHistoryList } from "@/shared/components/gameHistoryList";
import ScoreboardList from "@/shared/components/scoreboardList";

import { EGameOverviewType } from "../constans";
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
