import test from 'ava';
import solve from '.';

const input = ['nop +0', 'acc +1', 'jmp +4', 'acc +3', 'jmp -3', 'acc -99', 'acc +1', 'jmp -4', 'acc +6'];

test('part 1', t => {
	t.is(solve(input)[0], 5, 'valid');
});

test('part 2', t => {
	t.is(solve(input)[1], 8, 'valid');
});
