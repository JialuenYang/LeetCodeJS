/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
	// Use an array of alphabet occurance
	const charsArr = alphabetArr(chars);
	let output = 0;
	for (const word of words) {
		const wordArr = alphabetArr(word);
		let canForm = true;
		for (let i = 0; i < wordArr.length; i++) {
			if (wordArr[i] > charsArr[i]) {
				canForm = false;
				break;
			}
		}
		if (canForm) {
			output += word.length;
		}
	}
	return output;
};

var alphabetArr = function (word) {
	const aASCII = "a".charCodeAt(0);
	const alphabets = new Array(26).fill(0);
	for (const c of word) {
		alphabets[c.charCodeAt(0) - aASCII]++;
	}
	return alphabets;
};
