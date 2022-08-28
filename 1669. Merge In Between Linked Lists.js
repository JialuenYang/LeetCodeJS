/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
	const start = list1;
	b++;
	a--;
	b -= a;
	while (a) {
		list1 = list1.next;
		a--;
	}
	const node1 = list1;
	while (b) {
		list1 = list1.next;
		b--;
	}
	node1.next = list2;
	while (list2.next) {
		list2 = list2.next;
	}
	list2.next = list1;
	return start;
};
