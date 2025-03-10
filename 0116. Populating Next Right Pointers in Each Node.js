/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
	/**
	 * It's easier to see the solution by drawing the binary tree and drawing the next edges
	 * Time complexity: O(n)
	 * Space complexity: O(log(n))
	 */
	const dfs = (node, next) => {
		if (!node) {
			return;
		}

		node.next = next;
		dfs(node.left, node.right); // Left and right nodes share the same parent so left node will point to right node
		dfs(node.right, next?.left || null); // Right node points to parent.next.left
	};
	dfs(root, null);
	return root;
};
