import {declareChildApplication, start} from 'single-spa';

declareChildApplication('angular2', ()=> import("./src/angular2App/angular2App.js"), hashPrefix('/app'));
declareChildApplication('reactjs', ()=> import("./src/reactJSApp/reactJSApp.js"), hashPrefix('/app'));
//declareChildApplication('angularjs', ()=> import("./src/angularJSApp/angularJSApp.js"), hashPrefix('/app'));

start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}