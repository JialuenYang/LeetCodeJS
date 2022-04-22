/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	function smartAdd(aSet, str) {
		if (str !== ".") {
			aSet.add(str);
		}
	}

	// Horizontal
	for (let i = 0; i < 9; i++) {
		const aSet = new Set();
		for (let j = 0; j < 9; j++) {
			if (aSet.has(board[i][j])) {
				return false;
			}
			smartAdd(aSet, board[i][j]);
		}
	}

	// Vertical
	for (let i = 0; i < 9; i++) {
		const aSet = new Set();
		for (let j = 0; j < 9; j++) {
			if (aSet.has(board[j][i])) {
				return false;
			}
			smartAdd(aSet, board[j][i]);
		}
	}

	// The nine sectors
	function sector(x, y) {
		const aSet = new Set();

		if (aSet.has(board[x][y])) {
			return false;
		}
		smartAdd(aSet, board[x][y]);

		if (aSet.has(board[x][y + 1])) {
			return false;
		}
		smartAdd(aSet, board[x][y + 1]);

		if (aSet.has(board[x][y + 2])) {
			return false;
		}
		smartAdd(aSet, board[x][y + 2]);

		if (aSet.has(board[x + 1][y])) {
			return false;
		}
		smartAdd(aSet, board[x + 1][y]);

		if (aSet.has(board[x + 1][y + 1])) {
			return false;
		}
		smartAdd(aSet, board[x + 1][y + 1]);

		if (aSet.has(board[x + 1][y + 2])) {
			return false;
		}
		smartAdd(aSet, board[x + 1][y + 2]);

		if (aSet.has(board[x + 2][y])) {
			return false;
		}
		smartAdd(aSet, board[x + 2][y]);

		if (aSet.has(board[x + 2][y + 1])) {
			return false;
		}
		smartAdd(aSet, board[x + 2][y + 1]);

		if (aSet.has(board[x + 2][y + 2])) {
			return false;
		}

		return true;
	}

	if (
		sector(0, 0) &&
		sector(0, 3) &&
		sector(0, 6) &&
		sector(3, 0) &&
		sector(3, 3) &&
		sector(3, 6) &&
		sector(6, 0) &&
		sector(6, 3) &&
		sector(6, 6)
	) {
		return true;
	}

	return false;
};
