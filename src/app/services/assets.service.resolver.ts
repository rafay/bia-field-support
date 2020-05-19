import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AssetsService } from './assets.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssetsServiceResolver implements Resolve<any>{
    constructor(private assetsService: AssetsService) {

    }

    initializeAssetsService() {
        return this.assetsService.initializeService();
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.initializeAssetsService();
    }
}