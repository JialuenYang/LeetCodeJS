/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	// Only lowercase letters so the size should only be 26 at most
	// Use 2 maps for the one to one relationship
	const pMap = new Map();
	const sMap = new Map();
	const strArr = s.split(" ");
	// If pattern length isn't the same as the number of words, then they don't match.
	if (pattern.length != strArr.length) {
		return false;
	}

	// Construct the map and check if they are one to one at the same time.
	for (let i = 0; i < pattern.length; i++) {
		if (pMap.has(pattern[i])) {
			if (pMap.get(pattern[i]) !== strArr[i]) {
				return false;
			}
		} else {
			pMap.set(pattern[i], strArr[i]);
		}
		if (sMap.has(strArr[i])) {
			if (sMap.get(strArr[i]) !== pattern[i]) {
				return false;
			}
		} else {
			sMap.set(strArr[i], pattern[i]);
		}
	}
	return true;
};
