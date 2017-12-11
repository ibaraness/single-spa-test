import {Component, NgZone, Inject, OnInit} from "@angular/core";
import {exampleEvent} from './../../common/exampleEvent.js';

@Component({
    selector: "ng2-modal",
    moduleId: module.id.toString(),
    templateUrl: "./modal.component.html",
})
export class ModalComponent implements OnInit{

    private ngZone: any;

    public show = false;

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
    }

    ngOnInit(): void {
        exampleEvent.subscribe((action)=>{
            if(action === 'show-ng2-modal'){
                this.show = true;
            }
        })
    }

}