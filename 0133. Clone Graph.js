/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	// Edge case
	if (node === null) {
		return null;
	}

	// First pass: Create new nodes and save them in map where key = old nodes
	const arr = [node];
	const map = new Map();
	while (arr.length > 0) {
		const oldNode = arr.pop();
		if (!map.has(oldNode)) {
			map.set(oldNode, new Node(oldNode.val, oldNode.neighbors));
			for (const neighbor of oldNode.neighbors) {
				if (!map.has(neighbor)) {
					arr.push(neighbor);
				}
			}
		}
	}

	// Second pass: Do .neighbors
	for (const clone of map.values()) {
		clone.neighbors = clone.neighbors.map((n) => map.get(n));
	}

	// Return new clone node
	return map.get(node);
};
