import { Component, OnInit, NgZone, Inject } from "@angular/core";

//let exampleEvent: any;

//import './../../common/exampleEvent.js';
import {exampleEvent} from './../../common/exampleEvent.js';

console.log("sdf", exampleEvent)

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
    private showFramework: any;
    private ngZone: any;
    private subscription: any;

    constructor(@Inject(NgZone) ngZone:NgZone){
        this.showFramework = false;
		this.ngZone = ngZone;
    }

    ngOnInit() {
        if(exampleEvent){
            this.subscription = exampleEvent.subscribe((text: any)=> {
                this.ngZone.run(()=>{
                    console.log("Next", text);
                })
            });
            exampleEvent.next("show me the money!");
        }else {
            console.log("exampleEvent", exampleEvent)
        }
	}

}