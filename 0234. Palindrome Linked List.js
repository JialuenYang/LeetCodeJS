/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	if (!head.next) {
		return true;
	}

	// Use Floyd's algorithm to find the mid point. Alternative is to count the number of nodes and then loop a 2nd time to get the mid node.
	let slow = head;
	let fast = head;
	while (fast?.next?.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	const head2 = slow.next;

	// The hardest part: Reversing the second half of nodes.
	let cur = head2;
	let newPrev = head2.next;
	cur.next = null;
	while (newPrev) {
		const newPrevPrev = newPrev.next;
		newPrev.next = cur;
		cur = newPrev;
		newPrev = newPrevPrev;
	}

	// Comparison
	while (cur) {
		if (head.val != cur.val) {
			return false;
		}
		head = head.next;
		cur = cur.next;
	}

	return true;
};
