/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	// Similar to Combination Sum but add a map to get the frequency of candidates.
	// The rest are pretty much the same as Combination Sum
	const map = new Map();
	for (const c of candidates) {
		if (map.has(c)) {
			map.set(c, map.get(c) + 1);
		} else {
			map.set(c, 1);
		}
	}

	const nums = [...map.keys()];
	const maxFreq = [...map.values()];

	const output = [];

	const recursion = (freq, index, sum) => {
		if (sum == target) {
			const arr = [];
			for (let i = 0; i < freq.length; i++) {
				while (freq[i] > 0) {
					arr.push(nums[i]);
					freq[i]--;
				}
			}
			output.push(arr);
			return;
		}
		if (sum > target || index >= nums.length) {
			return;
		}

		for (let i = 0; i <= maxFreq[index]; i++) {
			const newFreq = Array.from(freq);
			newFreq[index] = i;
			recursion(newFreq, index + 1, sum + nums[index] * i);
		}
	};
	recursion(Array.from(candidates).fill(0), 0, 0);
	return output;
};
