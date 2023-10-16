export default {
	reachableKeys,
	countPaths,
	listAcyclicPaths
};

const map = [
	[4,6],
	[6,8],
	[7,9],
	[4,8],
	[3,9,0],
	[],
	[1,7,0],
	[2,6],
	[1,3],
	[2,4]
]

function reachableKeys(startingDigit) {
	return map[startingDigit];
}

function countPaths(startingDigit,hopCount) {
	if (hopCount === 0){
		return 1;
	}

	let count = 0;

	reachableKeys(startingDigit).forEach(digit => count += countPaths(digit, hopCount - 1));

	return count;
}

function listAcyclicPaths(startingDigit) {
	// TODO: given the digit/key to start from,
	// return a list of the distinct acyclic
	// paths that are possible to traverse
	//
	// e.g. [
	//   [4, 3, 8, 1, 6, 7, 2, 9],
	//   [4, 3, 8, 1, 6, 0],
	//   ...
	// ]
	return [];
}
