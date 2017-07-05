import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalystComponent} from './analyst.component';
import {analystRoutes } from './analyst.route'

@NgModule({
  declarations: [
   AnalystComponent
  ],
  exports: [
   
  ],
  imports: [
    CommonModule,
    analystRoutes
  ]
})
export class AnalystModule { }
