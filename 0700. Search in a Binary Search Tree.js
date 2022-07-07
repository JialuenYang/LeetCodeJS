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
var searchBST = function (root, val) {
	let temp = root;
	while (1) {
		if (!temp) {
			return null;
		}
		if (temp.val == val) {
			return temp;
		}
		if (val < temp.val) {
			temp = temp.left;
		} else {
			temp = temp.right;
		}
	}
};
