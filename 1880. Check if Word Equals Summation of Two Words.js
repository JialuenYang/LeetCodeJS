/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
	return wordToNum(firstWord) + wordToNum(secondWord) == wordToNum(targetWord);
};

var wordToNum = function (word) {
	let num = 0;
	const aASCII = "a".charCodeAt(0);
	for (let i = 0; i < word.length; i++) {
		num += (word.charCodeAt(i) - aASCII) * 10 ** (word.length - i - 1);
	}
	return num;
};
