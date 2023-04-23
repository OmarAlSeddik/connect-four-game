import checkWinCondition from "./checkWinCondition";
import dropChip from "./dropChip";
import getValidLocations from "./getValidLocations";
import scorePosition from "./scorePosition";

const minimax = (
  board: number[][],
  depth: number,
  maximizingPlayer: boolean
): [number, number] => {
  const validLocations = getValidLocations(board);
  const { winner } = checkWinCondition(board);
  if (winner) {
    if (winner === 1) return [3, -10000];
    else if (winner === 2) return [3, 10000];
    else return [3, 0];
  } else if (depth === 0) return [3, scorePosition(board)];

  if (maximizingPlayer) {
    let score = -Infinity;
    let bestColumn = 3;
    for (const col of validLocations) {
      const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
      dropChip(tempBoard, col, 2);
      const newScore = minimax(tempBoard, depth - 1, false)[1];
      if (newScore > score) {
        score = newScore;
        bestColumn = col;
      }
    }
    console.log(score);
    return [bestColumn, score];
  } else {
    let score = Infinity;
    let bestColumn = 3;
    for (const col of validLocations) {
      const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
      dropChip(tempBoard, col, 1);
      const newScore = minimax(tempBoard, depth - 1, true)[1];
      if (newScore < score) {
        score = newScore;
        bestColumn = col;
      }
    }
    console.log(score);
    return [bestColumn, score];
  }
};

export default minimax;
