/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	const charArray = new Array(s.length).fill("");
	for (let i = 0; i < indices.length; i++) {
		charArray[indices[i]] = s[i];
	}
	return charArray.join("");
};
