/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	// Keep track of numbers and degrees
	const map = new Map();
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	// Find highest degree
	let degree = 0;
	for (const value of map.values()) {
		degree = Math.max(value, degree);
	}

	// If there are multiple highest degrees, keep track of the numbers in an array.
	const elements = [];
	for (const [key, value] of map) {
		if (value == degree) {
			elements.push(key);
		}
	}

	// Loop through the array to see which number has the shortest contiguous subarray.
	let shortestLength = Infinity;
	for (const element of elements) {
		let index = 0;
		while (nums[index] != element) {
			index++;
		}
		const leftIndex = index;
		index = nums.length - 1;
		while (nums[index] != element) {
			index--;
		}
		const rightIndex = index;
		shortestLength = Math.min(shortestLength, rightIndex - leftIndex + 1);
	}
	return shortestLength;
};
