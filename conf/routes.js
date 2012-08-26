var mode = require('mode');

// Default route, redirects / to /main/index
mode.route.add('/', {redirect: '/main/index'});

// Controller route, redirect to index action if missing
// Does not work for namespaced controllers
mode.route.add('/@controller/?', {redirect: '/{{controller}}/index'});

// REST route
mode.route.add('/:controller/@action', {}, function(args, method) {
  var actions = [
    'index', 'show', 'new', 'edit', 'create', 'update', 'delete'
  ];
  if (actions.indexOf(args.action) == -1) {
    return false;
  }
  // POST is required for create, update and delete
  return method == 'POST' || actions.indexOf(args.action) < 4;
});

// Asset route
mode.route.add(/^.+\.[a-z]+$/i, {
  controller: 'asset', action: 'show', path: '$0'
});