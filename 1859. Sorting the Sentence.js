/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	//  Split the array into words
	const arr = s.split(" ");
	const newArr = new Array(arr.length);
	// Put the word in its corresponding index after removing the number
	arr.forEach((word) => {
		newArr[parseInt(word[word.length - 1]) - 1] = word.substring(
			0,
			word.length - 1
		);
	});
	return newArr.join(" ");
};
