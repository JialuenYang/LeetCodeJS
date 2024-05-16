// This is the Node class
// Keep track of the min and val in each node
var Node = function (val, min) {
	this.val = val;
	this.min = min;
};

var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	let min = val;
	if (this.stack.length > 0) {
		min = Math.min(this.stack[this.stack.length - 1].min, min);
	}

	const node = new Node(val, min);
	this.stack.push(node);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
