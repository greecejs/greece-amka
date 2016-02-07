'use strict';

var test = require('tape');

var amka = require('./index');

test('Those social security numbers must be valid', function (t) {
  t.plan(2)
  t.equal(amka.validate('01013099997'), true);
  t.equal(amka.validate(13121199999), true);
});

test('Those social security numbers must be invalid', function (t) {
  t.plan(7)
  t.equal(amka.validate(''), false);
  // Less that 11 digits.
  t.equal(amka.validate('1234567890'), false);
  // More that 11 digits.
  t.equal(amka.validate('123456789012'), false);
  // Contains chars other than digits.
  t.equal(amka.validate('abc12345678'), false);
  // Invalid.
  t.equal(amka.validate('00000000000'), false);
  // Invalid check digit.
  t.equal(amka.validate('10068004509'), false);
  // Valid check digit but invalid date.
  t.equal(amka.validate('31029903007'), false);
});
