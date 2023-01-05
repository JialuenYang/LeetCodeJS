/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
	// It's just math. Use permutations to figure out the answer.
	// For example, if n = 3, leftmost digit can be 1-9, then 0-9, then 0-9.
	// But after taking the unique digits into account, it's 9 * 9 * 8.
	let answer = 1;
	for (let i = 1; i <= n; i++) {
		let count = 9;
		for (let j = 1; j < i; j++) {
			count *= 10 - j;
		}
		answer += count;
	}
	return answer;
};
