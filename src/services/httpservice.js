var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060';

var weatheMapAPIKey  = 'd7b70ba3aa6d62087982858e6c053b6a';

var newUrl = '';

// let header = new Headers({
//     'Access-Control-Allow-Origin':'*',
//     'Content-Type': 'application/json'
// });

var service = {
  get : function(url) {
    return fetch(baseUrl + url , {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:6060",
        "Origin" : "X-Requested-With",
        "Access-Control-Allow-Origin" : 'true',
        'Content-Type': 'application/json'
      },
      // credentials: "include"
    }).then(function(response){
      console.log('response in httpservice--->',response);
      return response.json();
    });
  }
};

module.exports = service;
