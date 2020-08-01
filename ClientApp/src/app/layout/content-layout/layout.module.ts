import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import * as dashbordModule from '@dashbord/pages';
import * as dashbordComponents from '@dashbord/components';
import { SharedModule } from '@shared/shared.module';
import { HttpService } from './http.service';
import { ImgLibraryModule } from "@exir/ngx-img"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ...dashbordModule.components, ...dashbordComponents.components
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule,
    ImgLibraryModule,
      NgbModule 
  ],  
  entryComponents: [
  ],
  providers: [
    HttpService
  ]
})
export class LayoutModule { }
