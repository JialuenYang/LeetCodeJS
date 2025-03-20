/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
	/**
	 * Just need to realize that the answer is nums1 xor nums2.length times XOR nums2 xor nums1.length times.
	 * And since a number xor itself is zero, only xor if it's odd times.
	 * Time complexity: O(n + m)
	 * Space complexity: O(1)
	 */
	let xor = 0;
	if (nums2.length % 2 == 1) {
		for (const num of nums1) {
			xor ^= num;
		}
	}
	if (nums1.length % 2 == 1) {
		for (const num of nums2) {
			xor ^= num;
		}
	}
	return xor;
};
