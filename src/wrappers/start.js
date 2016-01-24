(function (root, factory) {
  'use strict';
  if (typeof module === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
        return factory;
    });
  } else {
    root.MediumEditorTable = factory;
  }
}(this, function () {

  'use strict';
