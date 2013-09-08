/**
 * Getting user
 */

var Request   = require("./request");

var Users = function Users(consumer_key) {
  this.req = new Request(consumer_key);
};

Users.prototype.getById = function(id, callback) {
  var parameters    = {};
  parameters.id   = id;

  this.req('users/show', parameters, callback);
};

Users.prototype.getByName = function(username, callback) {
  var parameters    = {};
  parameters.username = username;

  this.req('users/show', parameters, callback);
};

Users.prototype.getByEmail = function(email, callback) {
  var parameters = {};
  parameters.email = email;

  this.req('users/show', parameters, callback);
};

Users.prototype.getFriendsById = function(id, parameters, callback) {
  if (parameters === undefined) parameters = {};

  this.req('users/'+id+'/friends', parameters, callback);
};

module.exports = Users;