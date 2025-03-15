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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
	/**
	 * Time complexity: O(n) where n = number of nodes
	 * Space complexity: O(n + m) where stack frame will be at most height of unbalanced tree O(n) and the set is O(m) where m = to_delete.length.
	 * LeetCode editorial wrote O(n) and their reasoning is that m <= n, but the problem doesn't state that.
	 * It's possible for to_delete to have node values that do not exist in n nodes.
	 */
	const set = new Set(to_delete);
	const forest = [];

	const recursion = (node, isParentDeleted) => {
		if (!node) {
			return;
		}
		if (set.has(node.val)) {
			// This node is deleted.
			recursion(node.left, true);
			recursion(node.right, true);
		} else {
			// This node is not deleted.
			if (isParentDeleted) {
				forest.push(node);
			}

			recursion(node.left, false);
			recursion(node.right, false);

			if (set.has(node.left?.val)) {
				node.left = null;
			}
			if (set.has(node.right?.val)) {
				node.right = null;
			}
		}
	};
	recursion(root, true);
	return forest;
};
