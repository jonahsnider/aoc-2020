import test from 'ava';
import solve from '.';

const input = [
	// Prettier-disable
	'abc',
	'',
	'a',
	'b',
	'c',
	'',
	'ab',
	'ac',
	'',
	'a',
	'a',
	'a',
	'a',
	'',
	'b'
];

test('part 1', t => {
	t.is(solve(input)[0], 11, 'sum of unique questions answered yes');
});

test('part 2', t => {
	t.is(solve(input)[1], 6, 'sum of unique questions every group member answered yes');
});
