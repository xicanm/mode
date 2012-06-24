var mode = require('mode');

mode.controller.Main = mode.controller.App.extend(function()
{
	this.static.count = 0;

	this.index = function(callback)
	{
		this.args.title = 'New Project';
		this.args.count = this.static.count++;

		callback();
	};
});