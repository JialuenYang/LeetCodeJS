/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	let leftHead = null;
	let leftStart = null;
	let rightHead = null;
	let rightStart = null;
	while (head) {
		if (head.val < x) {
			if (leftHead) {
				leftHead.next = head;
				leftHead = leftHead.next;
			} else {
				leftHead = head;
				leftStart = leftHead;
			}
		} else {
			if (rightHead) {
				rightHead.next = head;
				rightHead = rightHead.next;
			} else {
				rightHead = head;
				rightStart = rightHead;
			}
		}
		head = head.next;
	}
	// Remove right cycle
	if (rightHead) {
		rightHead.next = null;
	}
	// Concat left and right lists if left exists
	if (leftHead) {
		leftHead.next = rightStart;
		return leftStart;
	} else {
		// Only right exists
		return rightStart;
	}
};
