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
var increasingBST = function (root) {
	const sortedArr = [];
	postOrder(root, sortedArr);
	let temp = new TreeNode();
	const head = temp;
	for (const num of sortedArr) {
		temp.right = new TreeNode(num);
		temp = temp.right;
	}
	return head.right;
};

const postOrder = (node, arr) => {
	if (!node) {
		return;
	}
	postOrder(node.left, arr);
	arr.push(node.val);
	postOrder(node.right, arr);
};
