import {declareChildApplication, start} from 'single-spa';

declareChildApplication('angular2', ()=> import("./src/angular2App/angular2App.js"), hashPrefix('/'));
declareChildApplication('reactjs', ()=> import("./src/reactJSApp/reactJSApp.js"), hashPrefix('/'));
//declareChildApplication('angular2_gallery', ()=> import("./src/angular2App_gallery/angular2App_gallery.js"), hashPrefix('/'));
declareChildApplication('angularjs', ()=> import("./src/angularJSApp/angularJSApp.js"), hashPrefix('/'));

start();

function hashPrefix(prefix) {
    return function(location) {
        //console.log(location)
        return location.hash.startsWith(`#${prefix}`);
    }
}