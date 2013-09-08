/**
 * Getting blogs
 */

var Request = require('./request'),
    deco = require('./deco');

var Blogs = function Blogs (consumer_key) {
  this.req = new Request(consumer_key);
};

var blogObj = {};

blogObj.getById = function getById(id, parameters, callback) {
  this.req('blogs/'+id, parameters, callback);
};

blogObj.getCommentsById = function getCommentsById(id, parameters, callback) {
  this.req('blogs/'+id+'/comments', parameters, callback);
};

blogObj.getFresh = function getFresh(parameters, callback) {
  parameters.feature  = 'fresh';

  this.req('blogs', parameters, callback);
};

blogObj.getByUsername = function getByUsername(username, parameters, callback) {
  parameters.feature  = 'user';
  parameters.username = username;

  this.req('blogs', parameters, callback);
};

blogObj.getByUserId = function getByUserId(user_id, parameters, callback) {
  parameters.feature  = 'user';
  parameters.user_id  = user_id;

  this.req('blogs', parameters, callback);
};

Object.keys(blogObj).forEach(function(key) {
  Blogs.prototype[key] = deco(blogObj[key]);
});

module.exports = Blogs;