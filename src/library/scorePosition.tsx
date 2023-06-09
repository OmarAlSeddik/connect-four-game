// Makes the first 7 "perfect" moves if it starts first!
const scorePosition = (board: number[][]) => {
  const empty = 0;
  const playerChip = 1;
  const cpuChip = 2;
  let score = 0;
  const getCount = (array: number[], value: number) => {
    return array.reduce((a, v) => (v === value ? a + 1 : a), 0);
  };

  const evaluate = (slice: number[]) => {
    const cpuCount = getCount(slice ?? [], cpuChip);
    const emptyCount = getCount(slice ?? [], empty);
    const playerCount = getCount(slice ?? [], playerChip);

    if (cpuCount === 3 && emptyCount === 1) score += 5;
    else if (cpuCount === 2 && emptyCount === 2) score += 1;
    if (playerCount === 3 && emptyCount === 1) score -= 5;
  };

  // Score Center
  const centerCount = getCount(board[3] ?? [], cpuChip);
  score += centerCount * 5;

  // Score Outer
  const outerCount =
    getCount(board[0] ?? [], cpuChip) + getCount(board[6] ?? [], cpuChip);
  score -= outerCount * 5;

  // Score Vertical
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      const slice = [
        board?.[col]?.[row],
        board?.[col]?.[row + 1],
        board?.[col]?.[row + 2],
        board?.[col]?.[row + 3],
      ];
      evaluate(slice as number[]);
    }
  }

  // Score Horizontal
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 6; row++) {
      const slice = [
        board?.[col]?.[row],
        board?.[col + 1]?.[row],
        board?.[col + 2]?.[row],
        board?.[col + 3]?.[row],
      ];
      evaluate(slice as number[]);
    }
  }

  // Score Diagonal 1
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 3; row++) {
      const slice = [
        board?.[col]?.[row],
        board?.[col + 1]?.[row + 1],
        board?.[col + 2]?.[row + 2],
        board?.[col + 3]?.[row + 3],
      ];
      evaluate(slice as number[]);
    }
  }

  // Score Diagonal 2
  for (let col = 3; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      const slice = [
        board?.[col]?.[row],
        board?.[col - 1]?.[row + 1],
        board?.[col - 2]?.[row + 2],
        board?.[col - 3]?.[row + 3],
      ];
      evaluate(slice as number[]);
    }
  }

  return score;
};

export default scorePosition;
