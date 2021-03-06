import GAME_CONFIG from '../config';

export default isVertical;

/**
 * Are there matches found vertically?
 * @return {Boolean}
 */
function isVertical(grid: any[][]) {
  let found = 0;
  let foundPiece = 0;

  for (let column of grid) {
    for (let piece of column) {

      // Reset things if piece is 0
      if (piece === 0) {
        found = 0;
        foundPiece = 0;
        continue;
      }

      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a column?
      if (found >= GAME_CONFIG.matchesRequired) {
        return true;
      }
    }
  }

  // nothing was found in the same row
  return false;
}
