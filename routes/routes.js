/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

var index = require('./index');
var user = require('./user');
var film = require('./film');
var ticket = require('./ticket');
var order = require('./order');
var blog = require('./blog');
module.exports = function(app) {
	app.get('/', index.index);
	app.post('/index', index.indexInit);
	app.post('/film', film.show);
	app.post('/ticket', ticket.show);
	app.post('/order', order.create);
	app.get('/orderlist', order.show);
	app.get('/list', user.list);
	app.get('/blog', blog.list);
	app.get('/user', user.list);
	app.post('/signup', user.create);
	app.post('/login', user.login);
	app.get('/logout', user.logout);
	app.get('/checklogin', index.getLoginUser);
};