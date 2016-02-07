'use strict';

var test = require('tape');

var amka = require('./index');

// TODO find some valid numbers to add to this test.
// test('Those social security numbers must be valid', function (t) {
//   t.plan(1)
//   t.equal(amka.validate(''), true);
// });

test('Those social security numbers must be invalid', function (t) {
  t.plan(6)
  t.equal(amka.validate(''), false);
  // Less that 11 digits.
  t.equal(amka.validate('1234567890'), false);
  // More that 11 digits.
  t.equal(amka.validate('123456789012'), false);
  // Contains chars other than digits.
  t.equal(amka.validate('abc12345678'), false);
  // Invalid.
  t.equal(amka.validate('00000000000'), false);
  // Invalid.
  t.equal(amka.validate('12345678901'), false);
});
