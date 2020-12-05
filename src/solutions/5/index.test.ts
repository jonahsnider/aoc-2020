import test from 'ava';
import solve from '.';

const input = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];

test('part 1', t => {
	t.is(solve([input[0]])[0], 357, 'works');
	t.is(solve([input[1]])[0], 567, 'works');
	t.is(solve([input[2]])[0], 119, 'works');
	t.is(solve([input[3]])[0], 820, 'works');

	t.is(solve(input)[0], 820, 'works');
});
