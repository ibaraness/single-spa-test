import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";
import {enableProdMode} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { InnerPageComponent } from "./innerPage/innerPage.component";
import {NavigationService} from "./services/navigation.service";
import {ModalComponent} from "./modal/modal.component";

//enableProdMode();

const appRouts: Routes = [
    {
        path:'',
        component: HomepageComponent
    },
    {
        path:'inner-page',
        component: InnerPageComponent
    },
    { 
        path: '**', 
        component: HomepageComponent 
    }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRouts,
            //{enableTracing:true}
        ),
    ],
    providers: [NavigationService],
    bootstrap: [HelloComponent],
    declarations: [HelloComponent, HomepageComponent, InnerPageComponent, ModalComponent]
})
export class AppModule {}