import {Injectable} from "@angular/core";

@Injectable()
export class NavigationService {
    private currentPage:string = 'homepage';

    public getCurrectPage(){
        return this.currentPage;
    }

    public setCurrentPage(page:string){
        this.currentPage = page;
    }
}