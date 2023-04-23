import dropChip from "./dropChip";
import getValidLocations from "./getValidLocations";
import scorePosition from "./scorePosition";

// Note: The use case function has been replaced by the Minimax function and currently does nothing in the project.
// I just decided to leave it here for future reference.
const pickBestMove = (board: number[][], chip: number) => {
  const validLocations = getValidLocations(board);
  let bestScore = -Infinity;
  let bestColumn = 3;
  for (const col of validLocations) {
    const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
    dropChip(tempBoard, col, chip);
    const score = scorePosition(tempBoard);
    if (score > bestScore && score !== 0) {
      bestScore = score;
      bestColumn = col;
    }
  }
  return bestColumn;
};

export default pickBestMove;
