var mode = require('mode');
/*
	HTTP server params
*/
mode.settings.server =
{
	host: '0.0.0.0',
	port: 1337
};
/*
	Supported extensions, with
	corresponding mime-types

	"default" matches empty extension
*/
mode.settings.types =
{
	default: 'text/html',
	css: 'text/css',
	js: 'application/javascript',
	jpg: 'image/jpeg',
	png: 'image/png',
	ico: 'image/x-icon'
};
/*
	Database params
*/
/*mode.settings.db =
{
	adaptor: mode.model.Mongo,
	host: '127.0.0.1',
	port: 27017,
	name: 'test'
};*/