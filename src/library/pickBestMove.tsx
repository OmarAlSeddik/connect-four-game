import dropChip from "./dropChip";
import getValidLocations from "./getValidLocations";
import scorePosition from "./scorePosition";

const pickBestMove = (board: number[][], chip: number) => {
  const validLocations = getValidLocations(board);
  let bestScore = -Infinity;
  let bestColumn = 3;
  // console.log("---");
  for (const col of validLocations) {
    const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
    dropChip(tempBoard, col, chip);
    const score = scorePosition(tempBoard);
    // console.log(tempBoard);
    // console.log(score);
    if (score > bestScore && score !== 0) {
      bestScore = score;
      bestColumn = col;
    }
  }
  return bestColumn;
};

export default pickBestMove;
