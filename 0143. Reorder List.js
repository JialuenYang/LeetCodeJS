/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	// Turn linked list into array
	const arr = [];
	while (head) {
		arr.push(head);
		head = head.next;
	}
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		arr[i].next = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i].next = arr[i + 1];
	}
	if (arr.length % 2 == 0) {
		// Even. First node of right half is the last node.
		arr[arr.length / 2].next = null;
	} else {
		// Odd. Middle node is the last node.
		arr[(arr.length - 1) / 2].next = null;
	}
};
