/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	// Key is realizing that you just need the first and last position of the same character.
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.get(s[i]).push(i);
		} else {
			map.set(s[i], [i]);
		}
	}
	let output = -1;
	for (const arr of map.values()) {
		if (arr.length > 1) {
			output = Math.max(output, arr[arr.length - 1] - arr[0] - 1);
		}
	}
	return output;
};
