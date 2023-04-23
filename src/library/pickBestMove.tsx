import dropChip from "./dropChip";
import getValidLocations from "./getValidLocations";
import scorePosition from "./scorePosition";

const pickBestMove = (board: number[][], chip: number) => {
  const validLocations = getValidLocations(board);
  let bestScore = -Infinity;
  let bestColumn = 3;
  console.log("---");
  for (let i = 0; i < validLocations.length; i++) {
    const col = validLocations[i] ?? 0;
    const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
    dropChip(tempBoard, col, chip);
    console.log(tempBoard);
    const score = scorePosition(tempBoard);
    console.log(score);
    if (score > bestScore && score !== 0) {
      bestScore = score;
      bestColumn = col;
    }
  }
  return bestColumn;
};

export default pickBestMove;
