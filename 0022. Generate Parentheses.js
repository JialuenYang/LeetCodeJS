/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const output = [];

	const recursive = (open, close, str) => {
		if (str.length == 2 * n) {
			output.push(str);
			return;
		}

		// Always open parenthesis first
		if (open < n) {
			recursive(open + 1, close, str + "(");
		}

		// If there are more open parenthesis, then we can close it
		if (close < open) {
			recursive(open, close + 1, str + ")");
		}
	};

	recursive(0, 0, "");
	return output;
};
