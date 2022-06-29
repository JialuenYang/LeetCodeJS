// First implementation using two different recursions. One to save new values and another to add up all the new values.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
	recursion(root);
	return addNodeVal(root);
};

const recursion = (node) => {
	if (node === null) {
		return 0;
	}
	const leftSum = node.left === null ? 0 : recursion(node.left);
	const rightSum = node.right === null ? 0 : recursion(node.right);
	const oldVal = node.val;
	node.val = Math.abs(leftSum - rightSum);
	return oldVal + leftSum + rightSum;
};

const addNodeVal = (node) => {
	if (node === null) {
		return 0;
	}
	const leftVal = node.left === null ? 0 : addNodeVal(node.left);
	const rightVal = node.right === null ? 0 : addNodeVal(node.right);
	return node.val + leftVal + rightVal;
};

// ==========================================================================================
// A better version that only uses one recursion that returns an array of [old sum, new sum]
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
	return recursion(root)[1];
};

const recursion = (node) => {
	if (node === null) {
		return [0, 0];
	}
	const leftRecursion = recursion(node.left);
	const rightRecursion = recursion(node.right);
	const leftSum = leftRecursion[0];
	const rightSum = rightRecursion[0];
	return [
		node.val + leftSum + rightSum,
		Math.abs(leftSum - rightSum) + leftRecursion[1] + rightRecursion[1],
	];
};

// ==========================================================================================
// Final version. There's no need to complicate the return with an array.
// Just put the recursion inside the function and add using a simple variable.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
	let output = 0;
	const recursion = (node) => {
		if (node === null) {
			return 0;
		}
		const leftSum = recursion(node.left);
		const rightSum = recursion(node.right);
		output += Math.abs(leftSum - rightSum);
		return node.val + leftSum + rightSum;
	};
	recursion(root);
	return output;
};
