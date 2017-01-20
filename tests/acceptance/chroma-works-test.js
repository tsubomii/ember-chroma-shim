import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Chroma works');

test('Chroma works', function(assert) {
  visit('/');

  andThen(function() {
    let rendered = find('td').map((_, td) => { return $(td).text() }).toArray();
    let expected = ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'];

    assert.deepEqual(rendered, expected);
  });
});
