import angular from 'angular';
import 'angular-ui-router';

angular
    .module('single-spa-app', ['ui.router'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);