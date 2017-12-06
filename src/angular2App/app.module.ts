import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
    imports: [BrowserModule],
    bootstrap: [HelloComponent],
    declarations: [HelloComponent]
})
export class AppModule {}