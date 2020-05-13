import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {environment} from "../../environments/environment";
import {AppLayoutComponent} from "../layouts/app-layout/app-layout.component";


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'school-assets',
        loadChildren: () => import('./school-assets/school-assets.module').then(m => m.SchoolAssetsModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    })
  ]
})
export class RoutesRoutingModule {
}
