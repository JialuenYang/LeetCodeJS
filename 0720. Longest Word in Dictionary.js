/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
	// Create map based on word length
	const map = new Map();
	for (const word of words) {
		if (map.has(word.length)) {
			map.get(word.length).push(word);
		} else {
			map.set(word.length, [word]);
		}
	}

	// Must start from word length = 1
	const minLength = Math.min(...[...map.keys()]);
	if (minLength != 1) {
		return "";
	}
	// Find max word length that can be added one by one from 1
	let maxLength = 1;
	while (map.has(maxLength)) {
		maxLength++;
	}
	maxLength--;

	// Check for prefix
	for (let i = 1; i < maxLength; i++) {
		const set = new Set(map.get(i));
		const long = map.get(i + 1);
		const newArr = [];
		for (const word of long) {
			if (set.has(word.substring(0, i))) {
				newArr.push(word);
			}
		}
		if (newArr.length == 0) {
			maxLength = i;
			break;
		}
		map.set(i + 1, newArr);
	}

	// Get smallest lexicographical word
	let answer = map.get(maxLength)[0];
	for (const word of map.get(maxLength)) {
		if (word < answer) {
			answer = word;
		}
	}
	return answer;
};
