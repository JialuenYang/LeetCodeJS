/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
	// Loop through the array of words and check if each word is a palindrome via index of char compairson.
	for (const word of words) {
		let index1 = 0;
		let index2 = word.length - 1;
		while (index1 < index2) {
			if (word[index1] !== word[index2]) {
				break;
			}
			index1++;
			index2--;
		}
		if (index2 <= index1) {
			return word;
		}
	}
	return "";
};
