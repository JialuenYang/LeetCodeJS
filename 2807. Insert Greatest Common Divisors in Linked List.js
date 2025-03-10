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
var insertGreatestCommonDivisors = function (head) {
	/**
	 * Time complexity: O(n * log(min(a,b)))
	 * Space complexity: O(1)
	 */

	// Euclidean algorithm to get GCD
	const getGCD = (n1, n2) => {
		while (n2 != 0) {
			const temp = n2;
			n2 = n1 % n2;
			n1 = temp;
		}
		return n1;
	};

	const output = head;

	while (head?.next) {
		const val = getGCD(head.val, head.next.val);
		const node = new ListNode(val, head.next);
		head.next = node;
		head = node.next;
	}

	return output;
};
