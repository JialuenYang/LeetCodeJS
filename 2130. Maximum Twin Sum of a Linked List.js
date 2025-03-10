/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
	/**
	 * Reverse the first half of the linked list while doing fast node to reach the end.
	 * When the end is reached, the slow node is at half way point.
	 * Then just iterate over the two nodes in the middle and get max sum.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	// Reverse the first half of linked list while doing fast node to reach the end
	let fast = head;
	let newNext = null;
	while (fast) {
		fast = fast?.next?.next;

		const temp = head.next;
		head.next = newNext;
		newNext = head;
		head = temp;
	}

	let twin1 = newNext; // Node index n/2 - 1
	let twin2 = head; // Node index n/2
	let maxSum = 0;

	while (twin2) {
		maxSum = Math.max(maxSum, twin1.val + twin2.val);
		twin1 = twin1.next;
		twin2 = twin2.next;
	}

	return maxSum;
};
