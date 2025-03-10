/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
	/**
	 * The inverse of XOR is XOR itself.
	 */
	let cur = pref[0];
	for (let i = 1; i < pref.length; i++) {
		pref[i] ^= cur;
		cur ^= pref[i];
	}
	return pref;
};
