/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	if (left == right) {
		return head;
	}
	const headClone = head;
	let leftEnd = null;
	let rightStart = null;
	const arr = [];
	let index = 1;
	while (head) {
		if (index == left - 1) {
			leftEnd = head;
		} else if (index == right + 1) {
			rightStart = head;
		} else if (left <= index && index <= right) {
			arr.push(head);
		}
		head = head.next;
		index++;
	}

	if (leftEnd) {
		leftEnd.next = arr[arr.length - 1];
	}

	for (let i = arr.length - 1; i > 0; i--) {
		arr[i].next = arr[i - 1];
	}
	arr[0].next = rightStart;

	return left == 1 ? arr[arr.length - 1] : headClone;
};
