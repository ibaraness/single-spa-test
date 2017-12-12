import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';
import './app.module.js';

const ng1Lifecycles = singleSpaAngular1({
        angular: angular,
        domElementGetter: () => document.getElementById('angularjs'),
        mainAngularModule: 'single-spa-app',
        uiRouter: true,
        preserveGlobal: true,
});

export const bootstrap = [
    ng1Lifecycles.bootstrap,
];

export const mount = [
    ng1Lifecycles.mount,
];

export const unmount = [
    ng1Lifecycles.unmount,
];
