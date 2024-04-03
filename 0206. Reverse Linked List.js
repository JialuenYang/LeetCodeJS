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
var reverseList = function (head) {
	// Base case of <= 1
	if (!head || !head.next) {
		return head;
	}

	// Keep track of 2 nodes at a time
	let n1 = head; // Second rightmost node
	let n2 = n1.next; // Rightmost node
	n1.next = null;
	while (n2.next) {
		const temp = n2.next;
		n2.next = n1;
		n1 = n2;
		n2 = temp;
	}
	n2.next = n1; // n2 is now the rightmost node, but its next node needs to be set.
	return n2;
};
