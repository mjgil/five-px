/**
 * Getting blogs
 */

var Request = require("./request");

var Blogs = function Blogs (consumer_key) {
  this._request = new Request(consumer_key);
};

Blogs.prototype.getById = function getById(id, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  
  this._request('blogs/'+id, parameters, callback);
};

Blogs.prototype.getCommentsById = function getCommentsById(id, parameters, callback) {
  if( parameters === undefined ) parameters = {};

  this._request('blogs/'+id+'/comments', parameters, callback);
};

Blogs.prototype.getFresh = function getFresh(parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'fresh';

  this._request('blogs', parameters, callback);
};

Blogs.prototype.getByUsername = function getByUsername(username, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'user';
  parameters.username = username;

  this._request('blogs', parameters, callback);
};

Blogs.prototype.getByUserId = function getByUserId(user_id, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'user';
  parameters.user_id  = user_id;

  this._request('blogs', parameters, callback);
};

module.exports = Blogs;