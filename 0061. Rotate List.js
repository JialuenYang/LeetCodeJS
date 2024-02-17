/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head) {
		return null;
	}

	const originalHead = head;
	let count = 0;

	while (head) {
		count++;
		head = head.next;
	}

	k = k % count;

	if (k == 0) {
		return originalHead;
	}

	const newHeadIndex = count - k;
	const newEndIndex = newHeadIndex - 1;
	let newHeadNode = null;
	let newEndNode = null;
	let oldEndNode = null;

	head = originalHead;
	let index = 0;
	while (head) {
		if (index == newHeadIndex) {
			newHeadNode = head;
		}
		if (index == newEndIndex) {
			newEndNode = head;
		}
		if (!head.next) {
			oldEndNode = head;
		}

		head = head.next;
		index++;
	}

	newEndNode.next = null;
	oldEndNode.next = originalHead;
	return newHeadNode;
};
