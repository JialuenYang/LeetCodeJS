/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
	let curCapacity = capacity;
	let steps = 0;
	for (let i = 0; i < plants.length; i++) {
		if (curCapacity >= plants[i]) {
			steps++;
		} else {
			// Refill and move onto next plant
			steps += 2 * i + 1;
			curCapacity = capacity;
		}
		curCapacity -= plants[i];
	}
	return steps;
};
