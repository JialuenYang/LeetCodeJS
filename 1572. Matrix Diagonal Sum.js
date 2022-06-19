/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
	let output = 0;
	// A single for loop should add both diagnal
	for (let i = 0; i < mat.length; i++) {
		output += mat[i][i];
		output += mat[mat.length - i - 1][i];
	}
	// If mat.length is odd, the middle value is added twice. So we want to subtract it from the sum.
	if (mat.length % 2 == 1) {
		const half = (mat.length - 1) / 2;
		output -= mat[half][half];
	}
	return output;
};
