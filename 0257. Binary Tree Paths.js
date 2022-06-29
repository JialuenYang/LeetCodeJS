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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	const output = [];
	reachLeaf(root, `${root.val}`, output);
	return output;
};

var reachLeaf = function (node, str, output) {
	if (node.left !== null) {
		reachLeaf(node.left, `${str}->${node.left.val}`, output);
	}
	if (node.right !== null) {
		reachLeaf(node.right, `${str}->${node.right.val}`, output);
	}
	if (node.left === null && node.right === null) {
		output.push(str);
	}
};
