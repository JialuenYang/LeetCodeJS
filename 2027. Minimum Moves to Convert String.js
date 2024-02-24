/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
	let output = 0;
	let i = 0;
	while (i < s.length) {
		if (s[i] === "X") {
			output++;
			i += 3;
		} else {
			i++;
		}
	}

	return output;
};
