'use strict';

var AMKA_REGEX = /^[0-9]{11}$/;

/**
 * Validate a Greek social security number (AMKA).
 *
 * @param {string|number} amka a Greek social security number (AMKA).
 * @return {boolean} Whether the number is valid or not.
 */
exports.validate = function (amka) {
  var _amka = String(amka);
  if (!AMKA_REGEX.test(_amka) || _amka == '00000000000') {
    return false;
  }
  var sum = 0;
  for (var i = 1; i <= _amka.length; i++) {
    var digit = parseInt(_amka.charAt(i - 1), 10);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
          digit -= 9;
      }
    }
    sum += digit;
  }
  return (sum % 10 === 0);
}
