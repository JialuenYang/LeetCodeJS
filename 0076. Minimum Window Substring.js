/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	/**
	 * Step 1: Move r until all of t are included
	 * Step 2: Move l until a letter of t is missing. Right before removing that letter, record the window substring indices.
	 * Step 3: Repeat
	 **/
	const map = new Map();
	for (const c of t) {
		map.set(c, (map.get(c) || 0) - 1);
	}

	const minIndices = [0, Infinity];
	let count = 0;
	let l = 0;
	let r = 0;
	while (r < s.length) {
		if (map.has(s[r])) {
			map.set(s[r], map.get(s[r]) + 1);
			if (map.get(s[r]) == 0) {
				count++;
				while (count == map.size) {
					if (map.has(s[l])) {
						if (map.get(s[l]) == 0) {
							// Found a window substring
							if (r - l < minIndices[1] - minIndices[0]) {
								minIndices[0] = l;
								minIndices[1] = r;
							}
							count--;
						}
						map.set(s[l], map.get(s[l]) - 1);
					}
					l++;
				}
			}
		}
		r++;
	}

	if (minIndices[1] == Infinity) {
		return "";
	}
	return s.substring(minIndices[0], minIndices[1] + 1);
};
