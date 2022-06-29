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
 * @return {boolean}
 */
var isSymmetric = function (root) {
	return recursion(root.left, root.right);
};

const recursion = (leftNode, rightNode) => {
	if (leftNode === null && rightNode === null) {
		return true;
	}
	if (
		(leftNode !== null && rightNode === null) ||
		(leftNode === null && rightNode !== null)
	) {
		return false;
	}
	return (
		leftNode.val == rightNode.val &&
		recursion(leftNode.left, rightNode.right) &&
		recursion(leftNode.right, rightNode.left)
	);
};
