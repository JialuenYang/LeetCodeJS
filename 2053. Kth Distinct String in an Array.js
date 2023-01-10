/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
	const map = new Map();
	for (const str of arr) {
		if (map.has(str)) {
			map.set(str, 2);
		} else {
			map.set(str, 1);
		}
	}
	const sorted = [...map].filter((e) => e[1] == 1).map((e) => e[0]);
	if (k > sorted.length) {
		return "";
	}
	return sorted[k - 1];
};
