define(['app', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup', 'controllers/film', 'controllers/ticket', 'controllers/order'],
    function(app, index, login, logout, singnup, film, ticket, order) {

        return app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'partials/index.html',
                controller: index
            }).
            when('/film', {
                templateUrl: 'partials/film.html',
                controller: film
            }).
            when('/ticket', {
                templateUrl: 'partials/ticket.html',
                controller: ticket
            }).
            when('/order', {
                templateUrl: 'partials/order.html',
                controller: order
            }).
            when('/orderlist', {
                templateUrl: 'partials/order.html',
                controller: order
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: login
            }).
            when('/logout', {
                templateUrl: 'partials/logout.html',
                controller: logout
            }).
            when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: singnup
            }).
            otherwise({
                redirectTo: '/'
            });
            /*  $locationProvider.html5Mode(true);*/
        }]);
    });