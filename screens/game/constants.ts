export enum EGameStatus {
  YourTurn = "Your Turn",
  PleaseWait = "Please Wait",
  Winner = "You Won! Congratulations",
  Lost = "You Lost! Good luck next time",
  Draw = "Draw! It's a draw",
}

export enum EPlayer {
  X = "X",
  O = "O",
}



export const winningCombinations: number[][] = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];
