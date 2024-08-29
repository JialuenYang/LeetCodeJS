class Node {
	constructor(index) {
		this.index = index;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length == 0;
	}

	addTail(index) {
		const node = new Node(index);
		if (this.length == 0) {
			this.head = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
		}
		this.tail = node;
		this.length++;
	}

	removeHead() {
		if (this.length == 0) {
			return;
		}
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}

		this.head = this.head.next;
		this.head.prev = null;
		this.length--;
	}

	removeTail() {
		if (this.length == 0) {
			return;
		}
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}

		this.tail = this.tail.prev;
		this.tail.next = null;
		this.length--;
	}
}

// Need to create a double linked list or deque to keep track of indices of numbers. Leftmost index always points to current highest number.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const output = [];
	const deque = new Deque();

	for (let i = 0; i < nums.length; i++) {
		if (!deque.isEmpty()) {
			if (deque.head.index == i - k) {
				deque.removeHead();
			}

			while (nums[deque.tail?.index] < nums[i]) {
				deque.removeTail();
			}
		}
		deque.addTail(i);

		if (i >= k - 1) {
			// Add to output
			output.push(nums[deque.head.index]);
		}
	}

	return output;
};
