var mode = require('mode');

mode.controller.Main = mode.controller.App.extend(function()
{
	this.static.count = 0;

	this.index = function(callback)
	{
		this.args.title = 'node.js project';

		callback();
	};
});