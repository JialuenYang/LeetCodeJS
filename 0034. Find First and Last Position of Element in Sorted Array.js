/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	const notFound = [-1, -1];

	// Edge cases where nums array has 0 to 1 element
	if (nums.length == 0) {
		return notFound;
	}
	if (nums.length == 1) {
		if (nums[0] == target) {
			return [0, 0];
		} else {
			return notFound;
		}
	}

	// Binary search to find target-0.5 and target+0.5
	const binarySearch = (l, r, num) => {
		if (r - l == 1) {
			// Both are target
			if (nums[l] == target && nums[r] == target) {
				return num < target ? l : r;
			}

			// Only left is target
			else if (nums[l] == target) {
				return l;
			}

			// Only right is target
			else if (nums[r] == target) {
				return r;
			}

			// Neither are target
			else {
				return -1;
			}
		}

		const m = l + Math.floor((r - l) / 2);

		if (nums[m] < num) {
			return binarySearch(m, r, num);
		} else {
			return binarySearch(l, m, num);
		}
	};

	const index1 = binarySearch(0, nums.length - 1, target - 0.5);
	const index2 = binarySearch(0, nums.length - 1, target + 0.5);

	// Return output
	return [index1, index2];
};
