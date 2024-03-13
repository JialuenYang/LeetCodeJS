/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
	// O(n^2) time complexity
	const map = new Map();
	for (const n1 of nums1) {
		for (const n2 of nums2) {
			const sum = n1 + n2;
			if (map.has(sum)) {
				map.set(sum, map.get(sum) + 1);
			} else {
				map.set(sum, 1);
			}
		}
	}

	let count = 0;
	for (const n3 of nums3) {
		for (const n4 of nums4) {
			const sum = n3 + n4;
			if (map.has(-sum)) {
				count += map.get(-sum);
			}
		}
	}
	return count;
};
