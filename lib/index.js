'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swapper = require('./helper/swap');
var clone = require('./helper/clone');
var uniques = require('./helper/uniques');

module.exports = function () {
  function _class(data) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '|';

    _classCallCheck(this, _class);

    this.data = data;
    this.separator = separator;
    this.uniques = uniques(data, separator);
  }

  _createClass(_class, [{
    key: 'swap',
    value: function swap() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var data = clone(this.data);

      for (var i = 0; i < this.uniques.length; i += 1) {
        var key = this.uniques[i];
        data = swapper(data, key, target[key], this.separator);
      }

      return data;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.swap();
    }
  }]);

  return _class;
}();