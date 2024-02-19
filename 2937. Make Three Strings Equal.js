/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
	const minLength = Math.min(s1.length, s2.length, s3.length);
	let longestCommonPrefixLength = 0;
	for (let i = 0; i < minLength; i++) {
		if (s1[i] === s2[i] && s2[i] === s3[i]) {
			longestCommonPrefixLength++;
			continue;
		}
		break;
	}

	if (longestCommonPrefixLength == 0) {
		return -1;
	}

	return s1.length + s2.length + s3.length - longestCommonPrefixLength * 3;
};
