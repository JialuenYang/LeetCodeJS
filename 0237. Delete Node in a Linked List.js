/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
	// We are basically just shifting the values to the left and removing the last node
	while (node.next) {
		node.val = node.next.val;
		if (!node.next.next) {
			node.next = null;
		} else {
			node = node.next;
		}
	}
};
