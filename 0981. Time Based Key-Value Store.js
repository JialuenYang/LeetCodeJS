var TimeMap = function () {
	this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
	if (this.map.has(key)) {
		this.map.get(key).push({ value, timestamp });
	} else {
		this.map.set(key, [{ value, timestamp }]);
	}
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
	if (this.map.has(key)) {
		const arr = this.map.get(key);

		let l = 0;
		let r = arr.length - 1;

		if (arr[r].timestamp <= timestamp) {
			return arr[r].value;
		}
		if (timestamp < arr[0].timestamp) {
			return "";
		}

		while (l <= r) {
			const m = Math.floor((l + r) / 2);
			if (arr[m].timestamp == timestamp) {
				return arr[m].value;
			} else if (arr[m].timestamp < timestamp) {
				if (arr[m + 1]?.timestamp > timestamp) {
					return arr[m].value;
				}
				l = m + 1;
			} else {
				r = m - 1;
			}
		}
	} else {
		return "";
	}
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
