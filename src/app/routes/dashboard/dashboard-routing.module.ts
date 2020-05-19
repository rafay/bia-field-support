import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolAssetsIssuesListComponent } from './school-assets-issues-list/school-assets-issues-list.component';
import { AssetsServiceResolver } from 'src/app/services/assets.service.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'shcool-assets-issues' },
  {
    path: 'shcool-assets-issues',
    component: SchoolAssetsIssuesListComponent,
    resolve: {
      assetsServiceData: AssetsServiceResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
