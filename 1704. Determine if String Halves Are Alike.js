/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
	let count = 0;
	for (let i = 0; i < s.length / 2; i++) {
		if (isVowel(s[i])) {
			count++;
		}
	}
	for (let i = s.length / 2; i < s.length; i++) {
		if (isVowel(s[i])) {
			count--;
		}
	}
	return count == 0;
};

var isVowel = function (letter) {
	switch (letter) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
		case "A":
		case "E":
		case "I":
		case "O":
		case "U":
			return true;
		default:
			return false;
	}
};
