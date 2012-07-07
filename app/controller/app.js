var mode = require('mode');

mode.controller.App = mode.controller.Base.extend(function()
{
	this.init = function(callback)
	{
		this.args.layout = 'default';

		callback.respond();
	};
},
true);

module.exports = mode.controller.App;