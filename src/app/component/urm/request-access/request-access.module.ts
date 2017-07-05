import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAccessComponent} from './request-access.component';
import {requestAccessRoutes } from './request-access.route'

@NgModule({
  declarations: [
   RequestAccessComponent
  ],
  exports: [
   
  ],
  imports: [
    CommonModule,
    requestAccessRoutes
  ]
})
export class RequestAccessModule { }
