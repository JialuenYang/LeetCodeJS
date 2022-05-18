/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	// Simply use ASCII to get the morse code.
	const table = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];
	const set = new Set();
	const aASCII = "a".charCodeAt(0);
	for (const word of words) {
		const arr = new Array(word.length);
		for (let i = 0; i < word.length; i++) {
			arr[i] = table[word.charCodeAt(i) - aASCII];
		}

		set.add(arr.join(""));
	}
	return set.size;
};
