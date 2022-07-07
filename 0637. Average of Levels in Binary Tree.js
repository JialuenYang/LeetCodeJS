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
var averageOfLevels = function (root) {
	const output = [];
	let nodes = [root];
	while (nodes.length) {
		const children = [];
		let sum = 0;
		for (const node of nodes) {
			sum += node.val;
			if (node.left) {
				children.push(node.left);
			}
			if (node.right) {
				children.push(node.right);
			}
		}
		output.push(sum / nodes.length);
		nodes = children;
	}
	return output;
};
