/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
	// The key is counting only the top left part of the ship.
	// To ensure that, make sure there are no X left and above of the current cell.
	let output = 0;
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			const isLeft = i == 0;
			if (
				board[i][j] === "X" &&
				(i == 0 || board[i - 1][j] !== "X") &&
				(j == 0 || board[i][j - 1] !== "X")
			) {
				output++;
			}
		}
	}
	return output;
};
