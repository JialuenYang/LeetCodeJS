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
 * @return {number}
 */
var longestZigZag = function (root) {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(n) if counting stack frame
	 */
	let longest = 0;
	const recursion = (node, direction, count) => {
		if (!node) {
			return;
		}

		longest = Math.max(longest, count);
		count++;

		if (node === root) {
			recursion(node.left, false, 1);
			recursion(node.right, true, 1);
			return;
		}

		if (!direction) {
			recursion(node.left, false, 1);
			recursion(node.right, true, count);
		} else {
			recursion(node.left, false, count);
			recursion(node.right, true, 1);
		}
	};

	recursion(root, true, 0);

	return longest;
};
