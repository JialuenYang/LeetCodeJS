/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
	// Use a map to populate the nodes
	const map = new Map();
	// Use a set to keep track of the root
	const set = new Set();

	for (const d of descriptions) {
		// For finding root later
		set.add(d[0]);

		// Create child node if it doesn't exist
		if (!map.has(d[1])) {
			map.set(d[1], new TreeNode(d[1]));
		}

		// Create parent node if it doesn't exist
		if (!map.has(d[0])) {
			if (d[2]) {
				map.set(d[0], new TreeNode(d[0], map.get(d[1]), null));
			} else {
				map.set(d[0], new TreeNode(d[0], null, map.get(d[1])));
			}
		} else {
			// Parent node exists, just need to link the child
			if (d[2]) {
				map.get(d[0]).left = map.get(d[1]);
			} else {
				map.get(d[0]).right = map.get(d[1]);
			}
		}
	}
	// Find root
	for (const d of descriptions) {
		set.delete(d[1]);
	}
	// Return root node
	return map.get([...set][0]);
};
