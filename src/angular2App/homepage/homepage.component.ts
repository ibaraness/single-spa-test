import { Component, OnInit, NgZone, Inject } from "@angular/core";

let exampleEvent: any;

import './../../common/exampleEvent.js'

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
        
		// this.subscription = exampleEvent.subscribe(showFramework => {
		// 	this.ngZone.run(() => {
		// 		this.border = showFramework ? getBorder('angular2') : ``;
		// 		this.showFramework = showFramework;
		// 	});
		// });
	}

}