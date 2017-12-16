import {Component, NgZone, Inject} from "@angular/core";
import {exampleEvent} from './../common/exampleEvent.js';

@Component({
    selector: "gallery",
    moduleId: module.id.toString(),
    templateUrl: "./gallery.component.html",
})
export class GalleryComponent {

    private ngZone: any;

    public titles = [
        "Angular2/4",
        "AngularJS",
        "ReactJS",
        "VueJS"
    ];

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
    }
}