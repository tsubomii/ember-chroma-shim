/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fbTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-chroma-shim',

  included: function(app) {
    app.import({
      development: 'vendor/chromajs/chroma.js',
      production: 'vendor/chromajs/chroma.min.js'
    }, {
      using: [{ transformation: 'amd', as: 'chroma' }]
    });
  },

  treeForVendor: function(vendorTree) {
    return treeForBrowserFetch(vendorTree);
  },
};

function treeForBrowserFetch(vendorTree) {
  var chromaDir = path.dirname(require.resolve('chroma-js'));
  var chromaFiles = ['chroma.js', 'chroma.min.js'];

  var chromaTree = new Funnel(chromaDir, { files: chromaFiles, destDir: '/chromajs' });

  if (vendorTree) {
    return mergeTrees([vendorTree, fbTransform(chromaTree)]);
  }

  return chromaTree;
}
