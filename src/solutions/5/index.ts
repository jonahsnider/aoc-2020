import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

namespace BoardingPasses {
	type BinaryChar = '1' | '0';
	type BoardingPassRowChar = 'B' | 'F';
	type BoardingPassColumnChar = 'R' | 'L';

	export type BoardingPass = `${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassRowChar}${BoardingPassColumnChar}${BoardingPassColumnChar}${BoardingPassColumnChar}`;
	export type BoardingPassBinary = `${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}`;
	export type BoardingPassRowBinary = `${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}${BinaryChar}`;
	export type BoardingPassColumnBinary = `${BinaryChar}${BinaryChar}${BinaryChar}`;
}

export default function day5(rows: Lines): SolutionPair {
	const boardingPasses = rows as BoardingPasses.BoardingPass[];

	/** Boarding pass with `B`s and `R`s replaced with `1`s, and `F`s and `L`s replaced with `0s`. */
	const binaryStrings = boardingPasses.map(row => row.replace(/[BR]/g, '1').replace(/[FL]/g, '0')) as BoardingPasses.BoardingPassBinary[];
	/** Row and column binary string separated into tuple. */
	const rowBinaryStrings = binaryStrings.map(binary => [binary.slice(0, 7), binary.slice(-3)]) as Array<
		[row: BoardingPasses.BoardingPassRowBinary, column: BoardingPasses.BoardingPassColumnBinary]
	>;
	/** Row and column numbers parsed as binary. */
	const binary = rowBinaryStrings.map(([row, column]) => [Number.parseInt(row, 2), Number.parseInt(column, 2)]);
	/** Seat IDs. */
	const seatIds = binary.map(([row, column]) => row * 8 + column);

	// eslint-disable-next-line unicorn/no-reduce
	const greatestSeatId = seatIds.reduce((max, current) => (current > max ? current : max));

	seatIds.sort((a, b) => a - b);

	let mySeatId = Number.NaN;

	let i = 0;
	while (true) {
		const current = seatIds[i++];
		const next = seatIds[i];

		if (next === undefined) {
			break;
		}

		if (current + 1 !== next) {
			mySeatId = current + 1;
			break;
		}
	}

	const solution: SolutionPair = [greatestSeatId, mySeatId];

	return solution;
}
