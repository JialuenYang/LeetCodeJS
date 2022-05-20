/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
	// Turn broken letters into a set for easier handling
	// Then count the number of broken words and return the number of words subracted by number of broken words
	const set = new Set(brokenLetters.split(""));
	let output = 0;
	const words = text.split(" ");
	for (const word of words) {
		for (const c of word) {
			if (set.has(c)) {
				output++;
				break;
			}
		}
	}
	return words.length - output;
};
