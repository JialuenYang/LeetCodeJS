/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
	// Make sure the output is the root that's not null.
	const output = root1 ? root1 : root2;
	mergeNode(root1, root2);
	return output;
};

// Recursion. My solution moves all the values and/or nodes to root1.
const mergeNode = (root1, root2) => {
	// If both refer to the same node, I've moved root2 to root1 in the previous recursion.
	if (root1 === root2) {
		return;
	}
	if (root1 && root2) {
		root1.val += root2.val;
	}

	if (root1?.left === null && root2?.left) {
		root1.left = root2.left;
	}
	if (root1?.right === null && root2?.right) {
		root1.right = root2.right;
	}

	// Run recursion only if both nodes exist.
	if (root1?.left && root2?.left) {
		mergeTrees(root1.left, root2.left);
	}
	if (root1?.right && root2?.right) {
		mergeTrees(root1.right, root2.right);
	}
};
