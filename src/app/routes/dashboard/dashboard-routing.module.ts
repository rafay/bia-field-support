import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BatteryIssuesComponent} from "./battery-issues/battery-issues.component";


const routes: Routes = [
  {path: '', redirectTo: 'battery-issues'},
  {path: 'battery-issues', component: BatteryIssuesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
