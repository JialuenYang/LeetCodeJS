/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	// Use negative numbers to keep track of visited indices.
	const recursive = (index) => {
		if (index < 0 || arr.length - 1 < index || arr[index] < 0) {
			return false;
		}
		if (arr[index] == 0) {
			return true;
		}
		const move = arr[index];
		arr[index] *= -1;
		return recursive(index + move) || recursive(index - move);
	};

	return recursive(start);
};
