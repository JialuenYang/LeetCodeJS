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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	// In-order traversal
	let answer;

	const recursive = (parent) => {
		if (!parent) {
			return;
		}

		recursive(parent.left);
		k--;
		if (k == 0) {
			answer = parent.val;
			return;
		}
		recursive(parent.right);
	};

	recursive(root);
	return answer;
};
