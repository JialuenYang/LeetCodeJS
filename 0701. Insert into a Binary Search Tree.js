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
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
	// Using an iterative approach because it's simple enough
	if (root === null) {
		return new TreeNode(val);
	}
	let temp = root;
	while (1) {
		if (val < temp.val) {
			if (temp.left === null) {
				temp.left = new TreeNode(val);
				break;
			} else {
				temp = temp.left;
			}
		} else {
			if (temp.right === null) {
				temp.right = new TreeNode(val);
				break;
			} else {
				temp = temp.right;
			}
		}
	}
	return root;
};
