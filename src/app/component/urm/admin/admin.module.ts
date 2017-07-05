import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent} from './admin.component';
import {adminRoutes } from './admin.route'

@NgModule({
  declarations: [
   AdminComponent
  ],
  exports: [
   
  ],
  imports: [
    CommonModule,
    adminRoutes
  ]
})
export class AnalystModule { }
