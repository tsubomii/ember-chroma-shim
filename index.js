/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-chroma-shim',

  included: function(app) {
    app.import('vendor/shims/chroma.js', {
      exports: {
        type: 'vendor',
        chroma: ['default']
      }
    });
    app.import('vendor/chroma.js', { prepend: true });
  },

  treeForVendor: function(vendorTree) {
    // if (isFastBoot()) {
    //   return treeForNodeFetch();
    // } else {
    return treeForBrowserFetch(vendorTree);
    // }
  },
};

function treeForBrowserFetch(vendorTree) {
  var chromaJSPath = require.resolve('chroma-js');
  var chromaPath = path.dirname(chromaJSPath);
  var chromaJS = path.basename(chromaJSPath);

  var chromaTree = new Funnel(chromaPath, { files: [chromaJS] });
  return mergeTrees([vendorTree, chromaTree]);
}

function isFastBoot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}
