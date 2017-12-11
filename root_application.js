import {declareChildApplication, start} from 'single-spa';

declareChildApplication('angular2', ()=> import("./src/angular2App/angular2App.js"), hashPrefix('/'));
declareChildApplication('reactjs', ()=> import("./src/reactJSApp/reactJSApp.js"), hashPrefix('/app'));
declareChildApplication('angular2_gallery', ()=> import("./src/angular2App_gallery/angular2App_gallery.js"), hashPrefix('/app'));
//declareChildApplication('angularjs', ()=> import("./src/angularJSApp/angularJSApp.js"), hashPrefix('/app'));

start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}