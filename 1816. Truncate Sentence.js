/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
	// We can split the string into arrays and join them back together, but that will use more space.
	// Instead, we can just go through the string until we find k number of spaces.
	let spaceCount = 0;
	let index = -1;
	while (spaceCount < k && index < s.length) {
		index++;
		if (s[index] === " ") {
			spaceCount++;
		}
	}
	return s.substring(0, index);
};
