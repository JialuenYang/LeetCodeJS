/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
	/**
	 * Use sliding window + vowels count array
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	const freq = new Map();
	freq.set("a", 0);
	freq.set("e", 0);
	freq.set("i", 0);
	freq.set("o", 0);
	freq.set("u", 0);

	// Keeps track of how many consecutive vowels there are on the right of and including current index.
	const vowelsCount = new Array(word.length + 1).fill(0);
	for (let i = word.length - 1; i >= 0; i--) {
		if (freq.has(word[i])) {
			vowelsCount[i] = vowelsCount[i + 1] + 1;
		}
	}

	let vowels = 0;
	let consonants = 0;
	let l = 0;
	let r = 0;
	let output = 0;
	while (l <= word.length - 5 - k) {
		while ((vowels < 5 || consonants < k) && r < word.length) {
			if (freq.has(word[r])) {
				if (freq.get(word[r]) == 0) {
					vowels++;
				}
				freq.set(word[r], freq.get(word[r]) + 1);
			} else {
				consonants++;
			}
			r++;
		}

		if (vowels == 5 && consonants == k) {
			output++;
			if (freq.has(word[r])) {
				output += vowelsCount[r];
			}
		}

		if (freq.has(word[l])) {
			if (freq.get(word[l]) == 1) {
				vowels--;
			}
			freq.set(word[l], freq.get(word[l]) - 1);
		} else {
			consonants--;
		}
		l++;
	}
	return output;
};
