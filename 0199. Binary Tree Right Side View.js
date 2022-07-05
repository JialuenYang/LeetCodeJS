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
 * @return {number[]}
 */
var rightSideView = function (root) {
	const output = [];
	let nodes = root ? [root] : [];
	while (nodes.length > 0) {
		// Get the last node, which is the right most one.
		output.push(nodes[nodes.length - 1].val);
		const children = [];
		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].left) {
				children.push(nodes[i].left);
			}
			if (nodes[i].right) {
				children.push(nodes[i].right);
			}
		}
		nodes = children;
	}
	return output;
};
