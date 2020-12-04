import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

enum Point {
	Square = '.',
	Tree = '#'
}

export default function day3(rows: Lines): SolutionPair {
	const solution: SolutionPair = [0, 1];

	let [x, y]: [number, number] = [0, 0];

	while (true) {
		y += 1;
		x += 3;

		if (rows[y] === undefined) {
			break;
		}

		if (rows[y][x] === undefined) {
			x = x % rows[y].length;
		}

		if (rows[y][x] === Point.Tree) {
			solution[0]++;
		}
	}

	const slopes: [number, number][] = [
		[1, 1],
		[3, 1],
		[5, 1],
		[7, 1],
		[1, 2]
	];

	const pt2counts: number[] = Array.from({length: slopes.length}, () => 0);
	let pt2index = 0;

	for (const slope of slopes) {
		x = 0;
		y = 0;
		while (true) {
			x += slope[0];
			y += slope[1];

			if (rows[y] === undefined) {
				break;
			}

			if (rows[y][x] === undefined) {
				x = x % rows[y].length;
			}

			if (rows[y][x] === Point.Tree) {
				pt2counts[pt2index]++;
			}
		}

		pt2index++;
	}

	for (const i of pt2counts) {
		solution[1] *= i;
	}

	return solution;
}
