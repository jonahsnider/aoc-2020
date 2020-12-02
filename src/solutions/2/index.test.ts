import test from 'ava';
import part1 from './part1';
import part2 from './part2';

const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

test('part 1', t => {
	t.is(part1(input), 2, 'valid password count');
});

test('part 2', t => {
	t.is(part2(input), 1, 'valid password count');

	t.is(part2(['1-3 a: abcde']), 1, 'valid password count');
	t.is(part2(['1-3 b: cdefg']), 0, 'valid password count');
	t.is(part2(['2-9 c: ccccccccc']), 0, 'valid password count');
});
