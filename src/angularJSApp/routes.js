import angular from 'angular';
import './root.component.js';

angular
    .module('single-spa-app')
    .config(($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
});
    $locationProvider.hashPrefix('');

$stateProvider
    .state('root', {
        url: '',
        template: '<root />',
    });
});