/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
	// Replace the word if it starts with a root. Remember to keep track of the shortest matching root.
	const arr = sentence.split(" ");
	for (let i = 0; i < arr.length; i++) {
		let shortestRoot = null;
		for (let j = 0; j < dictionary.length; j++) {
			if (arr[i].startsWith(dictionary[j])) {
				if (
					shortestRoot === null ||
					dictionary[j].length < shortestRoot.length
				) {
					shortestRoot = dictionary[j];
				}
			}
		}
		if (shortestRoot !== null) {
			arr[i] = shortestRoot;
		}
	}

	return arr.join(" ");
};
