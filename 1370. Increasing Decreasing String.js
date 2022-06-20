/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	// Populate alphabets array with letter occurrence. Then keep for looping until we use all the letters.
	const charArr = [];
	const aASCII = "a".charCodeAt(0);
	const alphabets = new Array(26).fill(0);
	for (const c of s) {
		alphabets[c.charCodeAt(0) - aASCII]++;
	}
	let count = s.length;
	while (count > 0) {
		for (let i = 0; i < 26; i++) {
			if (alphabets[i] > 0) {
				charArr.push(String.fromCharCode(i + aASCII));
				alphabets[i]--;
				count--;
			}
		}
		for (let i = 25; i >= 0; i--) {
			if (alphabets[i] > 0) {
				charArr.push(String.fromCharCode(i + aASCII));
				alphabets[i]--;
				count--;
			}
		}
	}
	return charArr.join("");
};
