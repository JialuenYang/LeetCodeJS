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
var sumEvenGrandparent = function (root) {
	let sum = 0;
	const recursion = (grandParent, parent, node) => {
		if (node === null) {
			return;
		}
		if (grandParent?.val % 2 == 0) {
			sum += node.val;
		}
		recursion(parent, node, node.left);
		recursion(parent, node, node.right);
	};
	recursion(null, null, root);
	return sum;
};
