var mode = require('mode');

mode.controller.Error = require('./app.js').extend(function()
{
	this.show = function(callback)
	{
		callback();
	};
});