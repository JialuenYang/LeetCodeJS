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
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
	const arr1 = [];
	const arr2 = [];
	BSTtoArray(root1, arr1);
	BSTtoArray(root2, arr2);
	const output = [];
	let index1 = 0;
	let index2 = 0;
	while (index1 < arr1.length || index2 < arr2.length) {
		if (index1 >= arr1.length) {
			output.push(arr2[index2]);
			index2++;
			continue;
		}
		if (index2 >= arr2.length) {
			output.push(arr1[index1]);
			index1++;
			continue;
		}
		if (arr1[index1] <= arr2[index2]) {
			output.push(arr1[index1]);
			index1++;
		} else {
			output.push(arr2[index2]);
			index2++;
		}
	}
	return output;
};

const BSTtoArray = (node, arr) => {
	if (!node) {
		return;
	}
	BSTtoArray(node.left, arr);
	arr.push(node.val);
	BSTtoArray(node.right, arr);
};
