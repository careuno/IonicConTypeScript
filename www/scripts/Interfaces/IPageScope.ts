/// <reference path='../_reference.ts' />
module App {
    export interface IPageScope extends ng.IScope {
        location: ng.ILocationService;
        vm: PageCtrl;
    }
}