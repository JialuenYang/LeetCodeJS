/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
	if (!head) {
		return null;
	}
	const nums = [];
	while (head) {
		nums.push(head.val);
		head = head.next;
	}
	const root = new TreeNode();
	recursion(nums, root, 0, nums.length - 1);
	return root;
};

const recursion = (nums, node, left, right) => {
	const mid = Math.floor((right - left) / 2) + left;
	node.val = nums[mid];
	if (right > mid) {
		node.right = new TreeNode();
		recursion(nums, node.right, mid + 1, right);
	}
	if (left < mid) {
		node.left = new TreeNode();
		recursion(nums, node.left, left, mid - 1);
	}
};
