import { IHistoryItem, IScoreboardItem } from "../interfaces";

export const getDataByScreenSize = (
  data: IHistoryItem[] | IScoreboardItem[],
  isSmallScreen: boolean
) => {
  return isSmallScreen ? data.slice(0, 3) : data.slice(0, 5);
};
