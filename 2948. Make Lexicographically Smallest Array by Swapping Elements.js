/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
	/**
	 * Neetcode: https://www.youtube.com/watch?v=-FGl6dzPexY
	 * 1. Sort the array
	 * 2. Group the numbers within the limit
	 * 3. Keep track of the numbers' groups
	 * 4. Loop through the original nums array and replace each number with the smallest number in the corresponding group.
	 */
	// Sorted from big to small so I can pop the smallest number.
	// Alternatively, sort from small to big and use a queue so you can pop from the left.
	const sorted = nums.toSorted((a, b) => b - a);
	const groups = [[]];
	const map = new Map();
	for (const num of sorted) {
		if (
			groups[groups.length - 1][groups[groups.length - 1].length - 1] - num >
			limit
		) {
			groups.push([]);
		}
		groups[groups.length - 1].push(num);
		map.set(num, groups.length - 1);
	}

	for (let i = 0; i < nums.length; i++) {
		nums[i] = groups[map.get(nums[i])].pop();
	}

	return nums;
};
