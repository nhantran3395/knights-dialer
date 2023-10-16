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

function memoizeCountPaths (countPaths) {
	const cache = {};

	return function memoized(startingDigit, hopCount) {
		const key = `${startingDigit}-${hopCount}`;
		if (!cache[key]) {
			cache[key] = countPaths(startingDigit, hopCount);
		}

		return cache[key];
	}
}

countPaths = memoizeCountPaths(countPaths);

function listAcyclicPaths(startingDigit) {
	const hops = reachableKeys(startingDigit);
	const paths = [];

	hops.forEach(hop => {
		const unfinishedPath = [startingDigit, hop];
		follow(unfinishedPath, paths);
	})

	return paths;
}

function follow(unfinishedPath, paths) {
	const edge = unfinishedPath.slice(-1);
	const hops = reachableKeys(edge);

	let pathForwardFound = false;

	hops.forEach(hop => {
		if (!unfinishedPath.includes(hop)){
			pathForwardFound = true;
			follow([...unfinishedPath, hop], paths);
		}
	})

	if (!pathForwardFound){
		paths.push(unfinishedPath);
	}
}