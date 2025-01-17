/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function (s, t, k) {
	// Read the problem wrong the first time.
	// Only need to rearrange the substrings, not the contents of the substrings.
	const len = s.length / k;

	const getFreqMap = (str) => {
		const map = new Map();
		for (let i = 0; i < str.length; i += len) {
			const key = str.substring(i, i + len);
			if (map.has(key)) {
				map.set(key, map.get(key) + 1);
			} else {
				map.set(key, 1);
			}
		}
		return map;
	};

	const sMap = getFreqMap(s);
	const tMap = getFreqMap(t);

	for (const [key, val] of sMap) {
		if (!tMap.has(key) || tMap.get(key) != val) {
			return false;
		}
	}

	return true;
};
