import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {SchoolAssetIssueComponent} from './school-asset-issue/school-asset-issue.component';
import {SchoolAssetsIssuesListComponent} from './school-assets-issues-list/school-assets-issues-list.component';


@NgModule({
  declarations: [SchoolAssetsIssuesListComponent, SchoolAssetIssueComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
