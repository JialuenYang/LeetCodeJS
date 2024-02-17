/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	const originalHead = head;
	let prevNode = null;
	let count = 0;

	while (head) {
		count++;
		if (count == n + 1) {
			prevNode = originalHead;
		} else if (count > n) {
			prevNode = prevNode.next;
		}
		head = head.next;
	}

	// Case: Remove first node
	if (!prevNode) {
		return originalHead.next;
	}

	prevNode.next = prevNode.next.next;
	return originalHead;
};
