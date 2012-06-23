var mode = require('mode');

mode.controller.Error = mode.controller.Base.extend(function()
{
	this.show = function(callback)
	{
		callback('ERROR: ' + this.args.message);
	};
});