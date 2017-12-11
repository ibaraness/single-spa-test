import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import SingleSpaAngular2 from 'single-spa-angular2';
import { GalleryModule } from './gallery.module.ts';
import { Router } from '@angular/router';

const ng2Lifecycles = SingleSpaAngular2({
    domElementGetter,
    mainModule: GalleryModule,
    angularPlatform: platformBrowserDynamic(),
    template: `<gallery></gallery>`,
    Router
});

export const bootstrap = [
    ng2Lifecycles.bootstrap
];

export const mount = [
    ng2Lifecycles.mount
];

export const unmount = [
    ng2Lifecycles.unmount
]

function domElementGetter(){
    return document.getElementById('angular2Gallery')
}