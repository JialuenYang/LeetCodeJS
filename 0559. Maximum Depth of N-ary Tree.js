/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
	// Recursion. Very similar to the max depth of binary tree problem.
	if (root === null) {
		return 0;
	}
	const children = root.children.map((e) => maxDepth(e));
	if (children.length == 0) {
		return 1;
	}
	return children.reduce((a, b) => Math.max(a, b), -Infinity) + 1;
};
