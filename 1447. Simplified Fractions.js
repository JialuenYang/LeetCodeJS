/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
	const output = [];
	if (n == 1) {
		return output;
	}

	// Simply loop through everything
	for (let currN = 2; currN <= n; currN++) {
		const commonFactors = [];
		output.push(`1/${currN}`);
		for (let i = 2; i < currN; i++) {
			if (currN % i == 0) {
				commonFactors.push(i);
			} else {
				let addToOutput = true;
				for (let j = 0; j < commonFactors.length; j++) {
					if (i % commonFactors[j] == 0) {
						commonFactors.push(i);
						addToOutput = false;
						break;
					}
				}
				if (addToOutput) {
					output.push(`${i}/${currN}`);
				}
			}
		}
	}

	return output;
};
