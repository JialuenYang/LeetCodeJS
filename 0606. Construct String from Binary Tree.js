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
 * @return {string}
 */
var tree2str = function (root) {
	let left = root.left ? `(${tree2str(root.left)})` : ``;
	const right = root.right ? `(${tree2str(root.right)})` : ``;
	// If only left node doesn't exist, we want the empty paranthesis for the 1 to 1 relationship.
	if (!root.left && root.right) {
		left = `()`;
	}
	return `${root.val}${left}${right}`;
};
