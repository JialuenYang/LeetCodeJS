/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// Horrible solution. Can be done much much easier.
	const pArr = [];
	const qArr = [];
	routeToVal(root, p.val, pArr);
	routeToVal(root, q.val, qArr);
	pArr.reverse();
	qArr.reverse();
	let i = 0;
	while (pArr[i] === qArr[i] && i < Math.min(pArr.length, qArr.length)) {
		i++;
	}
	return pArr[i - 1];
};

const routeToVal = (node, val, arr) => {
	if (!node) {
		return false;
	}
	const hasFound =
		node.val == val ||
		routeToVal(node.left, val, arr) ||
		routeToVal(node.right, val, arr);
	if (hasFound) {
		arr.push(node);
	}
	return hasFound;
};
