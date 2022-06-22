/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
	const vowel = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
	const wordArr = sentence.split(" ");
	for (let i = 0; i < wordArr.length; i++) {
		if (vowel.has(wordArr[i][0])) {
			wordArr[i] = wordArr[i] + "ma" + "a".repeat(i + 1);
		} else {
			wordArr[i] =
				wordArr[i].substring(1, wordArr[i].length) +
				wordArr[i][0] +
				"ma" +
				"a".repeat(i + 1);
		}
	}
	return wordArr.join(" ");
};
