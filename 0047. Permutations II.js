/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	// Sort first for duplicate checking
	nums.sort((a, b) => a - b);
	const output = [];

	const permute = (current, used) => {
		if (current.length == nums.length) {
			output.push(current);
			return;
		}

		for (let i = 0; i < used.length; i++) {
			// Only need to add this to check for duplicates
			// If the same number has been used before, we skip this duplicate.
			if (used[i - 1] && nums[i] == nums[i - 1]) {
				continue;
			}

			if (!used[i]) {
				const newCurrent = Array.from(current);
				newCurrent.push(nums[i]);
				const newUsed = Array.from(used);
				newUsed[i] = true;
				permute(newCurrent, newUsed);
			}
		}
	};
	permute([], Array.from(nums).fill(false));
	return output;
};
