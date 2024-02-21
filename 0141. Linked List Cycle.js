/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	// Floyd’s Cycle-Finding Algorithm
	if (!head) {
		return false;
	}

	let head1 = head.next;
	let head2 = head.next?.next;

	while (true) {
		if (!head2) {
			return false;
		}
		if (head1 === head2) {
			return true;
		}
		head1 = head1.next;
		head2 = head2.next?.next;
	}
};
