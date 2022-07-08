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
var isValidBST = function (root) {
	// Send the range down the tree and check if the node.val is within that range.
	return isValid(root, -Infinity, Infinity);
};

const isValid = (node, low, high) => {
	if (!node) {
		return true;
	}
	return (
		low < node.val &&
		node.val < high &&
		isValid(node.left, low, node.val) &&
		isValid(node.right, node.val, high)
	);
};
