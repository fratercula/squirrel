'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = require('./clone');

function swapper(target, unique, data, separator) {
  var o = clone(target);

  Object.keys(o).forEach(function (key) {
    var current = o[key];
    var type = typeof current === 'undefined' ? 'undefined' : _typeof(current);
    var field = key.split(separator + unique)[0];
    var exist = key.indexOf(separator + unique) > -1;
    var useOrigin = data === undefined;

    if (Array.isArray(current)) {
      delete o[key];
      o[field] = current.map(function (item) {
        return swapper(item, unique, data, separator);
      });
      return;
    }

    if (type === 'object' && !exist || type === 'object' && useOrigin) {
      delete o[key];
      o[field] = swapper(current, unique, data, separator);
      return;
    }

    if (exist) {
      delete o[key];
      o[field] = useOrigin ? current : data;
    }
  });

  return o;
}

module.exports = swapper;