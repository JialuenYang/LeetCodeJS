/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
	/*
    Be aware of 0's. 
    Positive product cases:
    1. Number of positive nums > 0
    2. Or number of negative nums is even
        a. From start to index of final negative num - 1
        b. From index of first negative num + 1 to end
    */

	let maxLength = 0;
	let negCount = 0;
	let neg = [];
	let left = 0;
	let i = 0;
	while (i < nums.length) {
		while (nums[i] == 0) {
			negCount = 0;
			neg = [];
			i++;
			left = i;
		}
		if (i >= nums.length) {
			break;
		}
		if (nums[i] < 0) {
			negCount++;
			if (neg.length == 0) {
				neg[0] = i;
			} else {
				neg[1] = i;
			}
		}
		if (negCount % 2 == 0) {
			maxLength = Math.max(maxLength, i - left + 1);
		} else if (nums[i + 1] == 0 || i == nums.length - 1) {
			if (neg[0] >= 0) {
				maxLength = Math.max(maxLength, i - neg[0]);
			}
			if (neg[1] >= 0) {
				maxLength = Math.max(maxLength, neg[1] - left);
			}
		}
		i++;
	}

	return maxLength;
};
