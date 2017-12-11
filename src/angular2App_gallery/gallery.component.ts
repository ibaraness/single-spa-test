import {Component, NgZone, Inject} from "@angular/core";
import {exampleEvent} from './../common/exampleEvent.js';

@Component({
    selector: "gallery",
    moduleId: module.id.toString(),
    templateUrl: "./gallery.component.html",
})
export class GalleryComponent {

    private ngZone: any;

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
    }
}