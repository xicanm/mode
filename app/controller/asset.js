var mode = require('mode');

mode.controller.Asset = mode.controller.Base.extend(function()
{
	this.show = function()
	{
		var path = mode.settings.path.app + '/asset' + this.args.path;

		require('fs').readFile(path, this.bind(function(error, data)
		{
			if(error)
			{
				mode.throw(404, 'Not found ' + this.args.path);
			}
			this.callback(data);
		}));
	};
});