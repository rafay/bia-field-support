import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BatteryIssuesComponent } from './battery-issues/battery-issues.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [BatteryIssuesComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
