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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
	return recursion(root) ? root : null;
};

const recursion = (node) => {
	if (!node) {
		return false;
	}
	if (!recursion(node.left)) {
		node.left = null;
	}
	if (!recursion(node.right)) {
		node.right = null;
	}
	return node.val == 1 || node.left || node.right;
};
