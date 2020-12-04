import test from 'ava';
import solve from '.';

const input = [
	'..##.......',
	'#...#...#..',
	'.#....#..#.',
	'..#.#...#.#',
	'.#...##..#.',
	'..#.##.....',
	'.#.#.#....#',
	'.#........#',
	'#.##...#...',
	'#...##....#',
	'.#..#...#.#'
];

test('part 1', t => {
	t.is(solve(input)[0], 7, 'counts trees');
});

test('part 2', t => {
	t.is(solve(input)[1], 336, 'valid');
});
