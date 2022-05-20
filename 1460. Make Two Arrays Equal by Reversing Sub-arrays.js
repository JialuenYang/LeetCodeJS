/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
	if (arr.length != target.length) {
		return false;
	}
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
		} else {
			map.set(arr[i], 1);
		}
	}
	for (let i = 0; i < target.length; i++) {
		if (map.has(target[i])) {
			map.set(target[i], map.get(target[i]) - 1);
		} else {
			return false;
		}
	}
	for (const val of map.values()) {
		if (val != 0) {
			return false;
		}
	}
	return true;
};
