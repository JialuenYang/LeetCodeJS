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
var findBottomLeftValue = function (root) {
	let level = -1;
	let output = 0;
	const recursion = (node, depth) => {
		if (!node) {
			return;
		}
		if (!node.left && !node.right && depth > level) {
			output = node.val;
		}
		level = Math.max(level, depth);
		recursion(node.left, depth + 1);
		recursion(node.right, depth + 1);
	};
	recursion(root, 0);
	return output;
};
