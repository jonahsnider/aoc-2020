import test from 'ava';
import solve from '.';

const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

test('part 1', t => {
	t.is(solve(input)[0], 2, 'valid password count');
});

test('part 2', t => {
	t.is(solve(input)[1], 1, 'valid password count');

	t.is(solve(['1-3 a: abcde'])[1], 1, 'valid password count');
	t.is(solve(['1-3 b: cdefg'])[1], 0, 'valid password count');
	t.is(solve(['2-9 c: ccccccccc'])[1], 0, 'valid password count');
});
