/**
 * Define the API
 */

var Photos = require("./photos"),
  , Users = require("./users"),
  , Blogs = require("./blogs");

var FIVE_PX = function FIVE_PX(consumer_key) {
  this.photos = new Photos(consumer_key);
  this.users = new Users(consumer_key);
  this.blogs = new Blogs(consumer_key);
};

module.exports = (function() {
  return FIVE_PX;
})();