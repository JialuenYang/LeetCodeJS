var SmallestInfiniteSet = function () {
	// Keep track of numbers that are popped
	this.set = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
	let i = 1;
	while (this.set.has(i)) {
		i++;
	}
	this.set.add(i);
	return i;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
	this.set.delete(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
