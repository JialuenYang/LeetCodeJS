/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
	/**
	 * Best solution:
	 * https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1563888/python-one-pass-no-sliding-window-o-n
	 *
	 * My intuition:
	 * Find the shortest substrings that includes all vowels, then count how far away they are to the next consonants.
	 */
	const vowels = new Set(["a", "e", "i", "o", "u"]);

	let count = 0;
	let lastConsonant = -1;
	const lastVowels = new Map();
	for (const vowel of vowels) {
		lastVowels.set(vowel, -1);
	}

	for (let i = 0; i < word.length; i++) {
		if (vowels.has(word[i])) {
			lastVowels.set(word[i], i);
			const minIndex = Math.min(...lastVowels.values());
			count += Math.max(minIndex - lastConsonant, 0);
		} else {
			lastConsonant = i;
		}
	}
	return count;
};
