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
var isUnivalTree = function (root) {
	return recursion(root, root.val);
};

const recursion = (root, val) => {
	if (root === null) {
		return true;
	}
	return (
		root.val == val && recursion(root.left, val) && recursion(root.right, val)
	);
};
