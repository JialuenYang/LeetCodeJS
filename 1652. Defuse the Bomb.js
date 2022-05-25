/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
	if (k == 0) {
		return new Array(code.length).fill(0);
	}
	const output = new Array(code.length).fill(0);
	const absK = Math.abs(k);
	for (let i = 0; i < code.length; i++) {
		for (let j = 1; j < absK + 1; j++) {
			const adjustedJ = k > 0 ? j : -j;
			// Either keeps going and loop around array length or goes backwards and go to end of array
			const index =
				i + adjustedJ >= 0
					? (i + adjustedJ) % code.length
					: code.length + i + adjustedJ;
			output[i] += code[index];
		}
	}
	return output;
};
