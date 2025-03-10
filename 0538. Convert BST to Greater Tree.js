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
var convertBST = function (root) {
	/**
	 * No need to find the biggest node. Simply keep track of a sum  while doing reverse inorder traversal.
	 */
	let curVal = 0;

	const recursion = (node) => {
		if (!node) {
			return;
		}
		recursion(node.right);
		curVal += node.val;
		node.val = curVal;
		recursion(node.left);
	};

	recursion(root);
	return root;
};
