/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	// Use a map to keep track of frequency of letters and an array to keep track of first occurrence's index.
	const indices = new Array(26).fill(undefined);
	const aASCII = "a".charCodeAt(0);
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
			indices[s.charCodeAt(i) - aASCII] = i;
		}
	}
	let output = Infinity;
	for (const [key, val] of map) {
		if (val == 1) {
			output = Math.min(output, indices[key.charCodeAt(0) - aASCII]);
		}
	}
	return output == Infinity ? -1 : output;
};
