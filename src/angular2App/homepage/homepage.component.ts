import { Component, OnInit, NgZone, Inject, AfterViewInit } from "@angular/core";
import {declareChildApplication} from 'single-spa';

//let exampleEvent: any;

//import './../../common/exampleEvent.js';
import {exampleEvent} from './../../common/exampleEvent.js';

function hashPrefix(prefix) {
    return function(location) {
        //console.log(location)
        return location.hash.startsWith(`#${prefix}`);
    }
}

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements AfterViewInit{
    
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
    
    ngAfterViewInit(): void {
        //Load react here
        declareChildApplication('reactjs', ()=> import("./../../reactJSApp/reactJSApp.js"), hashPrefix('/'));
    }

}