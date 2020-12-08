import {SolutionPair} from '../../../types/aoc';
import {Lines} from '../../lib/fs';

enum Operation {
	Accumulate = 'acc',
	Jump = 'jmp',
	NoOperation = 'nop'
}

type Instruction = `${Operation} ${'-' | '+'}${number}`;

const instructionExpression = /^(?<operation>\w+) (?<argument>[+-]\d+)$/;

function parseInstruction(instruction: Instruction): {operation: Operation; argument: number} {
	const matches = instructionExpression.exec(instruction);

	if (!matches?.groups) {
		throw new TypeError('No matches');
	}

	const operation = matches.groups.operation as Operation;
	const argument = Number(matches.groups.argument);

	return {operation, argument};
}

export default function day8(instructions: Lines): SolutionPair {
	const solution: SolutionPair = [0, 0];

	const program = [...instructions] as Instruction[];

	const visited = Array.from({length: program.length}, () => false);

	let i = 0;
	while (!visited[i]) {
		const instruction = program[i];

		visited[i] = true;

		const {operation, argument} = parseInstruction(instruction);

		// eslint-disable-next-line default-case, @typescript-eslint/switch-exhaustiveness-check
		switch (operation) {
			case Operation.Accumulate:
				solution[0] += argument;
				break;
			case Operation.Jump:
				i += argument - 1;
				break;
		}

		i++;
	}

	const swapped = Array.from({length: program.length}, () => false);

	for (const _ of program) {
		visited.fill(false);

		let accumulator = 0;
		let pointer = 0;
		let changed = false;

		while (true) {
			if (visited[pointer] === undefined) {
				solution[1] = accumulator;
				return solution;
			}

			if (visited[pointer]) {
				break;
			}

			const instruction = program[pointer];

			visited[pointer] = true;

			const parsed = parseInstruction(instruction);
			let {operation} = parsed;
			const {argument} = parsed;

			if (!changed && !swapped[pointer] && operation !== Operation.Accumulate) {
				changed = true;
				swapped[pointer] = true;
				operation = operation === Operation.Jump ? Operation.NoOperation : Operation.Jump;
			}

			// eslint-disable-next-line default-case, @typescript-eslint/switch-exhaustiveness-check
			switch (operation) {
				case Operation.Accumulate:
					accumulator += argument;
					break;
				case Operation.Jump:
					pointer += argument - 1;
					break;
			}

			pointer++;
		}
	}

	throw new TypeError('no');
}
