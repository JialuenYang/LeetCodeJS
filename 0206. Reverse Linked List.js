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
var reverseList = function (head) {
	// Use an array to hold the values
	const arr = [];
	let temp = head;
	while (temp) {
		arr.push(temp.val);
		temp = temp.next;
	}
	temp = head;
	let i = arr.length - 1;
	while (temp) {
		temp.val = arr[i];
		i--;
		temp = temp.next;
	}
	return head;
};
