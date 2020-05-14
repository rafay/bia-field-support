import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BatteryIssuesListComponent} from './battery-issues-list/battery-issues-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'battery-issues', pathMatch: 'full'},
  {path: 'battery-issues/:academyId', component: BatteryIssuesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolAssetsRoutingModule {
}
