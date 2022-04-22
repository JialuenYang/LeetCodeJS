// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let curr = new ListNode();
	let root = curr;

	while (list1 && list2) {
		const whichBigger = list1.val < list2.val;

		curr.next = whichBigger ? list1 : list2;
		curr = curr.next;

		if (whichBigger) list1 = list1.next;
		else list2 = list2.next;
	}

	if (list1) {
		curr.next = list1;
	}
	if (list2) {
		curr.next = list2;
	}

	return root.next;
};
