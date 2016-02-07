'use strict';

var checkdigit = require('checkdigit');
var moment = require('moment');

var AMKA_REGEX = /^[0-9]{11}$/;

/**
 * Validate a Greek social security number (AMKA).
 *
 * @param {string|number} amka a Greek social security number (AMKA).
 * @return {boolean} Whether the number is valid or not.
 */
exports.validate = function (amka) {
  var _amka = String(amka);
  if (!AMKA_REGEX.test(_amka) || _amka === '00000000000') {
    return false;
  }
  // Validate that the last digit is the correct check digit (created using the
  // Luhn algorithm https://en.wikipedia.org/wiki/Luhn_algorithm).
  if (!checkdigit.mod10.isValid(_amka)) {
    return false;
  }
  // Check that the first 6 digits are a valid date of birth.
  var dob = moment(_amka.substring(0, 6), 'DDMMYY')
  if (!dob.isValid()) {
    return false;
  }
  return true;
}
