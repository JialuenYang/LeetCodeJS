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
var goodNodes = function (root) {
	let count = 0;
	const recursion = (node, maxVal) => {
		if (node.val >= maxVal) {
			count++;
		}
		if (node.left) {
			recursion(node.left, Math.max(node.val, maxVal));
		}
		if (node.right) {
			recursion(node.right, Math.max(node.val, maxVal));
		}
	};
	recursion(root, root.val);
	return count;
};
