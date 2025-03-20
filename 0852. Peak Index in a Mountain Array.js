/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	/**
	 * Time complexity: O(log(n))
	 * Space complexity: O(1)
	 */
	let l = 0;
	let r = arr.length - 1;
	while (l <= r) {
		const m = Math.floor((l + r) / 2);
		if (arr[m] < arr[m + 1]) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	return l;
};
