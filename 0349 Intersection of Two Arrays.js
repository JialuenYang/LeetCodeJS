/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	// Might be tempted to turn nums1 into a set and then loop through nums2 to check for intersection.
	// That also works, but using two sets is just more elegant.
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	return [...set1].filter((num) => set2.has(num));
};
