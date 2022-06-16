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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	if (root === null) {
		return 0;
	}
	const rootVal = low <= root.val && root.val <= high ? root.val : 0;

	// Since this is a binary search tree, we can avoid searching nodes that obviousy don't have values within our range
	if (root.val <= low) {
		return rootVal + rangeSumBST(root.right, low, high);
	}
	if (root.val >= high) {
		return rootVal + rangeSumBST(root.left, low, high);
	}

	return (
		rootVal +
		rangeSumBST(root.right, low, high) +
		rangeSumBST(root.left, low, high)
	);
};
