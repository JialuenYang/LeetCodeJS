/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	// Edge case: No nodes
	if (head === null) {
		return null;
	}

	// First pass: Create new nodes and save them in map where [key = old node, val = new clone node]
	const map = new Map();
	const oldHead = head;
	while (head) {
		map.set(head, new Node(head.val, head.next, head.random));
		head = head.next;
	}

	// Second pass: Do the .next and .random
	for (const node of map.values()) {
		if (node.next !== null) {
			node.next = map.get(node.next);
		}
		if (node.random !== null) {
			node.random = map.get(node.random);
		}
	}

	// Return copy's head
	return map.get(oldHead);
};
