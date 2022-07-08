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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
	const nodes = [];
	findNodes(root, subRoot.val, nodes);
	for (const node of nodes) {
		if (isSameTree(node, subRoot)) {
			return true;
		}
	}
	return false;
};

const findNodes = (node, val, arr) => {
	if (!node) {
		return;
	}
	if (node.val == val) {
		arr.push(node);
	}
	findNodes(node.left, val, arr);
	findNodes(node.right, val, arr);
};

const isSameTree = (node1, node2) => {
	if (!node1 && !node2) {
		return true;
	}
	if ((!node1 && node2) || (node1 && !node2)) {
		return false;
	}
	return (
		node1.val == node2.val &&
		isSameTree(node1.left, node2.left) &&
		isSameTree(node1.right, node2.right)
	);
};
