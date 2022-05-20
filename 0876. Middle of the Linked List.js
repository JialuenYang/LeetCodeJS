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
var middleNode = function (head) {
	let length = 0;
	let temp = head;
	while (temp) {
		length++;
		temp = temp.next;
	}
	length = Math.floor(length / 2);
	while (length > 0) {
		length--;
		head = head.next;
	}
	return head;
};
