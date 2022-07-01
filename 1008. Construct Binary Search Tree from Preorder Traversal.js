// Method 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
	const root = new TreeNode(preorder[0]);
	for (let i = 1; i < preorder.length; i++) {
		let parent;
		let temp = root;
		while (temp !== null) {
			parent = temp;
			if (preorder[i] < temp.val) {
				temp = temp.left;
			} else {
				temp = temp.right;
			}
		}
		const newNode = new TreeNode(preorder[i]);
		if (preorder[i] < parent.val) {
			parent.left = newNode;
		} else {
			parent.right = newNode;
		}
	}
	return root;
};

// Small change to the code by removing parent variable
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
	const root = new TreeNode(preorder[0]);
	for (let i = 1; i < preorder.length; i++) {
		const newNode = new TreeNode(preorder[i]);
		let temp = root;
		while (1) {
			if (preorder[i] < temp.val) {
				if (temp.left === null) {
					temp.left = newNode;
					break;
				}
				temp = temp.left;
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					break;
				}
				temp = temp.right;
			}
		}
	}
	return root;
};
