/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
	const map = new Map();
	for (const num of arr) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	let largestLuckyNumber = -1;
	for (const [key, val] of map) {
		if (key == val && key > largestLuckyNumber) {
			largestLuckyNumber = key;
		}
	}
	return largestLuckyNumber;
};
