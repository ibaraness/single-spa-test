import {declareChildApplication, start} from 'single-spa';

// Register your application with single-spa. More application will be registerd as you create them.
// declareChildApplication("cool-app", loadCoolApp, isCoolAppActive);

// function loadCoolApp(){
//     return import("./cool-app/cool-app.app.js");
// }

// function isCoolAppActive(){
//     return window.location.hash.startsWith("#/cool");
// }

declareChildApplication("cool-app", loadAngular2App, isCoolAppActive);

start();

function loadAngular2App(){
    return import("./src/angular2App/angular2App.js");
}

function isCoolAppActive(){
    return true;
    //return window.location.hash.startsWith("#/cool");
}
