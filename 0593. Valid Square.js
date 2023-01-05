/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
	const getDistance = (point1, point2) => {
		return Math.sqrt(
			Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
		);
	};

	const getAngle = (A, B, C) => {
		const AB = Math.sqrt(Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2));
		const BC = Math.sqrt(Math.pow(B[0] - C[0], 2) + Math.pow(B[1] - C[1], 2));
		const AC = Math.sqrt(Math.pow(C[0] - A[0], 2) + Math.pow(C[1] - A[1], 2));
		return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB));
	};

	// Get the correct order of points
	const d12 = getDistance(p1, p2);
	const d13 = getDistance(p1, p3);
	const d14 = getDistance(p1, p4);
	const P1 = p1;
	let P2;
	let P3;
	let P4;
	if (d12 > d13 && d12 > d14) {
		P2 = p3;
		P3 = p2;
		P4 = p4;
	} else if (d13 > d12 && d13 > d14) {
		P2 = p2;
		P3 = p3;
		P4 = p4;
	} else if (d14 > d12 && d14 > d13) {
		P2 = p2;
		P3 = p4;
		P4 = p3;
	} else {
		return false;
	}

	// Compare distance
	const D12 = getDistance(P1, P2);
	const D23 = getDistance(P2, P3);
	const D34 = getDistance(P3, P4);
	const D41 = getDistance(P4, P1);
	if (!(D12 == D23 && D23 == D34 && D34 == D41 && D41 == D12)) {
		return false;
	}

	// Compare angles
	const A1 = getAngle(P4, P2, P1);
	const A2 = getAngle(P1, P3, P2);
	const A3 = getAngle(P2, P4, P3);
	const A4 = getAngle(P3, P1, P4);
	if (!(A1 == A2 && A2 == A3 && A3 == A4 && A4 == A1)) {
		return false;
	}

	return true;
};
