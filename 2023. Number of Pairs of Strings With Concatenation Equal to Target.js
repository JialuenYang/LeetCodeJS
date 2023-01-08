/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
	// Keep track of frequency of each number string
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}
	}

	// Loop through each possible way of splitting target into 2 substrings.
	// Check if both substrings exist in frequency map.
	let output = 0;
	for (let i = 0; i < target.length - 1; i++) {
		const left = target.substring(0, i + 1);
		const right = target.substring(i + 1);
		if (map.has(left) && map.has(right)) {
			if (left === right) {
				// If frequency is only 1, then it can't concat to make target string.
				if (map.get(left) != 1) {
					output += map.get(left) * (map.get(left) - 1);
				}
			} else {
				output += map.get(left) * map.get(right);
			}
		}
	}
	return output;
};
