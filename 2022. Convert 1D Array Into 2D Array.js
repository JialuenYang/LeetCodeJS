/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
	if (original.length != m * n) {
		return [];
	}

	const output = [];
	for (let i = 0; i < m * n; i += n) {
		output.push(original.slice(i, i + n));
	}
	return output;
};
