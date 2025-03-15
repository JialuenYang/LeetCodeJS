/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
	/**
	 * Time complexity: O(m + n) where m = nums.length, n = number of nodes
	 * Space complexity: O(m)
	 */
	const set = new Set(nums);

	const tempHead = new ListNode(0, head);
	let node = tempHead;
	while (node) {
		while (node.next && set.has(node.next.val)) {
			node.next = node.next.next;
		}
		node = node.next;
	}

	return tempHead.next;
};
