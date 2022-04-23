/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	// Loop through the string to find differences.
	let notEqualCount = 0;
	const letters1 = [];
	const letters2 = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			letters1[notEqualCount] = s1[i];
			letters2[notEqualCount] = s2[i];
			notEqualCount++;
			if (notEqualCount > 2) {
				return false;
			}
		}
	}
	if (letters1[0] !== letters2[1] || letters1[1] !== letters2[0]) {
		return false;
	}
	return true;
};
