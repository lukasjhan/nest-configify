import { expect, test } from 'vitest';
import { hello } from '../src/index';

test('adds 1 + 2 to equal 3', () => {
  expect(hello()).toBe('Hello world!');
});
