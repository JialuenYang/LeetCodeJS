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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
	/**
	 * Same question as 1123.
	 *
	 * Two phases:
	 * 1.) Find max depth and how many max depth nodes there are.
	 * 2.) Find the subtree that contains all the max depth nodes.
	 *
	 * Time complexity: O(n)
	 * Space complexity: O(n) due to stack frame. Worst case is unbalanced tree O(n).
	 */
	let maxDepth = -1;
	let maxDepthNodes = 0;

	const countMaxDepth = (node, depth) => {
		if (!node) {
			return;
		}

		if (depth > maxDepth) {
			maxDepth = depth;
			maxDepthNodes = 1;
		} else if (depth == maxDepth) {
			maxDepthNodes++;
		}

		countMaxDepth(node.left, depth + 1);
		countMaxDepth(node.right, depth + 1);
	};
	countMaxDepth(root, 0);

	let subtreeDepth = -1;
	let output = null;

	const findSubtree = (node, depth) => {
		if (!node) {
			return 0;
		}

		const thisCount = depth == maxDepth ? 1 : 0;
		const leftCount = findSubtree(node.left, depth + 1);
		const rightCount = findSubtree(node.right, depth + 1);
		const sum = thisCount + leftCount + rightCount;

		if (depth > subtreeDepth && sum == maxDepthNodes) {
			subtreeDepth = depth;
			output = node;
		}

		return sum;
	};
	findSubtree(root, 0);
	return output;
};
