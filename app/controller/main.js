var mode = require('mode');

mode.controller.Main = require('./app.js').extend(function()
{
	this.static.count = 0;

	this.index = function(callback)
	{
		this.args.title = 'node.js project';

		callback();
	};
});