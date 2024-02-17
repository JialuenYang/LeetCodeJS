/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length == 0) {
		return [];
	}

	const lettersMap = new Map();
	lettersMap.set("2", "abc");
	lettersMap.set("3", "def");
	lettersMap.set("4", "ghi");
	lettersMap.set("5", "jkl");
	lettersMap.set("6", "mno");
	lettersMap.set("7", "pqrs");
	lettersMap.set("8", "tuv");
	lettersMap.set("9", "wxyz");

	const bfs = (prevArr, index) => {
		if (index >= digits.length) {
			return prevArr;
		}

		const letters = lettersMap.get(digits[index]);

		const newArr = [];
		for (let i = 0; i < prevArr.length; i++) {
			for (let j = 0; j < letters.length; j++) {
				newArr.push(prevArr[i] + letters[j]);
			}
		}

		return bfs(newArr, index + 1);
	};

	return bfs([""], 0);
};
