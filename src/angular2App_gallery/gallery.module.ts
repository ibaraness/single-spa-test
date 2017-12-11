import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./gallery.component";
import {enableProdMode} from '@angular/core';
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";


@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [GalleryComponent],
    declarations: [GalleryComponent, GalleryItemComponent]
})
export class GalleryModule {}