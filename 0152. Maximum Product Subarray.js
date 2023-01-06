/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	// Stores largest single num in nums
	let largest = -10;

	// Split array by 0 if 0 exists
	const arrs = [];
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		largest = Math.max(largest, nums[i]);
		if (nums[i] != 0) {
			arr.push(nums[i]);
			if (arr.length > 0 && (i == nums.length - 1 || nums[i + 1] == 0)) {
				arrs.push(arr);
				arr = [];
			}
		}
	}

	for (const subArr of arrs) {
		// If there's only one number here, then skip it. We are already storing the largest number.
		if (subArr.length == 1) {
			continue;
		}
		let left = null;
		let right = null;
		let negNums = 0;
		for (let i = 0; i < subArr.length; i++) {
			if (subArr[i] < 0) {
				negNums++;
				if (left === null) {
					left = i;
				}
				right = i;
			}
		}

		let product1 = 1;
		let product2 = 1;
		if (negNums % 2 == 0) {
			// Even number of negative nums. Multiply all.
			for (const num of subArr) {
				product1 *= num;
			}
		} else {
			// Odd number of negative nums. 1, 3, 5, 7, 9...
			// Get products of index 0 to right - 1 and left + 1 to subArr.length - 1.
			for (let i = 0; i < right; i++) {
				product1 *= subArr[i];
			}
			for (let i = left + 1; i < subArr.length; i++) {
				product2 *= subArr[i];
			}
		}
		largest = Math.max(largest, product1, product2);
	}
	return largest;
};
