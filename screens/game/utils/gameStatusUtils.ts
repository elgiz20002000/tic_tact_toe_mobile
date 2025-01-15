import { EGameStatus } from "../constants";

interface Styles {
  winnerText: object;
  loserText: object;
  drawText: object;
  status: object;
}

export const getStatusStyle = (status: EGameStatus, styles: Styles): object => {
  switch (status) {
    case EGameStatus.Winner:
      return styles.winnerText;
    case EGameStatus.Lost:
      return styles.loserText;
    case EGameStatus.Draw:
      return styles.drawText;
    default:
      return styles.status;
  }
};

export const getSecondaryText = (status: EGameStatus): string | null => {
  if ([EGameStatus.Winner, EGameStatus.Lost, EGameStatus.Draw].includes(status)) {
    return status;
  }
  return null;
};
