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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
	let children = [root];
	while (children.length) {
		const nodes = [];
		let sum = 0;
		for (const child of children) {
			if (child.left) {
				nodes.push(child.left);
			}
			if (child.right) {
				nodes.push(child.right);
			}
			sum += child.val;
		}
		children = nodes;
		if (nodes.length == 0) {
			return sum;
		}
	}
};
