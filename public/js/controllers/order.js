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

    var OrderController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {

        $scope.OrdersInit = function() {
            $http.get('/orderlist').success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                //console.log(data);
                $scope.orders = data;
                //$scope.$parent.resetLogin(data);

            });
        };
        $scope.OrdersInit(); //获取页面数据
        $scope.reback = function() { //发送的film自带_id，不用加参数id
            $http.post('/film', $scope.film).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.film = data;
                console.log(data);
                //$scope.$parent.resetLogin(data);


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

    return OrderController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/