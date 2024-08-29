/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	// Sliding window with a count (number of correctly counted characters)
	const map = new Map();
	for (const c of s1) {
		map.set(c, (map.get(c) || 0) + 1);
	}
	const numOfUniqueChars = map.size;
	let count = 0;

	let r = 0;
	while (r < s2.length) {
		if (r >= s1.length && map.has(s2[r - s1.length])) {
			if (map.get(s2[r - s1.length]) == 0) {
				count--;
			}
			map.set(s2[r - s1.length], map.get(s2[r - s1.length]) + 1);
		}

		if (map.has(s2[r])) {
			map.set(s2[r], map.get(s2[r]) - 1);
			if (map.get(s2[r]) == 0) {
				count++;
				if (count == numOfUniqueChars) {
					return true;
				}
			}
		}

		r++;
	}

	return false;
};
