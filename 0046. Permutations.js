/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	// Remember that you need to keep track of the current array and the numbers you have already used.
	const output = [];

	const recursion = (current, used) => {
		if (current.length == nums.length) {
			output.push(current);
			return;
		}

		for (let i = 0; i < used.length; i++) {
			if (!used[i]) {
				const newCurrent = Array.from(current);
				newCurrent.push(nums[i]);
				const newUsed = Array.from(used);
				newUsed[i] = true;
				recursion(newCurrent, newUsed);
			}
		}
	};

	recursion([], Array.from(nums).fill(false));

	return output;
};
