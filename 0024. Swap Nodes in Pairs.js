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
var swapPairs = function (head) {
	if (!head || !head.next) {
		return head;
	}

	const newHead = head.next;

	let prev = null;

	while (head?.next) {
		const first = head;
		const second = head.next;

		first.next = second.next;
		second.next = first;

		if (prev) {
			prev.next = second;
		}

		prev = first;
		head = first.next;
	}

	return newHead;
};
