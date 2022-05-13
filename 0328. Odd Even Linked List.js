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
var oddEvenList = function (head) {
	if (!head || !head.next?.next) {
		return head;
	}

	let odd = head;
	let even = head.next;
	const firstEven = head.next;

	// Make sure even and eve.next exist to continue
	while (even?.next) {
		odd.next = odd.next.next;
		even.next = even.next.next;
		odd = odd.next;
		even = even.next;
	}

	odd.next = firstEven;

	return head;
};
