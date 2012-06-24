var mode = require('mode');

(mode.controller.App = mode.controller.Base.extend(function()
{
	this.init = function(callback)
	{
		this.args.layout = 'default';

		if(typeof(callback) == 'function')
		{
			callback();
		}
	};
}))
.abstract = true;