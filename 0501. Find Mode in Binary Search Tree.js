/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
	// Could be better. Not O(1) space.
	const map = new Map();
	const recursion = (node) => {
		if (!node) {
			return;
		}
		if (map.has(node.val)) {
			map.set(node.val, map.get(node.val) + 1);
		} else {
			map.set(node.val, 1);
		}
		recursion(node.left);
		recursion(node.right);
	};
	recursion(root);
	let maxMode = 0;
	for (const val of map.values()) {
		maxMode = Math.max(val, maxMode);
	}
	const output = [];
	for (const [key, val] of map) {
		if (val == maxMode) {
			output.push(key);
		}
	}
	return output;
};
