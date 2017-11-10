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
        $scope.showOrder = function() { //这里要传递id才行

            $http.get('/orderlist').success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                //$scope.order = data;
                console.log(data);
                console.log("查询订单成功");
                $scope.orders = data //将index作用域获取的film传递给父级layout作用域
                    //$location.path("/");
            });

        };
        $scope.resetLogin = function(user) {
            if (user.name) {
                $scope.login = {
                    url: 'logout',
                    name: '登出'
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
                $scope.tickets = [];
                for (ticket in tickets) {
                    $scope.tickets.push(tickets[ticket]);
                    //console.log(tickets[ticket]);
                }
                console.log(tickets);
            } else {
                return null;
            }
        };
        $scope.setOrder = function(orders) {
            if (orders.length >= 1) {
                $scope.orders = [];
                for (order in orders) {
                    $scope.orders.push(orders[order]);
                    console.log(orders[order]);
                }
            } else {
                return null;
            }
        };
    });
});
/*
 define([ 'i18n!resources/nls/res'], function (res) {
 var LayoutController=['$scope','$http','$window', function ($scope, $http, $window) {
 $http.get('/checklogin').success(function (user) {
 $scope.resetLogin(user);
 });
 $scope.txt={
 home:res.welcome
 }
 $scope.resetLogin = function (user) {
 if (user.name) {
 $scope.login = {
 url:'logout',
 name:res.logout
 };

 $scope.signup = {
 url:'',
 name:'welcome:' + user.name
 };
 } else {
 $scope.login = {
 url:'login',
 name:res.login
 };
 $scope.signup = {
 url:'signup',
 name:'SignUp'
 };
 }
 };
 } ];
 return LayoutController;
 });*/