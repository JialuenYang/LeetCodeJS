/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
	const map = new Map();
	for (const c of licensePlate) {
		const lowerC = c.toLowerCase();
		if (c.toUpperCase() !== lowerC) {
			if (map.has(lowerC)) {
				map.set(lowerC, map.get(lowerC) + 1);
			} else {
				map.set(lowerC, 1);
			}
		}
	}

	let shortestLength = Infinity;
	let shortestIndex = Infinity;

	for (let i = words.length - 1; i >= 0; i--) {
		const tempMap = new Map(map);
		for (const c of words[i]) {
			if (tempMap.has(c)) {
				if (tempMap.get(c) == 1) {
					tempMap.delete(c);
				} else {
					tempMap.set(c, tempMap.get(c) - 1);
				}
			}
		}

		if (tempMap.size == 0 && words[i].length <= shortestLength) {
			shortestLength = words[i].length;
			shortestIndex = i;
		}
	}

	return words[shortestIndex];
};
