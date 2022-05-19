/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
	const coord = [0, 0];
	for (const move of moves) {
		if (move === "U") coord[1]++;
		if (move === "D") coord[1]--;
		if (move === "L") coord[0]--;
		if (move === "R") coord[0]++;
	}
	return coord[0] == 0 && coord[1] == 0;
};
