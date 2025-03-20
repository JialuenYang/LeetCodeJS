/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
	/**
	 * Time complexity: O(n*m)
	 * Space complexity: O(n*m) if we count stack frame
	 */
	const [r, c] = click;
	if (board[r][c] === "M") {
		board[r][c] = "X";
		return board;
	}
	if (
		board[r][c] !== "E" ||
		r < 0 ||
		board.length <= r ||
		c < 0 ||
		board[0].length <= c
	) {
		return;
	}

	const dir = [-1, 0, 1];
	let nearbyMines = 0;
	for (const x of dir) {
		for (const y of dir) {
			const newR = r + x;
			const newC = c + y;
			if (
				(x == 0 && y == 0) ||
				newR < 0 ||
				board.length <= newR ||
				newC < 0 ||
				board[0].length <= newC
			) {
				continue;
			}
			if (board[newR][newC] === "M") {
				nearbyMines++;
			}
		}
	}

	if (nearbyMines > 0) {
		board[r][c] = String(nearbyMines);
	} else {
		for (const x of dir) {
			for (const y of dir) {
				const newR = r + x;
				const newC = c + y;
				if (
					newR < 0 ||
					board.length <= newR ||
					newC < 0 ||
					board[0].length <= newC
				) {
					continue;
				}
				board[r][c] = "B";
				if (board[newR][newC] === "E") {
					updateBoard(board, [newR, newC]);
				}
			}
		}
	}

	return board;
};
