var mode = require('mode');

mode.controller.App = mode.controller.Base.extend(function()
{
	this.init = function(cb)
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
		/*
			End action asynchronously, even though no
			aync action is taking place here, to make
			it extendable by children with async init
		*/
		cb.respond();
	};
	this.notify = function(type, message)
	{
		this.notifications.add(type, message);
	};
},
true);

module.exports = mode.controller.App;