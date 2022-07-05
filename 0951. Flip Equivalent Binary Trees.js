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
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
	// Check if every parent has the same children regardless of order
	const map1 = new Map();
	const map2 = new Map();
	treeToMap(root1, map1);
	treeToMap(root2, map2);

	if (map1.size != map2.size) {
		return false;
	}

	for (const [key, val] of map2) {
		if (!map1.has(key)) {
			return false;
		}
		const arr1 = map1.get(key);
		if (
			!(
				(arr1[0] == val[0] && arr1[1] == val[1]) ||
				(arr1[0] == val[1] && arr1[1] == val[0])
			)
		) {
			return false;
		}
	}
	return true;
};

const treeToMap = (node, map) => {
	if (!node) {
		return;
	}
	const left = node.left ? node.left.val : null;
	const right = node.right ? node.right.val : null;
	map.set(node.val, [left, right]);
	treeToMap(node.left, map);
	treeToMap(node.right, map);
};
