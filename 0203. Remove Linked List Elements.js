/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	while (head?.val == val) {
		head = head.next;
	}

	if (!head || !head.next) {
		return head;
	}

	const newHead = head;

	let prev = head;
	let curr = head.next;
	while (curr) {
		while (curr?.val == val) {
			curr = curr.next;
			prev.next = curr;
		}
		if (!curr) {
			break;
		}
		prev = prev.next;
		curr = curr.next;
	}

	return newHead;
};
