/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
	const dpA = new Array(energyDrinkA.length).fill(0);
	const dpB = new Array(energyDrinkB.length).fill(0);
	dpA[0] = energyDrinkA[0];
	dpB[0] = energyDrinkB[0];
	for (let i = 1; i < dpA.length; i++) {
		dpA[i] = Math.max(dpA[i - 1], dpB[i - 2] ?? 0) + energyDrinkA[i];
		dpB[i] = Math.max(dpB[i - 1], dpA[i - 2] ?? 0) + energyDrinkB[i];
	}
	return Math.max(dpA[dpA.length - 1], dpB[dpB.length - 1]);
};
