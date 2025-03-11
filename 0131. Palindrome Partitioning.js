/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	/**
	 * Time complexity: O(n*2^n)
	 * Space complexity: O(n*2^n) if including output, O(n^2) if not
	 *
	 * Explaining time complexity:
	 * O(2^n) for partitioning. Worst case is "a" repeating where every substring is a palindrome.
	 * O(n) for each substring call, which you have to do each time you partition, so it's O(n*2^n)
	 */

	// Keeps track of where each palindrome begins and ends
	const arr = new Array(s.length).fill().map(() => new Array());
	const expandMiddle = (l, r) => {
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			arr[l].push(r);
			l--;
			r++;
		}
	};
	for (let i = 0; i < s.length; i++) {
		expandMiddle(i, i);
		expandMiddle(i, i + 1);
	}

	// Backtracking that finds all partitions
	const output = [];
	const recursion = (index, partition) => {
		if (index >= s.length) {
			return;
		}
		for (const j of arr[index]) {
			partition.push(s.substring(index, j + 1));
			if (j == s.length - 1) {
				output.push([...partition]);
			}
			recursion(j + 1, partition);
			partition.pop();
		}
	};
	recursion(0, []);
	return output;
};
