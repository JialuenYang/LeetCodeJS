/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
	// Use a set to keep track of unique letters.
	const alphabets = new Set();
	const leftArr = new Array(s.length - 1);

	// Count unique letters from the left.
	for (let i = 0; i < s.length - 1; i++) {
		alphabets.add(s.charAt(i));
		leftArr[i] = alphabets.size;
	}

	let output = 0;
	alphabets.clear();
	// Count unique letters from the right and compare the count
	for (let i = s.length - 1; i > 0; i--) {
		alphabets.add(s.charAt(i));
		if (alphabets.size == leftArr[i - 1]) {
			output++;
		}
	}
	return output;
};
