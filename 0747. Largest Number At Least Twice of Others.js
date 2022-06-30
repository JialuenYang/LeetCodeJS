/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
	if (nums.length == 1) {
		return 0;
	}

	let largestIndex = 0;
	let largest = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > largest) {
			largest = nums[i];
			largestIndex = i;
		}
	}
	let secondLargest = largest + 1;
	let gap = Infinity;
	for (const n of nums) {
		if (n != largest && largest - n < gap) {
			gap = largest - n;
			secondLargest = n;
		}
	}
	return largest >= secondLargest * 2 ? largestIndex : -1;
};
