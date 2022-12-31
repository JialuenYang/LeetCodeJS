/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
	// Store the count of each unique number
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Loop over the count of the numbers.
	// If even count, number of pairs = count / 2 and no leftover.
	// If odd count, number of pairs = (count - 1) / 2 and leftover = 1.
	let pairs = 0;
	let leftover = 0;
	for (const m of map.values()) {
		if (m % 2 == 0) {
			pairs += m / 2;
		} else {
			pairs += (m - 1) / 2;
			leftover += 1;
		}
	}
	return [pairs, leftover];
};
