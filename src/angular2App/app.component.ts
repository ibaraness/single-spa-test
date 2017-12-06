import {Component} from "@angular/core";

@Component({
    selector: "hellow-app",
    moduleId: module.id.toString(),
    template: `
    <router-outlet></router-outlet>
    `
    //templateUrl: "./app.component.html",
    //styleUrls: ["./app.component.scss"],
})
export class HelloComponent {
    submit(event: any){
        event.preventDefault();
        alert("dsf")
        console.log("Submit!")
    }
}