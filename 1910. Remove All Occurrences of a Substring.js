/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
	// Not the fastest solution, but it's the most readable.
	// Fastest solution needs indices to keep track of everything.
	while (s.includes(part)) {
		s = s.replace(part, "");
	}
	return s;
};
