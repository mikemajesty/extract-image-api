'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _base_routes = require('./services/base_routes');

var _base_routes2 = _interopRequireDefault(_base_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());

const PORT = process.env.PORT || 3000;

app.use('/', _base_routes2.default);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));