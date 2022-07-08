/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// Since it's a BST, we just need to look for a node where smallerVal <= root.val <= biggerVal
	const biggerVal = Math.max(p.val, q.val);
	const smallerVal = Math.min(p.val, q.val);
	while (1) {
		if (smallerVal <= root.val && root.val <= biggerVal) {
			return root;
		}
		if (biggerVal < root.val) {
			root = root.left;
		} else if (root.val < smallerVal) {
			root = root.right;
		}
	}
};
