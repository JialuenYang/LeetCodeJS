/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// Start filling nums1 from right to left
	let resultIndex = nums1.length - 1;
	let i1 = m - 1;
	let i2 = n - 1;
	while (resultIndex >= 0) {
		// If all of nums2 have been used, then nums1 is complete. Becase the beginning of nums1 won't have to move.
		if (i2 < 0) {
			break;
		}
		if (nums1[i1] >= nums2[i2]) {
			nums1[resultIndex] = nums1[i1];
			i1--;
		} else {
			nums1[resultIndex] = nums2[i2];
			i2--;
		}
		resultIndex--;
	}
};
