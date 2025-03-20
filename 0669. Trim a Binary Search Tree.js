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
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
	/**
	 * DFS
	 * Time complexity: O(n)
	 * Space complexity: O(n) if counting stack frame
	 */
	if (!root) {
		return null;
	}
	if (high < root.val) {
		return trimBST(root.left, low, high);
	}
	if (root.val < low) {
		return trimBST(root.right, low, high);
	}

	root.left = trimBST(root.left, low, root.val);
	root.right = trimBST(root.right, root.val, high);

	return root;
};
