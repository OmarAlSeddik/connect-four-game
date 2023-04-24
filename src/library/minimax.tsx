import checkWinCondition from "./checkWinCondition";
import dropChip from "./dropChip";
import getValidLocations from "./getValidLocations";
import scorePosition from "./scorePosition";

const minimax = (
  board: number[][],
  depth: number,
  alpha: number,
  beta: number,
  maximizingPlayer: boolean
): [number, number] => {
  const validLocations = getValidLocations(board);
  const { winner } = checkWinCondition(board);

  // Static Evaluation
  if (winner) {
    if (winner === 1) return [3, -10000];
    else if (winner === 2) return [3, 10000];
    else return [3, 0];
  } else if (depth === 0) {
    return [3, scorePosition(board)];
  }

  // Maximizing Player (AI)
  if (maximizingPlayer) {
    let maxEvaluation = -Infinity;
    let bestColumn = 3;
    for (const col of validLocations) {
      const tempBoard = JSON.parse(JSON.stringify(board)) as number[][];
      dropChip(tempBoard, col, 2);
      const evaluation = minimax(tempBoard, depth - 1, alpha, beta, false)[1];
      if (evaluation > maxEvaluation) {
        maxEvaluation = evaluation;
        bestColumn = col;
      }
      alpha = Math.max(alpha, evaluation);
      if (alpha >= beta) break;
    }
    return [bestColumn, maxEvaluation];
  }

  // Minimizing Player (Human)
  else {
    let minEvaluation = Infinity;
    let bestColumn = 3;
    for (const col of validLocations) {
      const tempBoard = JSON.parse(JSON.stringify(board)) as number[][];
      dropChip(tempBoard, col, 1);
      const evaluation = minimax(tempBoard, depth - 1, alpha, beta, true)[1];
      if (evaluation < minEvaluation) {
        minEvaluation = evaluation;
        bestColumn = col;
      }
      beta = Math.min(beta, evaluation);
      if (alpha >= beta) break;
    }
    return [bestColumn, minEvaluation];
  }
};

export default minimax;
