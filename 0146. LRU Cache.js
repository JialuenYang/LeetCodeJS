class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addNode(val) {
		const node = new Node(val);

		if (this.head === null) {
			// Empty linked list
			this.head = node;
		} else {
			// Non-empty linked list
			this.tail.next = node;
			node.prev = this.tail;
		}

		this.tail = node;
		return node;
	}

	moveNodeToTail(node) {
		// Node is already at tail
		if (node.next === null) {
			return;
		}

		if (node.prev === null) {
			// Node is Head
			this.head = node.next;
			this.head.prev = null;
		} else {
			// Node is between 2 nodes
			node.prev.next = node.next;
			node.next.prev = node.prev;
		}

		node.prev = this.tail;
		this.tail.next = node;
		node.next = null;
		this.tail = node;
	}

	removeOldest() {
		const val = this.head.val;
		this.head = this.head?.next;
		if (this.head !== null) {
			this.head.prev = null;
		}
		return val;
	}
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.map = new Map();
	this.DoublyLinkedList = new DoublyLinkedList();
	this.maxCapacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.map.has(key)) {
		this.DoublyLinkedList.moveNodeToTail(this.map.get(key).node);
		return this.map.get(key).value;
	}
	return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	// Key already exists
	if (this.map.has(key)) {
		this.map.get(key).value = value;
		this.DoublyLinkedList.moveNodeToTail(this.map.get(key).node);
		return;
	}

	// Key doesn't exist and max capacity reached.
	if (this.map.size == this.maxCapacity) {
		// Need to remove oldest key
		const key = this.DoublyLinkedList.removeOldest();
		this.map.delete(key);
	}

	// Create new node
	const node = this.DoublyLinkedList.addNode(key);
	this.map.set(key, { value, node });
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
