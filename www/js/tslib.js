/// <reference path='../_reference.ts' />
/// <reference path='../_reference.ts' />
var App;
(function (App) {
    'use strict';
    var PageCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function PageCtrl($scope, $location, $state) {
            this.$scope = $scope;
            this.$location = $location;
            this.$state = $state;
            $scope.vm = this;
        }
        PageCtrl.prototype.goToPage2 = function (item) {
            //   this.$location.path('/detail/' + item.toString());
            this.$state.go('detail', { itemID: item.toString() });
        };
        PageCtrl.$inject = [
            '$scope',
            '$location',
            '$state'
        ];
        return PageCtrl;
    })();
    App.PageCtrl = PageCtrl;
})(App || (App = {}));
/**
 * Created by careuno on 9/4/15.
 */
/// <reference path='../_reference.ts' />
var App;
(function (App) {
    'use strict';
    var DetailCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function DetailCtrl($scope, $location, $stateParams) {
            this.$scope = $scope;
            this.$location = $location;
            this.$stateParams = $stateParams;
            $scope.vm = this;
            this.init();
        }
        DetailCtrl.prototype.init = function () {
            this.$scope.item = this.$stateParams.itemID;
        };
        DetailCtrl.$inject = [
            '$scope',
            '$location',
            '$stateParams'
        ];
        return DetailCtrl;
    })();
    App.DetailCtrl = DetailCtrl;
})(App || (App = {}));
/// <reference path="_reference.ts"/>
var App;
(function (App) {
    'use strict';
    angular.module('App', ['ionic']).config(['$stateProvider', '$urlRouterProvider', states]).controller('PageCtrl', App.PageCtrl).controller('DetailCtrl', App.DetailCtrl).run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            console.log("ready");
        });
    });
    function states($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/page');
        $stateProvider.state('page', {
            url: '/page',
            templateUrl: './templates/page.html',
            controller: 'PageCtrl'
        }).state('detail', {
            url: '/detail/:itemID',
            templateUrl: './templates/detail.html',
            controller: 'DetailCtrl'
        });
    }
})(App || (App = {}));
/**
 * Created by careuno on 9/4/15.
 */
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./Interfaces/IPageScope.ts" />
/// <reference path="./Interfaces/IDetailScope.ts" />
/// <reference path="./Interfaces/IStateParams.ts" />
/// <reference path="./controllers/PageController.ts" />
/// <reference path="./controllers/DetailController.ts" />
/// <reference path="app.ts" /> 
