const getValidLocations = (board: number[][]) => {
  const validLocations: number[] = [];
  for (let col = 0; col < board.length; col++) {
    if (board?.[col]?.[5] === 0) validLocations.push(col);
  }
  return validLocations;
};

export default getValidLocations;
