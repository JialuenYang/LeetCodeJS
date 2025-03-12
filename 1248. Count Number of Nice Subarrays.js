/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
	/**
	 * Two pointers method without extra space.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */

	// Set odd numbers to 1 and even to 0.
	for (let i = 0; i < nums.length; i++) {
		nums[i] = nums[i] % 2 == 1 ? 1 : 0;
	}

	let j = 0;
	let leftEvenCount = 0;
	let oddCount = 0;
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 1) {
			oddCount++;
			if (oddCount >= k) {
				// Get the count of even numbers on the left of first odd number
				const start = j;
				while (nums[j] == 0) {
					j++;
				}
				j++;
				leftEvenCount = j - start;
				total += leftEvenCount;
			}
		} else {
			// Add the count of even numbers on left of first odd to total. Do it each time there's an even number on the right of final odd.
			if (oddCount >= k) {
				total += leftEvenCount;
			}
		}
	}

	return total;
};
