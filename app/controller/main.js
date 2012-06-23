var mode = require('mode');

mode.controller.Main = mode.controller.App.extend(function(parent)
{
	this.static.counter = 0;

	this.init = function(callback)
	{
		parent.init.call(this);

		this.args.title = 'Hello #' + ++this.static.counter;

		callback();
	};
	this.index = function(callback)
	{
		this.args.counter = this.static.counter;

		callback();
	};
});