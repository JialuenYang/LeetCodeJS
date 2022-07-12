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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
	if (depth == 1) {
		return new TreeNode(val, root, null);
	}
	addAtDepth(root, val, 2, depth);
	return root;
};

const addAtDepth = (node, val, currentDepth, targetDepth) => {
	if (!node) {
		return;
	}
	if (currentDepth == targetDepth) {
		node.left = new TreeNode(val, node.left, null);
		node.right = new TreeNode(val, null, node.right);
	} else if (currentDepth - 1 == targetDepth) {
		if (!node.left) {
			node.left = new TreeNode(val, node.left, null);
		}
		if (!node.right) {
			node.right = new TreeNode(val, null, node.right);
		}
	} else {
		addAtDepth(node.left, val, currentDepth + 1, targetDepth);
		addAtDepth(node.right, val, currentDepth + 1, targetDepth);
	}
};
