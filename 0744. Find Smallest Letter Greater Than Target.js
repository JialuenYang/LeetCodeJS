/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	// Sorted letters. Use binary search.
	let l = 0;
	let r = letters.length - 1;
	while (l <= r) {
		const m = Math.floor((r + l) / 2);
		if (letters[m] > target) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	}

	if (l < 0 || l >= letters.length) {
		return letters[0];
	}
	return letters[l];
};
