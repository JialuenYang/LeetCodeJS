/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
	if (cloned === null) {
		return;
	}
	// Checks the reference of original and target. This ensures we get the correct node even when there are repeated values.
	if (original === target) {
		return cloned;
	}
	// Recursion for left and right nodes
	return (
		getTargetCopy(original.left, cloned.left, target) ||
		getTargetCopy(original.right, cloned.right, target)
	);
};
