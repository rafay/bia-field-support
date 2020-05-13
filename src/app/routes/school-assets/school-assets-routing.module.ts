import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BatteriesDataComponent} from "./batteries-data/batteries-data.component";


const routes: Routes = [
  {path: '', redirectTo: 'batteries-data', pathMatch: 'full'},
  {path: 'batteries-data/:schoolId', component: BatteriesDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolAssetsRoutingModule {
}
