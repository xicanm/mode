var mode = require('mode');

mode.controller.Main = require('./app.js').extend(function(parent)
{
	this.static.count = 0;

	this.index = function()
	{
		this.args.title = 'node.js project';
	};
});