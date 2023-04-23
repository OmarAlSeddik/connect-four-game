const checkWinCondition = (board: number[][]) => {
  const checkLine = (a = 0, b = 0, c = 0, d = 0) => {
    return a !== 0 && a === b && a === c && a === d;
  };
  // Horizontal
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 6; row++) {
      if (
        checkLine(
          board?.[col]?.[row],
          board?.[col + 1]?.[row],
          board?.[col + 2]?.[row],
          board?.[col + 3]?.[row]
        )
      )
        return {
          winner: board?.[col]?.[row],
          winningChips: [
            `${col} ${row}`,
            `${col + 1} ${row}`,
            `${col + 2} ${row}`,
            `${col + 3} ${row}`,
          ],
        };
    }
  }
  // Vertical
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        checkLine(
          board?.[col]?.[row],
          board?.[col]?.[row + 1],
          board?.[col]?.[row + 2],
          board?.[col]?.[row + 3]
        )
      )
        return {
          winner: board?.[col]?.[row],
          winningChips: [
            `${col} ${row}`,
            `${col} ${row + 1}`,
            `${col} ${row + 2}`,
            `${col} ${row + 3}`,
          ],
        };
    }
  }
  // Diagonal 1
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        checkLine(
          board?.[col]?.[row],
          board?.[col + 1]?.[row + 1],
          board?.[col + 2]?.[row + 2],
          board?.[col + 3]?.[row + 3]
        )
      )
        return {
          winner: board?.[col]?.[row],
          winningChips: [
            `${col} ${row}`,
            `${col + 1} ${row + 1}`,
            `${col + 2} ${row + 2}`,
            `${col + 3} ${row + 3}`,
          ],
        };
    }
  }
  // Diagonal 2
  for (let col = 3; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        checkLine(
          board?.[col]?.[row],
          board?.[col - 1]?.[row + 1],
          board?.[col - 2]?.[row + 2],
          board?.[col - 3]?.[row + 3]
        )
      )
        return {
          winner: board?.[col]?.[row],
          winningChips: [
            `${col} ${row}`,
            `${col - 1} ${row + 1}`,
            `${col - 2} ${row + 2}`,
            `${col - 3} ${row + 3}`,
          ],
        };
    }
  }
  return { winner: 0, winningChips: [] };
};

export default checkWinCondition;
