import {Component, NgZone, Inject} from "@angular/core";
import {NavigationService} from "./services/navigation.service";
import {exampleEvent} from './../common/exampleEvent.js';

@Component({
    selector: "hellow-app",
    moduleId: module.id.toString(),
    // template: `
    // <router-outlet></router-outlet>
    // `
    templateUrl: "./app.component.html",
    //styleUrls: ["./app.component.scss"],
})
export class HelloComponent {

    private ngZone: any;

    constructor(private navService: NavigationService, @Inject(NgZone) ngZone:NgZone){
        this.ngZone = ngZone;
    }

    public gotoHome():void{
        this.navService.setCurrentPage('homepage');
        exampleEvent.next('homepage');
    }

    public gotoInnerPage():void{
        this.navService.setCurrentPage('inner-page');
        exampleEvent.next('inner-page');
    }

    public getCurrectPage(): string{
        return this.navService.getCurrectPage();
    }

    submit(event: any){
        event.preventDefault();
        alert("dsf")
        console.log("Submit!")
    }
}