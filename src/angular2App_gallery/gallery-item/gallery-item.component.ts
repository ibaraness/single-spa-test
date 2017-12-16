import { Component, NgZone, Inject, Input } from "@angular/core";
import {exampleEvent} from './../../common/exampleEvent.js';

@Component({
    selector: "gallery-item",
    moduleId: module.id.toString(),
    templateUrl: "./gallery-item.component.html",
})
export class GalleryItemComponent {

    @Input('title') title: string;

    private ngZone: any;

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
    }
}