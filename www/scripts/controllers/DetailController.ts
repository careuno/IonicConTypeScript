/**
 * Created by careuno on 9/4/15.
 */
/// <reference path='../_reference.ts' />

module App {
    'use strict';

    export class DetailCtrl {

        public static $inject = [
            '$scope',
            '$location',
            '$stateParams'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope: IDetailScope, private $location: ng.ILocationService, private $stateParams: IStateParams) {
            $scope.vm = this;
            this.init();
        }

        private init(): void {

            this.$scope.item = this.$stateParams.itemID;
        }
    }

}