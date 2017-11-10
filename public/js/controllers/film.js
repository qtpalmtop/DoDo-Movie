/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10 / 29 / 17
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

    var FilmController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        $scope.title = "DoDo电影网基于nodejs";
        $rootScope.title = "DoDo电影网基于nodejs";
        $scope.imgs = Array.from($scope.film.img_urls).toString().split(',');
        console.log($scope.imgs);

        $scope.ticket = {
            film_id: '',
            play_date: '',
            seats: '',
            price: ''
        };
        console.log(666);

        $scope.showTicket = function(id) { //这里要传递id才行
            $scope.ticket.film_id = id;
            $http.post('/ticket', $scope.ticket).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.ticket = data;
                console.log(data);
                console.log("获取电影票成功");
                $scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
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

    return FilmController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/