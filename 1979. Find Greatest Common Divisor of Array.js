/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
	let smallest = 1000;
	let largest = 1;
	for (const num of nums) {
		smallest = Math.min(smallest, num);
		largest = Math.max(largest, num);
	}
	// Euclidean algorithm
	let temp;
	while (smallest > 0) {
		temp = smallest;
		smallest = largest % smallest;
		largest = temp;
	}
	return largest;
};
