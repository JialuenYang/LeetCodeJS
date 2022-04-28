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
var swapNodes = function (head, k) {
	// This solution is not the fastest.
	const arr = [];
	let temp = head;
	while (temp) {
		arr.push(temp.val);
		temp = temp.next;
	}

	const tempVal = arr[k - 1];
	arr[k - 1] = arr[arr.length - k];
	arr[arr.length - k] = tempVal;

	let i = 0;
	temp = head;
	while (temp) {
		temp.val = arr[i];
		temp = temp.next;
		i++;
	}
	return head;
};
