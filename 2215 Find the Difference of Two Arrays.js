/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	// Turn arrays into sets to get rid of duplicates.
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	// Turn sets into arrays and then filter for the numbers not in the other set.
	const arr1 = [...set1].filter((n) => !set2.has(n));
	const arr2 = [...set2].filter((n) => !set1.has(n));
	return [arr1, arr2];
};
