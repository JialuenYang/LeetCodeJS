/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
	const output = [];
	postOrderNTree(root, output);
	return output;
};

const postOrderNTree = (node, arr) => {
	if (!node) {
		return;
	}
	for (const child of node.children) {
		postOrderNTree(child, arr);
	}
	arr.push(node.val);
};
