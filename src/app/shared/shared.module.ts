import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HighlightThresholdComponent} from './components/highlight-threshold/highlight-threshold.component';
import {MaterialModule} from '../material.module';

const THIRD_MODULES = [
  MaterialModule,
  FlexLayoutModule
];

const COMPONENTS = [
  HighlightThresholdComponent
];
const PIPES = [];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ...THIRD_MODULES,
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule {
}
