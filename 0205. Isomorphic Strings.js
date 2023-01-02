/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	// Check for one to one mapping
	const sMap = new Map();
	const tMap = new Map();
	for (let i = 0; i < s.length; i++) {
		if (sMap.has(s[i])) {
			if (sMap.get(s[i]) !== t[i]) {
				return false;
			}
		} else {
			sMap.set(s[i], t[i]);
		}
		if (tMap.has(t[i])) {
			if (tMap.get(t[i]) !== s[i]) {
				return false;
			}
		} else {
			tMap.set(t[i], s[i]);
		}
	}
	return true;
};
