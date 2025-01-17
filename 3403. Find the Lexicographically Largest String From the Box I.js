/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
	/**
	 * Find the largest letter and all of its indices. Get the substrings for each and compare to get the largest of them all.
	 */

    // Base case. Need this in case the largest letter isn't at index 0. 
	if (numFriends == 1) {
		return word;
	}

	const len = word.length - (numFriends - 1);

	let largest = "a";
	for (const c of word) {
		if (c > largest) {
			largest = c;
		}
	}
	const largestIndices = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i] === largest) {
			largestIndices.push(i);
		}
	}
	for (let i = 0; i < largestIndices.length; i++) {
		const substr = word.substring(largestIndices[i], largestIndices[i] + len);
		if (substr > largest) {
			largest = substr;
		}
	}
	return largest;
};
