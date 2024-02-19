/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
	let numOf0 = 0;
	for (const c of s) {
		if (c === "0") {
			numOf0++;
		}
	}
	// No need to count 1's when I can just subtract number of 0's from s.length.
	// Also, subtract 1 from number of 1's for the final rightmost 1 for odd binary.
	const numOf1 = s.length - numOf0 - 1;
	return "1".repeat(numOf1) + "0".repeat(numOf0) + "1";
};
