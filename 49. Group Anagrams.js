/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	// Use an array of alphabets count to identify which words are anagrams
	// Use the same array to make a key to store the strings in a map.
	// No need to sort anything
	const alphabets = new Array(26).fill(0);
	const aASCII = "a".charCodeAt(0);
	const map = new Map();
	for (const str of strs) {
		for (let i = 0; i < str.length; i++) {
			alphabets[str[i].charCodeAt(0) - aASCII]++;
		}
		const key = alphabets.join("-");
		if (map.has(key)) {
			map.set(key, [...map.get(key), str]);
		} else {
			map.set(key, [str]);
		}
		// Reset alphabets array for reusability
		alphabets.fill(0);
	}

	return Array.from(map.values());
};
