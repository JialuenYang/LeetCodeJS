/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
	const m = mat.length;
	const n = mat[0].length;
	const output = [m - 1, 0];
	for (let i = m - 1; i >= 0; i--) {
		const count = mat[i].reduce((acc, cur) => acc + cur, 0);
		if (count >= output[1]) {
			output[0] = i;
			output[1] = count;
		}
	}
	return output;
};
