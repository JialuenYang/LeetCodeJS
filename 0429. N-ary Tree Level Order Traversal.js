/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const output = [];
	let nodes = root ? [root] : [];
	while (nodes.length) {
		output.push(nodes.map((n) => n.val));
		let children = [];
		for (const node of nodes) {
			children = children.concat(node.children);
		}
		nodes = children;
	}
	return output;
};
