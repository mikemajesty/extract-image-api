'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _route = require('./extract/route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', (req, res) => res.status(200).send());

router.use('/extract', _route2.default);

router.use('/*', (req, res) => res.status(404).send());

module.exports = router;