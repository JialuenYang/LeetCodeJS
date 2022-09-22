/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let lengthA = 0;
	let lengthB = 0;
	const headAcopy = headA;
	const headBcopy = headB;
	while (headA) {
		lengthA++;
		headA = headA.next;
	}
	while (headB) {
		lengthB++;
		headB = headB.next;
	}
	headA = headAcopy;
	headB = headBcopy;
	let lengthDiff = Math.abs(lengthA - lengthB);
	let longer = lengthA >= lengthB ? headA : headB;
	let shorter = lengthA >= lengthB ? headB : headA;
	while (lengthDiff >= 1) {
		longer = longer.next;
		lengthDiff--;
	}
	while (longer !== shorter) {
		longer = longer.next;
		shorter = shorter.next;
		if (longer === null || shorter === null) {
			return null;
		}
	}
	return longer;
};

/*
This problem was on the second interview of UTA Dr. Liu's GRA position. 
He saw that I didn't do this one yet and chose it. 
*/

// 1st solution
const arrA = [];
const arrB = [];
while (headA) {
	arrA.push(headA);
	headA = headA.next;
}
while (headB) {
	arrB.push(headB);
	headB = headB.next;
}
const longerArr = arrA.length >= arrB.length ? arrA : arrB;
const shorterArr = arrA.length >= arrB.length ? arrB : arrA;
let longInd = longerArr.length - 1;
let shortInd = shorterArr.length - 1;
while (longerArr[longInd] === shorterArr[shortInd]) {
	longInd--;
	shortInd--;
	if (longInd < 0 || shortInd < 0) {
		break;
	}
}
longInd++;
shortInd++;
if (longerArr[longInd] !== shorterArr[shortInd]) {
	return null;
}
return longerArr[longInd];

// 2nd solution
const set = new Set();
while (headA) {
	set.add(headA);
	headA = headA.next;
}
while (headB) {
	if (set.has(headB)) {
		return headB;
	}
	set.add(headB);
	headB = headB.next;
}
return null;
