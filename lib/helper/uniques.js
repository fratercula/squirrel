'use strict';

module.exports = function (data, separator) {
  var regex = new RegExp('"*?\\' + separator + '.*?":', 'g');
  var uniques = JSON.stringify(data).match(regex).map(function (item) {
    return item.split('":')[0].split(separator)[1];
  });

  return Array.from(new Set(uniques));
};