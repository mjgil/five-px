/**
 * Request data from the API
 */

var https = require("https"),
    url = require('url'),
    qs = require('querystring');

var Request = function Request(consumer_key) {
  var that = this;
  this.consumer_key = consumer_key;
  this.baseUrl = '/v1/';
  this.host = 'api.500px.com';

  return function() {
    executeRequest.apply(that, arguments);
  };
};

function executeRequest(method, parameters, callback) {
  if (typeof parameters === 'function') {
    callback = parameters;
    parameters = {};
  }
  parameters = parameters || {};
  parameters.consumer_key = this.consumer_key;

  var parameterString = qs.stringify(parameters),
      basePath = url.resolve(this.baseUrl, method),
      fullPath = basePath + '?' + parameterString;

  var urlObj = {
    host: this.host,
    path: fullPath
  }

  https.get(urlObj, function(res) {
    if (res.statusCode && res.statusCode === 200) {
      var chunks = '';
      res.on('data', function(resultData) {
        chunks += resultData;
      });
      res.on('end', function() {
        callback(null, JSON.parse(chunks));
      });
    }
    else {
      callback({code: res.StatusCode});
    }
  }).on('error', function(error) {
    callback(error);
  });
};

module.exports = Request;
