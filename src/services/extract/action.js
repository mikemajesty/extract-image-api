import request from 'request';

var options = {
  uri: 'https://comprecomdinheiro.produtos.livelo.com.br/ccstoreui/v1/products?totalResults=true&totalExpandedResults=true&catalogId=cloudCatalog&limit=60&offset=0&categoryId=cat2030000&includeChildren=true&storePriceListGroupId=brlListPriceGroup',
  method: 'GET',
  json: true
}
export const extract = (req, res, next) => {
  return request(options, (error, response, body) => {

    const result = body.items.map(item => {
      return {
        [item.id.replace(/[^0-9]/g,'')]: item.p_largeImageUrl
      }
    });

    res.status(200).send(result);
  });
};