/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
	const arr = s.split("");
	let index = s.length - 1;
	for (let i = 0; i < arr.length; i++) {
		if (!isLetter(arr[i])) {
			continue;
		}
		while (!isLetter(s[index])) {
			index--;
		}
		arr[i] = s[index];
		index--;
	}
	return arr.join("");
};

var isLetter = function (char) {
	return char.toUpperCase() !== char.toLowerCase();
};
