import {Component} from "@angular/core";

@Component({
    selector: "hellow-app",
    moduleId: module.id.toString(),
    template: `
        <h2>TEST TEST!</h2>
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