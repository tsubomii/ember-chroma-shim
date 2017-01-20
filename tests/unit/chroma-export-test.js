import { module, test } from 'qunit';
import chroma from 'chroma';

module('Unit | chroma export');

test('chroma exports', (assert) => {
  assert.ok(chroma, 'chroma exports');
});
