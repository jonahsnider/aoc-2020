import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';
import {CoordinatePair} from '../../lib/types';

enum Point {
	Square = '.',
	Tree = '#'
}

export default function day3(rows: Lines): SolutionPair {
	const solution: SolutionPair = [0, 1];

	const slopes: CoordinatePair[] = [
		[3, 1],
		[1, 1],
		[5, 1],
		[7, 1],
		[1, 2]
	];

	const treeCount: number[] = Array.from({length: slopes.length}, () => 0);
	let index = 0;

	for (const slope of slopes) {
		let [x, y]: CoordinatePair = [0, 0];

		while (true) {
			x += slope[0];
			y += slope[1];

			if (rows[y] === undefined) {
				break;
			}

			if (rows[y][x] === undefined) {
				x %= rows[y].length;
			}

			if (rows[y][x] === Point.Tree) {
				treeCount[index]++;
			}
		}

		index++;
	}

	for (const count of treeCount) {
		solution[1] *= count;
	}

	solution[0] = treeCount[0];

	return solution;
}
