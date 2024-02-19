/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	if (mat.length * mat[0].length != r * c) {
		return mat;
	}
	const output = [];
	let index = 0;
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			if (index % c == 0) {
				output.push([mat[i][j]]);
			} else {
				output[Math.floor(index / c)].push([mat[i][j]]);
			}
			index++;
		}
	}

	return output;
};
