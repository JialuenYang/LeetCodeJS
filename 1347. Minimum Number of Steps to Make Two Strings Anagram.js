/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
	const aASCII = "a".charCodeAt(0);
	const sArr = new Array(26).fill(0);
	const tArr = new Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		sArr[s.charCodeAt(i) - aASCII]++;
		tArr[t.charCodeAt(i) - aASCII]++;
	}
	let output = 0;
	for (let i = 0; i < 26; i++) {
		output += Math.abs(sArr[i] - tArr[i]);
	}
	return Math.ceil(output / 2);
};
