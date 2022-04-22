/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
	// Split the string into array of words
	const words = title.split(" ");
	// For each word, follow the rules of capitalization in the prompt.
	for (let i = 0; i < words.length; i++) {
		if (words[i].length <= 2) {
			words[i] = words[i].toLowerCase();
		} else {
			words[i] =
				words[i][0].toUpperCase() +
				words[i].substring(1, words[i].length).toLowerCase();
		}
	}
	// Join the array back into a string.
	return words.join(" ");
};
