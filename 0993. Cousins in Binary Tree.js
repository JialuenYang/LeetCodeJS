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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
	const xInfo = depthOfNode(root, null, x, 0);
	const yInfo = depthOfNode(root, null, y, 0);
	return xInfo[0] == yInfo[0] && xInfo[1] !== yInfo[1];
};

const depthOfNode = (node, parent, val, depth) => {
	if (!node) {
		return null;
	}
	if (node.val == val) {
		return [depth, parent];
	}
	return (
		depthOfNode(node.left, node, val, depth + 1) ||
		depthOfNode(node.right, node, val, depth + 1)
	);
};
