/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	const output = [];
	preorderNTree(root, output);
	return output;
};

const preorderNTree = (node, arr) => {
	if (!node) {
		return;
	}
	arr.push(node.val);
	for (const child of node.children) {
		preorderNTree(child, arr);
	}
};
