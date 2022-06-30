/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
	const vowelArr = [];
	const sArr = s.split("");
	for (let i = 0; i < s.length; i++) {
		if (vowels.has(s[i])) {
			vowelArr.push(s[i]);
		}
	}
	for (let i = 0; i < sArr.length; i++) {
		if (vowels.has(sArr[i])) {
			sArr[i] = vowelArr.pop();
		}
	}
	return sArr.join("");
};
