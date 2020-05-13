import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {environment} from "../../environments/environment";


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    })
  ]
})
export class RoutesRoutingModule {
}
