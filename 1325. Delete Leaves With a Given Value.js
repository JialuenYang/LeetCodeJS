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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
	// Use DFS to reach target leaf nodes, then mark them for deletion by returning true to parent nodes.
	return removeAllLeafNodes(root, target) ? null : root;
};

const removeAllLeafNodes = (node, target) => {
	if (!node) {
		return true;
	}
	const shouldRemoveLeft = removeAllLeafNodes(node.left, target);
	const shouldRemoveRight = removeAllLeafNodes(node.right, target);
	if (shouldRemoveLeft) {
		node.left = null;
	}
	if (shouldRemoveRight) {
		node.right = null;
	}
	if (node.val == target && shouldRemoveLeft && shouldRemoveRight) {
		return true;
	}
	return false;
};
