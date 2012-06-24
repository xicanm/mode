var mode = require('mode');

mode.helper.times = function(count)
{
	if(count == 1)
	{
		return 'one time';
	}
	return count + ' times';
};