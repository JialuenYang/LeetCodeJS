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

var reachLeaf = function (parentNode, str, output) {
	if (parentNode.left !== null) {
		reachLeaf(parentNode.left, `${str}->${parentNode.left.val}`, output);
	}
	if (parentNode.right !== null) {
		reachLeaf(parentNode.right, `${str}->${parentNode.right.val}`, output);
	}
	if (parentNode.left === null && parentNode.right === null) {
		output.push(str);
	}
};
