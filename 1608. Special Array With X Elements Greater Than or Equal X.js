/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
	/**
	 * No need to sort. Simply make a frequency count array based on index.
	 * e.g., arr[3] points to how many numbers are greater than or equal to 3
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	const arr = new Array(nums.length + 1).fill(0);

	for (const num of nums) {
		arr[Math.min(arr.length - 1, num)]++;
	}

	// Need to back propagate the frequency count from the end to the beginning.
	for (let i = arr.length - 2; i >= 0; i--) {
		arr[i] += arr[i + 1];
	}

	for (let i = 0; i < arr.length; i++) {
		if (i == arr[i]) {
			return i;
		}
	}

	return -1;
};
