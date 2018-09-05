(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var swapper = require('./helper/swap');

  var clone = require('./helper/clone');

  module.exports =
  /*#__PURE__*/
  function () {
    function _class(data) {
      _classCallCheck(this, _class);

      this.data = data;

      for (var _len = arguments.length, uniques = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        uniques[_key - 1] = arguments[_key];
      }

      this.uniques = uniques;
    }

    _createClass(_class, [{
      key: "swap",
      value: function swap() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var data = clone(this.data);

        for (var i = 0; i < this.uniques.length; i += 1) {
          var key = this.uniques[i];
          data = swapper(data, key, target[key]);
        }

        return data;
      }
    }, {
      key: "value",
      get: function get() {
        return this.swap();
      }
    }]);

    return _class;
  }();

})));
