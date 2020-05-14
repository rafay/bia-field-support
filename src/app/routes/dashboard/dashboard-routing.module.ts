import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SchoolAssetsIssuesListComponent} from './school-assets-issues-list/school-assets-issues-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'shcool-assets-issues'},
  {path: 'shcool-assets-issues', component: SchoolAssetsIssuesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
