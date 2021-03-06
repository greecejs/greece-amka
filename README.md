# greece-amka [![Build Status](https://travis-ci.org/greecejs/greece-amka.svg?branch=master)](https://travis-ci.org/greecejs/greece-amka) [![Coverage Status](https://coveralls.io/repos/github/greecejs/greece-amka/badge.svg?branch=master)](https://coveralls.io/github/greecejs/greece-amka?branch=master) [![npm](https://img.shields.io/npm/v/greece-amka.svg)](https://www.npmjs.com/package/greece-amka)

> Validation of a Greek social security number ([AMKA](http://www.amka.gr)).

> Έλεγχος ορθότητας ενός Αριθμού Μητρώου Κοινωνικής Ασφάλισης ([ΑΜΚΑ](http://www.amka.gr)).

## Installation

```sh
$ npm install greece-amka
```

## Usage

To validate an AMKA number:

```js
var amka = require('greece-amka');

amka.validate('01013099997'); // true
amka.validate('00000000000'); // false
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)
