/// <reference path="_reference.ts"/>

module App {
    'use strict';

    angular.module('App', ['ionic'])
        .config(['$stateProvider', '$urlRouterProvider', states])
        .controller('PageCtrl', PageCtrl)
        .controller('DetailCtrl', DetailCtrl)
        .run(function($ionicPlatform ){
            $ionicPlatform.ready(function() {
                console.log("ready");
            });
        });

    function states($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/page');

        $stateProvider
            .state('page', {
                url: '/page',
                templateUrl: './templates/page.html',
                controller: 'PageCtrl'
            })
            .state('detail', {
                url: '/detail/:itemID',
                templateUrl: './templates/detail.html',
                controller: 'DetailCtrl'
            })
    }
}