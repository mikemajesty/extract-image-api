'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extract = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  uri: 'https://comprecomdinheiro.produtos.livelo.com.br/ccstoreui/v1/products?totalResults=true&totalExpandedResults=true&catalogId=cloudCatalog&limit=60&offset=0&categoryId=cat2030000&includeChildren=true&storePriceListGroupId=brlListPriceGroup',
  method: 'GET',
  json: true
};
const extract = exports.extract = (req, res, next) => {
  return (0, _request2.default)(options, (error, response, body) => {

    const result = body.items.map(item => {
      return {
        [item.id.replace(/[^0-9]/g, '')]: item.p_largeImageUrl
      };
    });

    res.status(200).send(result);
  });
};