var mode = require('mode');

mode.controller.Main = require('./app.js').extend(function()
{
	this.index = function()
	{
		this.args.title = 'node.js project';
	};
});