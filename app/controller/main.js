module.exports = require('./app.js').extend(function() {
  this.index = function() {
    return '/{{controller}}/index';
  };
});