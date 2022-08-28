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
var averageOfSubtree = function (root) {
	let output = 0;
	const nullNode = {
		nodes: 0,
		sum: 0,
	};
	const recursion = (node) => {
		const leftNode = node.left ? recursion(node.left) : nullNode;
		const rightNode = node.right ? recursion(node.right) : nullNode;
		const nodes = leftNode.nodes + rightNode.nodes + 1;
		const sum = leftNode.sum + rightNode.sum + node.val;
		if (node.val == Math.floor(sum / nodes)) {
			output++;
		}
		return {
			nodes,
			sum,
		};
	};
	recursion(root);
	return output;
};
