import test from '@endo/ses-ava/test.js';
import { objectFilter } from '../object-filter.js';

test('test objectFilter with value-based filtering', async t => {
  t.deepEqual(
    objectFilter({ a: 1, b: 2, c: 3 }, n => n > 1),
    { b: 2, c: 3 },
  );

  t.deepEqual(
    objectFilter({ a: 1, b: 2, c: 3 }, n => n > 5),
    {},
  );

  t.deepEqual(
    objectFilter({ a: 1, b: 2, c: 3 }, () => true),
    { a: 1, b: 2, c: 3 },
  );
});

test('test objectFilter with key-based filtering', async t => {
  t.deepEqual(
    objectFilter({ a: 1, b: 2, c: 3 }, (val, key) => key !== 'b'),
    { a: 1, c: 3 },
  );

  t.deepEqual(
    objectFilter({ a: 1, b: 2, c: 3 }, (val, key) => key.startsWith('a')),
    { a: 1 },
  );
});

test('test objectFilter error handling', async t => {
  // @ts-expect-error
  t.throws(() => objectFilter({ a: 1 }), { message: 'filterFn is not a function' });
});