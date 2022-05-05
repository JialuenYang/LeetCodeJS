/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
	const fWords = new Array(words.length).fill(0);
	for (let i = 0; i < words.length; i++) {
		fWords[i] = fFunc(words[i]);
	}

	const output = new Array(queries.length).fill(0);
	for (let i = 0; i < queries.length; i++) {
		const fQuery = fFunc(queries[i]);
		for (let j = 0; j < fWords.length; j++) {
			if (fQuery < fWords[j]) {
				output[i]++;
			}
		}
	}
	return output;
};

var fFunc = function (str) {
	let smallestCharCode = 1000;
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) < smallestCharCode) {
			smallestCharCode = str.charCodeAt(i);
			count = 1;
		} else if (str.charCodeAt(i) == smallestCharCode) {
			count++;
		}
	}
	return count;
};
