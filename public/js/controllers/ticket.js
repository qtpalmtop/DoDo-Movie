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

    var TicketController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {

        $scope.order = {
            user_id: '',
            film_id: '',
            ticket_id: '',
            is_get: false,
            is_reback: false
        }
        $http.get('/checklogin').success(function(user) {
            //$scope.resetLogin(user);
            $scope.user_id = user._id;
            //console.log("user_id" + $scope.user_id);
        });
        $scope.buy = function(user_id, film_id, ticket_id) { //这里要传递id才行
            $scope.order.user_id = user_id;
            $scope.order.film_id = film_id;
            $scope.order.ticket_id = ticket_id;
            if (user_id != undefined) {
                $http.post('/order', $scope.order).success(function(data) {
                    if (data.err) {
                        return $scope.err = data.err;
                    }
                    //$scope.order = data;
                    console.log(data);
                    console.log("购买订单成功");
                    //$scope.$parent.setOrder(data); //将index作用域获取的film传递给父级layout作用域
                    //$location.path("/orderlist");
                });
            } else {
                $location.path("/");
                console.log("用户没有登录不能购票！");
            }
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

    return TicketController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/