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
},
true);

module.exports = mode.controller.App;