import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {SchoolAssetsIssuesListComponent} from './school-assets-issues-list/school-assets-issues-list.component';


@NgModule({
  declarations: [SchoolAssetsIssuesListComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
