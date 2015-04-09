/// <reference path='../_reference.ts' />

module App {
    'use strict';

    export class PageCtrl {

        public static $inject = [
            '$scope',
            '$location',
            '$state'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope: IPageScope, private $location: ng.ILocationService, private $state : angular.ui.IStateService) {
            $scope.vm = this;
        }

        goToPage2(item : number) {
         //   this.$location.path('/detail/' + item.toString());
            this.$state.go('detail', { itemID : item.toString()});
        }


    }

}