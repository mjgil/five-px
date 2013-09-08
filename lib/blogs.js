/**
 * Getting blogs
 */

var Request = require("./request");

var Blogs = function Blogs (consumer_key) {
  this.req = new Request(consumer_key);
};

Blogs.prototype.getById = function getById(id, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  
  this.req('blogs/'+id, parameters, callback);
};

Blogs.prototype.getCommentsById = function getCommentsById(id, parameters, callback) {
  if( parameters === undefined ) parameters = {};

  this.req('blogs/'+id+'/comments', parameters, callback);
};

Blogs.prototype.getFresh = function getFresh(parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'fresh';

  this.req('blogs', parameters, callback);
};

Blogs.prototype.getByUsername = function getByUsername(username, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'user';
  parameters.username = username;

  this.req('blogs', parameters, callback);
};

Blogs.prototype.getByUserId = function getByUserId(user_id, parameters, callback) {
  if( parameters === undefined ) parameters = {};
  parameters.feature  = 'user';
  parameters.user_id  = user_id;

  this.req('blogs', parameters, callback);
};

module.exports = Blogs;