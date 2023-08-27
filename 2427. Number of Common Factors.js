/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
	// Only need to check up to the smaller number divided by 2.
	// No need to use Sets to store anything.
	const max = Math.min(a, b) / 2;
	let count = 0;
	for (let i = 1; i <= max; i++) {
		if (a % i == 0 && b % i == 0) {
			count++;
		}
	}

	// Need to check case where one number is fully divisible by another.
	if (a % b == 0 || b % a == 0) {
		count++;
	}

	return count;
};
