import { NgModule } from '@angular/core';

import { SchoolAssetsRoutingModule } from './school-assets-routing.module';
import { BatteryIssuesListComponent } from './battery-issues-list/battery-issues-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [BatteryIssuesListComponent],
  imports: [
    SharedModule,
    SchoolAssetsRoutingModule
  ]
})
export class SchoolAssetsModule { }
