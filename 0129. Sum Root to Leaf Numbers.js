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
var sumNumbers = function (root) {
	let sum = 0;
	const setVal = (node) => {
		if (!node.left && !node.right) {
			sum += node.val;
			return;
		}
		if (node.left) {
			node.left.val += node.val * 10;
			setVal(node.left);
		}
		if (node.right) {
			node.right.val += node.val * 10;
			setVal(node.right);
		}
	};
	setVal(root);
	return sum;
};
