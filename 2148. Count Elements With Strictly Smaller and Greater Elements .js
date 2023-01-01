/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
	// No need to care about the middle numbers. We only need the numbers of largest num and smallest num.
	let smallest = Infinity;
	let largest = -Infinity;
	for (const num of nums) {
		smallest = Math.min(smallest, num);
		largest = Math.max(largest, num);
	}
	let smallestCount = 0;
	let largestCount = 0;
	for (const num of nums) {
		if (num == smallest) {
			smallestCount++;
		}
		if (num == largest) {
			largestCount++;
		}
	}
	// There's only one unique number in the array
	if (smallest == largest) {
		return 0;
	}
	return nums.length - smallestCount - largestCount;
};
