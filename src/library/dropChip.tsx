const dropChip = (board: number[][], col: number, chip: number) => {
  const column = board[col] ?? [];
  for (let row = 0; row < column.length; row++) {
    if (column[row] === 0) {
      column[row] = chip;
      break;
    }
  }
};

export default dropChip;
