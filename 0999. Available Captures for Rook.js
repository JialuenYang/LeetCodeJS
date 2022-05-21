/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
	// Find coordinates of Rook
	let Rx = 0;
	let Ry = 0;
	// Use labels to break out of loops
	loop: for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i][j] === "R") {
				Rx = i;
				Ry = j;
				break loop;
			}
		}
	}
	// Check left
	let output = 0;
	let x = Rx - 1;
	while (x >= 0) {
		if (board[x][Ry] === "p") {
			output++;
			break;
		} else if (board[x][Ry] === "B") {
			break;
		}
		x--;
	}
	// Check right
	x = Rx + 1;
	while (x < 8) {
		if (board[x][Ry] === "p") {
			output++;
			break;
		} else if (board[x][Ry] === "B") {
			break;
		}
		x++;
	}
	// Check up
	let y = Ry - 1;
	while (y >= 0) {
		if (board[Rx][y] === "p") {
			output++;
			break;
		} else if (board[Rx][y] === "B") {
			break;
		}
		y--;
	}
	// Check down
	y = Ry + 1;
	while (y < 8) {
		if (board[Rx][y] === "p") {
			output++;
			break;
		} else if (board[Rx][y] === "B") {
			break;
		}
		y++;
	}
	return output;
};
