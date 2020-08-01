import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as layOutComponent from './layout';
import { SharedModule } from '@shared/shared.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, 
    ...layOutComponent.components,
  ],
  imports: [
    // angular
    BrowserModule,
    // core & shared
    CoreModule,
    SharedModule,
    // app
    AppRoutingModule,
  //  BrowserAnimationsModule,
    NgbModule 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
