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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
	/**
	 * Time complexity: O(n * d^2) where n = number of nodes, d = number of stored distances
	 * Space complexity: O(n)
	 */
	let output = 0;

	const recursion = (node) => {
		if (!node) {
			return [];
		}

		if (!node.left && !node.right) {
			return [0];
		}

		const leftDist = recursion(node.left).map((d) => d + 1);
		const rightDist = recursion(node.right).map((d) => d + 1);
		for (const l of leftDist) {
			for (const r of rightDist) {
				if (l + r <= distance) {
					output++;
				}
			}
		}

		return [...leftDist, ...rightDist];
	};

	recursion(root);
	return output;
};
