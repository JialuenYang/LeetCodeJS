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
var minDepth = function (root) {
	// Make sure to use BFS instead of DFS
	// I'm keeping track of all children of the same depth in an array
	if (root === null) {
		return 0;
	}
	let depth = 0;
	let nodes = [root];
	while (1) {
		const arr = [];
		depth++;
		for (const node of nodes) {
			if (node.left === null && node.right === null) {
				return depth;
			}
			if (node.left) {
				arr.push(node.left);
			}
			if (node.right) {
				arr.push(node.right);
			}
		}
		nodes = arr;
	}
};
