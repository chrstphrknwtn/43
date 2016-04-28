import test from 'ava';
import lib from './'

test(t => {
  t.is(lib, 43);
  t.is(typeof lib, 'number');
});
