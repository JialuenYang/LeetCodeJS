/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const output = [];

	// Loop from 0 to candidates.length - 1
	// Keep adding different counts of the current candidate number
	const recursion = (freq, index, sum) => {
		if (sum == target) {
			const arr = [];
			for (let i = 0; i < freq.length; i++) {
				while (freq[i] > 0) {
					arr.push(candidates[i]);
					freq[i]--;
				}
			}
			output.push(arr);
			return;
		}
		if (sum > target || index >= candidates.length) {
			return;
		}

		for (let i = 0; sum + candidates[index] * i <= target; i++) {
			const newFreq = Array.from(freq);
			newFreq[index] = i;
			recursion(newFreq, index + 1, sum + candidates[index] * i);
		}
	};

	recursion(Array.from(candidates).fill(0), 0, 0);
	return output;
};
