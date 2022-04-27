/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
	// Find the number of unique letters in each string using 2 arrays of 26 alphabets.
	const sArr = new Array(26).fill(0);
	const tArr = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);

	for (let i = 0; i < s.length; i++) {
		sArr[s.charCodeAt(i) - aASCII]++;
	}
	for (let i = 0; i < t.length; i++) {
		tArr[t.charCodeAt(i) - aASCII]++;
	}

	let output = 0;
	for (let i = 0; i < sArr.length; i++) {
		output += Math.abs(sArr[i] - tArr[i]);
	}
	return output;
};
