/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const row1 = new Set("qwertyuiop".split(""));
	const row2 = new Set("asdfghjkl".split(""));
	const row3 = new Set("zxcvbnm".split(""));

	const findRow = (letter) => {
		if (row1.has(letter)) {
			return 1;
		}
		if (row2.has(letter)) {
			return 2;
		}
		if (row3.has(letter)) {
			return 3;
		}
	};

	const output = [];
	for (const word of words) {
		const lowercase = word.toLowerCase();
		let row = null;
		let shouldAdd = true;
		for (const letter of lowercase) {
			if (row === null) {
				row = findRow(letter);
			} else {
				const newRow = findRow(letter);
				if (row != newRow) {
					shouldAdd = false;
					break;
				}
			}
		}
		if (shouldAdd) {
			output.push(word);
		}
	}

	return output;
};
