/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
	// Use Regex pattern to split the string by any lowercase letters.
	const arr = word.split(/[a-z]+/);
	// Use a set to eliminate duplicate numbers.
	// Must use set of STRINGS because a number gets ridiculously large in one of the test cases.
	const set = new Set();
	arr.forEach((n) => {
		if (n.length > 0) {
			// Eliminate leading zeroes
			let index = 0;
			while (n[index] === "0") {
				index++;
			}
			// If all zeroes, it's just zero. Else, add the substring.
			if (index == n.length) {
				set.add("0");
			} else {
				set.add(n.substring(index, n.length));
			}
		}
	});
	return set.size;
};
