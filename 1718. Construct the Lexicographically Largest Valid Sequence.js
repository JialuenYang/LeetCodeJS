/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
	/**
	 * Backtracking
	 * Time complexity: O(n*n!) due to looping through used array in the n! calls.
	 * But realistically, the program ends much sooner due to not proceeding through all possible choices.
	 * LeetCode editorial and most user solutions have the wrong time complexity of O(n!).
	 * Space complexity: O(n)
	 */
	const output = new Array(2 * n - 1).fill(0);
	const used = new Array(n).fill(false);

	const backtrack = (index) => {
		while (index < output.length && output[index] != 0) {
			index++;
		}

		if (index >= output.length) {
			return true;
		}

		for (let i = used.length - 1; i >= 0; i--) {
			const num = i + 1;
			if (!used[i] && (num == 1 || output[index + num] == 0)) {
				output[index] = num;
				if (num > 1) {
					output[index + num] = num;
				}
				used[i] = true;

				if (backtrack(index + 1, used)) {
					return true;
				}

				output[index] = 0;
				if (num > 1) {
					output[index + num] = 0;
				}
				used[i] = false;
			}
		}

		return false;
	};

	backtrack(0);
	return output;
};
