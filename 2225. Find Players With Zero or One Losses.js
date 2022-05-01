/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
	// Use Set to keep track of wins because the count doesn't matter.
	const winSet = new Set();
	// Use Map to keep track of losses because the count matters.
	const loseMap = new Map();

	matches.forEach((match) => {
		winSet.add(match[0]);

		if (loseMap.has(match[1])) {
			loseMap.set(match[1], loseMap.get(match[1]) + 1);
		} else {
			loseMap.set(match[1], 1);
		}
	});

	// Won all matches
	const wonAllArr = [];
	for (const key of winSet) {
		if (!loseMap.has(key)) {
			wonAllArr.push(key);
		}
	}
	wonAllArr.sort((a, b) => a - b);

	// Lost exactly one match
	const lostOneArr = [];
	for (const [key, val] of loseMap) {
		if (val == 1) {
			lostOneArr.push(key);
		}
	}
	lostOneArr.sort((a, b) => a - b);

	return [wonAllArr, lostOneArr];
};
