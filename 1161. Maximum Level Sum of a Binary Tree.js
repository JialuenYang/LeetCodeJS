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
var maxLevelSum = function (root) {
	const levelsSum = [];

	let nodes = [root];
	while (nodes.length > 0) {
		let sum = 0;
		const children = [];
		for (const node of nodes) {
			sum += node.val;
			if (node.left) {
				children.push(node.left);
			}
			if (node.right) {
				children.push(node.right);
			}
		}
		levelsSum.push(sum);
		nodes = children;
	}

	// Find max level sum
	let max = -Infinity;
	let output;
	for (let i = levelsSum.length - 1; i >= 0; i--) {
		if (levelsSum[i] >= max) {
			max = levelsSum[i];
			output = i + 1;
		}
	}
	return output;
};
