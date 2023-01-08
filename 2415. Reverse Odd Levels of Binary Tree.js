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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
	let level = 0;
	let nodes = [root];
	while (nodes.length) {
		// Odd level. Reverse values.
		if (level % 2 == 1) {
			const values = nodes.map((n) => n.val).reverse();
			for (let i = 0; i < nodes.length; i++) {
				nodes[i].val = values[i];
			}
		}
		// Get next level of ndoes
		const nextNodes = [];
		for (const n of nodes) {
			if (n.left) {
				nextNodes.push(n.left);
			}
			if (n.right) {
				nextNodes.push(n.right);
			}
		}
		nodes = nextNodes;
		level++;
	}
	return root;
};
