/**
 * Getting photos
 */

var Request = require("./request"),
    deco = require('./deco');

var Photos = function Photos(consumer_key) {
  this.req = new Request(consumer_key);
};

var photoObj = {};
photoObj.getById = function(photo_id, parameters, callback) {
  this.req('photos/'+photo_id, parameters, callback);
};

photoObj.getByUsername = function(username, parameters, callback) {
  parameters.feature = 'user';
  parameters.username = username;

  this.req('photos', parameters, callback);
};

photoObj.getByUserId = function(user_id, parameters, callback) {
  parameters.feature = 'user';
  parameters.user_id = user_id;

  this.req('photos', parameters, callback);
};

photoObj.getFavoritesByUsername = function(username, parameters, callback) {
  parameters.feature = 'user_favorites';
  parameters.username = username;

  this.req('photos', parameters, callback);
};

photoObj.getFavoritesByUserId = function(user_id, parameters, callback) {
  parameters.feature = 'user_favorites';
  parameters.user_id = user_id;

  this.req('photos', parameters, callback);
};

photoObj.getFriendsByUsername = function(username, parameters, callback) {
  parameters.feature = 'user_friends';
  parameters.username = username;

  this.req('photos', parameters, callback);
};

photoObj.getFriendsByUserId = function(user_id, parameters, callback) {
  parameters.feature = 'user_friends';
  parameters.user_id = user_id;

  this.req('photos', parameters, callback);
};

photoObj.getPopular = function(parameters, callback) {
  parameters.feature = 'popular';

  this.req('photos', parameters, callback);
};

photoObj.getUpcoming = function(parameters, callback) {
  parameters.feature = 'upcoming';

  this.req('photos', parameters, callback);
};

photoObj.getEditorsChoice = function(parameters, callback) {
  parameters.feature = 'editors';

  this.req('photos', parameters, callback);
};

photoObj.getFreshToday = function(parameters, callback) {
  parameters.feature = 'fresh_today';

  this.req('photos', parameters, callback);
};

photoObj.getFreshYesterday = function(parameters, callback) {
  parameters.feature = 'fresh_yesterday';

  this.req('photos', parameters, callback);
};

photoObj.getFreshWeek = function(parameters, callback) {
  parameters.feature = 'fresh_week';

  this.req('photos', parameters, callback);
};

photoObj.searchByTag = function(tag, parameters, callback) {
  parameters.tag = tag;

  this.req('photos/search', parameters, callback);
};

photoObj.searchByTerm = function(term, parameters, callback) {
  parameters.term = term;

  this.req('photos/search', parameters, callback);
};

Object.keys(photoObj).forEach(function(key) {
  Photos.prototype[key] = deco(photoObj[key]);
});

module.exports = Photos;