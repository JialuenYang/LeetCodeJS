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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
	let nodes = [root];
	let isEven = true;
	while (nodes.length > 0) {
		const children = [];
		for (let i = 0; i < nodes.length; i++) {
			if (isEven) {
				if (nodes[i].val % 2 == 0) {
					return false;
				}
				if (i != nodes.length - 1 && nodes[i].val >= nodes[i + 1].val) {
					return false;
				}
			} else {
				if (nodes[i].val % 2 == 1) {
					return false;
				}
				if (i != nodes.length - 1 && nodes[i].val <= nodes[i + 1].val) {
					return false;
				}
			}
			if (nodes[i].left) {
				children.push(nodes[i].left);
			}
			if (nodes[i].right) {
				children.push(nodes[i].right);
			}
		}
		isEven = !isEven;
		nodes = children;
	}

	return true;
};
