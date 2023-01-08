/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
	let output = 0;
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}

		if (map.get(s[i]) == 2) {
			output++;
			map.clear();
			map.set(s[i], 1);
		}
	}
	return output + 1;
};
