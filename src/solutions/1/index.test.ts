import test from 'ava';
import solve from '.';

const input = ['1721', '979', '366', '299', '675', '1456'];

test('part 1', t => {
	t.is(solve(input)[0], 514579, 'checksum');
	t.is(solve([])[0], -1, 'output when no solution is found');
});

test('part 2', t => {
	t.is(solve(input)[1], 241861950, 'checksum');
	t.is(solve([])[1], -1, 'output when no solution is found');
});
