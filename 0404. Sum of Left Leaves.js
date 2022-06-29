// Method 1: Recursion within main function.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	let sum = 0;
	const recursion = (node) => {
		if (node === null) {
			return;
		}
		if (node.left !== null) {
			if (node.left.left === null && node.left.right === null) {
				sum += node.left.val;
			}
		}
		recursion(node.left);
		recursion(node.right);
	};
	recursion(root);
	return sum;
};

// Method 2: Main function is recursion.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	if (root === null) {
		return 0;
	}
	if (root.left !== null) {
		if (root.left.left === null && root.left.right === null) {
			// You've reached a left leaf, but don't forget about the right nodes.
			return root.left.val + sumOfLeftLeaves(root.right);
		}
	}
	return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
