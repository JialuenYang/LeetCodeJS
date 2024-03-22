/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	const rows = [...Array(9)].map((_) => new Set());
	const cols = [...Array(9)].map((_) => new Set());
	const subs = [...Array(9)].map((_) => new Set());

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === ".") {
				continue;
			}

			if (
				rows[i].has(board[i][j]) ||
				cols[j].has(board[i][j]) ||
				subs[3 * Math.floor(i / 3) + Math.floor(j / 3)].has(board[i][j])
			) {
				return false;
			}

			rows[i].add(board[i][j]);
			cols[j].add(board[i][j]);
			subs[3 * Math.floor(i / 3) + Math.floor(j / 3)].add(board[i][j]);
		}
	}

	return true;
};
