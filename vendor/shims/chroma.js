var moduleChroma = chroma;
chroma = undefined; // unset global

define('chroma', [], function () {
  'use strict';
  return {
    'default': moduleChroma
  };
});
