/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	// Saves the count of each num
	const countArr = new Array(101).fill(0);
	for (num of nums) {
		countArr[num]++;
	}

	// Count the amount of numbers smaller than current number
	let prevSum = 0;
	let temp = 0;
	for (let i = 0; i < countArr.length; i++) {
		if (countArr[i] > 0) {
			temp = countArr[i];
			countArr[i] = prevSum;
			prevSum += temp;
		}
	}

	// Modify the nums array to reflect the count
	for (let i = 0; i < nums.length; i++) {
		nums[i] = countArr[nums[i]];
	}
	return nums;
};
