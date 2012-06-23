var mode = require('mode');

mode.controller.Asset = mode.controller.Base.extend(function(parent)
{
	this.show = function(callback)
	{
		var path = mode.settings.path.app + '/asset' + this.args.path;
		
		require('fs').readFile(path, function(error, data)
		{
			if(error)
			{
				parent.error(404, 'Not found' + that.args.path);
			}
			callback(data);
		});
	};
});