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
var inorderTraversal = function (root) {
	const output = [];
	const recursion = (node) => {
		if (!node) {
			return;
		}
		recursion(node.left);
		output.push(node.val);
		recursion(node.right);
	};
	recursion(root);
	return output;
};
