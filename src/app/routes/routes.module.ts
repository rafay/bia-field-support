import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from "./routes-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule {
}
