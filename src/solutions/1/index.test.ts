import test from 'ava';
import part1 from './part1';
import part2 from './part2';

const input = ['1721', '979', '366', '299', '675', '1456'];

test('part 1', t => {
	t.is(part1(input), 514579, 'checksum');
	t.is(part1([]), undefined, 'undefined when no solution');
});

test('part 2', t => {
	t.is(part2(input), 241861950, 'checksum');
	t.is(part2([]), undefined, 'undefined when no solution');
});
