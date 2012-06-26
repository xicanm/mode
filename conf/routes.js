var mode = require('mode');
/*
	Default route, redirects / to /main/index
*/
mode.route.add('/', { redirect: '/main/index' });
/*
	Controller route, redirect to index action if missing

	Only works for controllers in default namespace
*/
mode.route.add('/@controller/?', { redirect: '/{{controller}}/index' });
/*
	REST route

	create, update and delete require POST
*/
mode.route.add('/:controller/@action', {}, function(args, method)
{
	var rest = ['index', 'show', 'new', 'edit', 'create', 'update', 'delete'];

	if(rest.indexOf(args.action) == -1)
	{
		return false;
	}
	return method == 'POST' || rest.indexOf(args.action) < 4;
});
/*
	Asset route
*/
mode.route.add(/^.+\.[a-z]+$/i,
{
	controller: 'asset', action: 'show', path: '$0'
});