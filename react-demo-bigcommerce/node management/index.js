var express = require('express')
var cors = require('cors')
var app = express()
const axios = require('axios');


app.use(cors())

app.get('/products', function (req, res, next) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Host': 'api.bigcommerce.com', 'Accept':'application/json', 'Content-Type': 'application/json' , 'User-Agent':'AppDemo-v2-12', 'X-Auth-Client': 'nmvcqe1ioocqqlcb2dle9fl9qvje9j1', 'X-Auth-Token':'h1hgyi42yo20ytzei8u6yq7by6drisw', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Origin': '*' }
    };
    axios.get('https://api.bigcommerce.com/stores/tjuhn0luax/v3/catalog/products?include_fields=name,price,sku,availability', requestOptions)
    .then(data => {res.send(data.data)}); 

})

app.get('/orders', function (req, res, next) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Host': 'api.bigcommerce.com', 'Accept':'application/json', 'Content-Type': 'application/json' , 'User-Agent':'AppDemo-v2-12', 'X-Auth-Client': 'nmvcqe1ioocqqlcb2dle9fl9qvje9j1', 'X-Auth-Token':'h1hgyi42yo20ytzei8u6yq7by6drisw', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Origin': '*' }
    };
    axios.get('https://api.bigcommerce.com/stores/tjuhn0luax/v2/orders', requestOptions)
    .then(data => {res.send(data.data)}); 

})

app.get('/customers', function (req, res, next) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Host': 'api.bigcommerce.com', 'Accept':'application/json', 'Content-Type': 'application/json' , 'User-Agent':'AppDemo-v2-12', 'X-Auth-Client': 'nmvcqe1ioocqqlcb2dle9fl9qvje9j1', 'X-Auth-Token':'h1hgyi42yo20ytzei8u6yq7by6drisw', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Origin': '*' }
    };
    axios.get('https://api.bigcommerce.com/stores/tjuhn0luax/v3/customers', requestOptions)
    .then(data => {res.send(data.data)}); 

})

app.listen(8090, function () {
  console.log('CORS-enabled web server listening on port 80')
})