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
var removeNodes = function (head) {
	const stack = [];
	while (head) {
		while (stack.length && stack[stack.length - 1].val < head.val) {
			stack.pop();
		}
		if (stack.length) {
			stack[stack.length - 1].next = head;
		}
		stack.push(head);
		head = head.next;
	}
	return stack[0];
};
