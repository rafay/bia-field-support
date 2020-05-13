import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolAssetsRoutingModule } from './school-assets-routing.module';
import { BatteriesDataComponent } from './batteries-data/batteries-data.component';


@NgModule({
  declarations: [BatteriesDataComponent],
  imports: [
    CommonModule,
    SchoolAssetsRoutingModule
  ]
})
export class SchoolAssetsModule { }
