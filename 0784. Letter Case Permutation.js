/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	let output = [""];
	for (const c of s) {
		if (
			c.charCodeAt(0) >= "0".charCodeAt(0) &&
			c.charCodeAt(0) <= "9".charCodeAt(0)
		) {
			for (let i = 0; i < output.length; i++) {
				output[i] += c;
			}
		} else {
			// Duplicate the array. FIrst half will concat with lowercase letter. Second half will concat with uppercase letter.
			output = output.concat(output);
			for (let i = 0; i < output.length / 2; i++) {
				output[i] += c.toLowerCase();
			}
			for (let i = output.length / 2; i < output.length; i++) {
				output[i] += c.toUpperCase();
			}
		}
	}
	return output;
};
