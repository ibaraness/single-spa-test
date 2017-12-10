import {Component} from "@angular/core";
import {NavigationService} from "./services/navigation.service";

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

    constructor(private navService: NavigationService){

    }

    public gotoHome():void{
        this.navService.setCurrentPage('homepage');
    }

    public gotoInnerPage():void{
        this.navService.setCurrentPage('inner-page');
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