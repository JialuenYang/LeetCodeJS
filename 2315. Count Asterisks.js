/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
	let count = 0;
	let shouldCount = true;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "|") {
			shouldCount = !shouldCount;
		}
		if (s[i] === "*" && shouldCount) {
			count++;
		}
	}
	return count;
};
