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
var diameterOfBinaryTree = function (root) {
	// The key is realizing that the longest diameter can be attained by comparing the sum of left and right lengths
	let longest = 0;
	const recursion = (node) => {
		if (node === null) {
			return 0;
		}
		const leftLength = recursion(node.left);
		const rightLength = recursion(node.right);
		longest = Math.max(longest, leftLength + rightLength);
		return Math.max(leftLength, rightLength) + 1;
	};
	recursion(root);
	return longest;
};
