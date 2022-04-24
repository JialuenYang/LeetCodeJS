/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
	// Loop through the linked list, add up all the values to the next node's value, and connect the existing node with new value.
	// This uses O(n) time and space complexity.
	const output = head;
	// Acts as the index i for looping.
	let temp = head;
	// Acts as reference for previous node with new value.
	let prev = head;
	while (temp.next) {
		// If next node's value is 0, we want to keep this node in output.
		if (temp.next.val == 0) {
			prev.next = temp;
			prev = prev.next;
		} else {
			temp.next.val += temp.val;
		}
		temp = temp.next;
	}
	// The final zero is still connected. Must remove before returning output.
	prev.next = null;
	return output.next;
};
