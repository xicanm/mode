var mode = require('mode');

mode.controller.App = mode.controller.REST.extend(function()
{
	this.init = function()
	{
		/*
			Store session reference
		*/
		this.session = this.conn.req.session;
		/*
			Init and store notification reference
		*/ 
		this.notifications = mode.notification.init(this.session);
		/*
			Pass notification to view vars
		*/
		this.args.notifications = this.notifications;
		/*
			Set default view layout
		*/
		this.args.layout = 'default';
		/*
			Set default page title
		*/
		this.args.title = 'node.js project';
	};
	this.notify = function(type, message)
	{
		this.notifications.add(type, message);
	};
	this.created = function(error)
	{
		var type = this.model.group;

		if(!error)
		{
			this.notify('success', 'Created ' + type + ' successfully!');
		}
		else this.notify('error', 'Could not create ' + type + '!');
	};
	this.updated = function(error)
	{
		var type = this.model.group;

		if(!error)
		{
			this.notify('success', 'Updated ' + type + ' successfully!');
		}
		else this.notify('error', 'Could not update ' + type + '!');
	};
	this.deleted = function(error)
	{
		var type = this.model.group;

		if(!error)
		{
			this.notify('notice', 'Deleted ' + type + ' successfully!');
		}
		else this.notify('error', 'Could not delete ' + type + '!');
	};
},
true);

module.exports = mode.controller.App;