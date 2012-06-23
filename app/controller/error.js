exports.super = 'controller/base';

exports.class = function(mode)
{
	this.action.show = function(callback)
	{
		callback('ERROR: ' + this.args.message);
	};
};