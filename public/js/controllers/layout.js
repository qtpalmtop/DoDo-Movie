//TODO Define module
define(['../app', '../../background/images'], function(app, images) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function($scope, $http) {

        var i = 0,
            imgs = images.imageurls,
            randombg = function() {
                return Math.round(Math.random() * (imgs.length - 1));
            };

        m$.Image.preLoadImages(imgs.slice(0, 4));
        $http.get('/checklogin').success(function(user) {
            $scope.resetLogin(user);
            $scope.user_id = user._id;
            console.log("user_id" + $scope.user_id);
        });
        $scope.txt = {
            home: "欢迎"
        };
        $scope.resources = {
            theme: " <link href='themes/glow/default.css' rel='stylesheet' type='text/css'>",
            bg: imgs[randombg()] //Random generate background image
        };
        $scope.resetLogin = function(user) {
            if (user.name) {
                $scope.login = {
                    url: 'logout',
                    name: '注销'
                };

                $scope.signup = {
                    url: '',
                    name: 'welcome:' + user.name
                };

            } else {
                $scope.login = {
                    url: 'login',
                    name: '登录'
                };
                $scope.signup = {
                    url: 'signup',
                    name: '注册'
                };
            }
        };
        $scope.setFilm = function(film) {
            if (film.name) {
                $scope.film = film;
            } else {
                return null;
            }
        };
        $scope.setTicket = function(tickets) {
            if (tickets.length >= 1) {
                $scope.tickets = tickets;
            } else {
                return null;
            }
        };
    });
});