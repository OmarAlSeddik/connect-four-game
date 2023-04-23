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
    if (cpuCount === 4) score += 1000;
    else if (cpuCount === 3 && emptyCount === 1) score += 10;
    else if (cpuCount === 2 && emptyCount === 2) score += 1;

    if (playerCount === 3 && emptyCount === 1) score -= 100;
    else if (playerCount === 2 && emptyCount === 2) score -= 5;
  };

  // Score Center
  const cpuCount = getCount(board[3] ?? [], cpuChip);
  score += cpuCount * 5;

  // Score Vertical
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      const slice = [
        board?.[col]?.[row],
        board?.[col]?.[row + 1],
        board?.[col]?.[row + 2],
        board?.[col]?.[row + 3],
      ];
      evaluate(slice);
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
      evaluate(slice);
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
      evaluate(slice);
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
      evaluate(slice);
    }
  }

  return score;
};

export default scorePosition;
