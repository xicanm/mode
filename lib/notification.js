exports.init = function(session)
{
	if(!session.notifications)
	{
		session.notifications = new List();
	}
	return session.notifications;
};
var List = function(){};

List.prototype = [];

List.prototype.add = function(type, message)
{
	this.push(
	{
		type: type, message: message
	});
};
List.prototype.get = function()
{
	if(!this.length)
	{
		return false;
	}
	return this.shift();
};
List.prototype.all = function()
{
	var list = [], item;

	while(item = this.get())
	{
		list.push(item);
	}
	return list;
};