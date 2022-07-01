// Sorted array to BST is from Problem 108

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
var balanceBST = function (root) {
	const sortedArray = [];
	BSTtoArray(root, sortedArray);
	const newRoot = new TreeNode();
	sortedArrToBST(newRoot, sortedArray, 0, sortedArray.length - 1);
	return newRoot;
};

const BSTtoArray = (node, arr) => {
	if (node === null) {
		return;
	}
	BSTtoArray(node.left, arr);
	arr.push(node.val);
	BSTtoArray(node.right, arr);
};

const sortedArrToBST = (node, arr, left, right) => {
	const mid = Math.floor((right - left) / 2) + left;
	node.val = arr[mid];
	if (right > mid) {
		node.right = new TreeNode();
		sortedArrToBST(node.right, arr, mid + 1, right);
	}
	if (left < mid) {
		node.left = new TreeNode();
		sortedArrToBST(node.left, arr, left, mid - 1);
	}
};
