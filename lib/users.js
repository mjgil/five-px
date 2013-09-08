/**
 * Getting user
 */

var Request = require('./request'),
    deco = require('./deco');

var Users = function Users(consumer_key) {
  this.req = new Request(consumer_key);
};

var userObj = {};
userObj.getById = function(id, parameters, callback) {
  parameters.id = id;

  this.req('users/show', parameters, callback);
};

userObj.getByName = function(username, parameters, callback) {
  parameters.username = username;

  this.req('users/show', parameters, callback);
};

userObj.getByEmail = function(email, parameters, callback) {
  parameters.email = email;

  this.req('users/show', parameters, callback);
};

userObj.getFriendsById = function(id, parameters, callback) {
  this.req('users/'+id+'/friends', parameters, callback);
};

Object.keys(userObj).forEach(function(key) {
  Users.prototype[key] = deco(userObj[key]);
});

module.exports = Users;