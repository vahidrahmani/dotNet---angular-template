import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as shareComponents from "@shared/component/index";
import { NgxPermissionsModule } from "ngx-permissions"
import { ToShamsiDatePipe } from './service/to-shamsi-date.pipe';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPermissionsModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    ...shareComponents.components,
    ToShamsiDatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    , ...shareComponents.components,
    NgxPermissionsModule,
    ToShamsiDatePipe,
  ]
})
export class SharedModule { }
