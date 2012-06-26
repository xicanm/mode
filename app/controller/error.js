var mode = require('mode');

mode.controller.Error = mode.controller.App.extend(function()
{
	this.show = function(callback)
	{
		callback();
	};
});