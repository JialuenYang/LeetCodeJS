// Method 1: Brute force. Very slow.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	for (let i = 1; i <= k; i++) {
		for (let j = 0; j < nums.length - i; j++) {
			if (nums[j] == nums[j + i]) {
				return true;
			}
		}
	}
	return false;
};

// Method 2: Map of duplicates indices. Faster.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.get(nums[i]).push(i);
		} else {
			map.set(nums[i], [i]);
		}
	}
	for (const arr of map.values()) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] - arr[i] <= k) {
				return true;
			}
		}
	}
	return false;
};
