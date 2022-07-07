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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	const output = [];
	let nodes = root ? [root] : [];
	while (nodes.length) {
		const children = [];
		const levelVals = [];
		for (const node of nodes) {
			levelVals.push(node.val);
			if (node.left) {
				children.push(node.left);
			}
			if (node.right) {
				children.push(node.right);
			}
		}
		output.push(levelVals);
		nodes = children;
	}
	return output.reverse();
};
