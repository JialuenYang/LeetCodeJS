/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	const output = [];

	const recursion = (comb, x) => {
		if (comb.length == k) {
			output.push(comb);
			return;
		}

		for (let i = x; i <= n; i++) {
			const newComb = Array.from(comb);
			newComb.push(i);
			recursion(newComb, i + 1);
		}
	};

	recursion([], 1);
	return output;
};
