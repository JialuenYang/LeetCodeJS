/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n)
	 */
	const freq = new Map();
	let maxSum = 0;

	const recursion = (node) => {
		if (!node) {
			return 0;
		}
		const sum = node.val + recursion(node.left) + recursion(node.right);
		freq.set(sum, (freq.get(sum) || 0) + 1);
		maxSum = Math.max(maxSum, freq.get(sum));
		return sum;
	};
	recursion(root);

	const output = [];
	for (const [key, val] of freq.entries()) {
		if (val == maxSum) {
			output.push(key);
		}
	}
	return output;
};
