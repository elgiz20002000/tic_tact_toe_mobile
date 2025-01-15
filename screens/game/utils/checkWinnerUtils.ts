import { EPlayer, winningCombinations } from "../constants";

export const checkWinner = (newGrid: (EPlayer | null)[]): EPlayer | null => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (newGrid[a] && newGrid[a] === newGrid[b] && newGrid[a] === newGrid[c]) {
      return newGrid[a];
    }
  }
  return null;
};
