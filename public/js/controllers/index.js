/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */
/*//TODO Define module
define(['../app'], function (app) {
    return app.controller('IndexController', function ($scope, $rootScope, $http) {
    $scope.title = "NJBlog";
        $rootScope.title="NJBLog simple ,fluent"
    });

});*/
define([], function() {

    var IndexController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        $scope.title = "DoDo电影网基于nodejs";
        $rootScope.title = "DoDo电影网基于nodejs";

        $scope.film = {
            _id: 0,
            name: '233',
            tap: '',
            director: '',
            actors: '',
            type: '',
            director: '',
            country: '',
            version: '',
            small_img: '/img/speed8.jpg',
            is_run: true
        };
        console.log(233);
        $scope.filmsInit = function() {
            $http.post('/index', $scope.film).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                //console.log(data);
                $scope.films = data;
                //$scope.$parent.resetLogin(data);

            });
        };
        $scope.filmsInit();
        $scope.showFilm = function(id) { //这里要传递id才行
            $scope.film._id = id;
            console.log(id);
            $http.post('/film', $scope.film).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.film = data;
                console.log(data);
                console.log("获取电影成功");
                $scope.$parent.setFilm(data); //将index作用域获取的film传递给父级layout作用域
            });
        };
        //$scope.filmsInit();
        /*      $(".blog").sly({scrollBy:500,scrollBar:"id='scrollbar'",dragHandle:1,dynamicHandle:1,startAt:0});*/
        /*     $(function(){
                 console.log("scroll bar");
                 $(".blog").mCustomScrollbar({
                     scrollButtons:{
                         enable:true
                     }
                 });
             });*/


    }];

    return IndexController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/