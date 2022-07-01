/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
	const root = new TreeNode();
	recursion(root, nums, 0, nums.length - 1);
	return root;
};

const recursion = (node, nums, left, right) => {
	let maxNumIndex = left; // Careful not to put 0 here since maxNum initialize as 0.
	let maxNum = 0;
	for (let i = left; i <= right; i++) {
		if (nums[i] > maxNum) {
			maxNum = nums[i];
			maxNumIndex = i;
		}
	}
	node.val = maxNum;
	if (maxNumIndex != left) {
		node.left = new TreeNode();
		recursion(node.left, nums, left, maxNumIndex - 1);
	}
	if (maxNumIndex != right) {
		node.right = new TreeNode();
		recursion(node.right, nums, maxNumIndex + 1, right);
	}
};
